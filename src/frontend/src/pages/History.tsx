import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Loader2,
  Plus,
  Trash2,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { createActor } from "../backend";
import { Layout } from "../components/Layout";
import type { PredictionRecord } from "../types/prediction";

function formatDate(timestamp: bigint): string {
  const ms = Number(timestamp) / 1_000_000;
  return new Date(ms).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface InputChipProps {
  label: string;
  value: string;
}

function InputChip({ label, value }: InputChipProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 font-body text-xs text-muted-foreground">
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </span>
  );
}

interface HistoryCardProps {
  record: PredictionRecord;
  index: number;
  deletingId: bigint | null;
  onDelete: (id: bigint) => void;
}

function HistoryCard({
  record,
  index,
  deletingId,
  onDelete,
}: HistoryCardProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const isSuitable = record.result === "Suitable";

  return (
    <motion.li
      key={record.id.toString()}
      data-ocid={`history.item.${index}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ delay: index * 0.05 }}
      className="card-elevated overflow-hidden"
    >
      {/* Color bar indicator */}
      <div
        className={`h-1 w-full ${isSuitable ? "bg-primary" : "bg-destructive"}`}
        aria-hidden="true"
      />

      <div className="p-4">
        {/* Header row */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex-shrink-0">
            {isSuitable ? (
              <CheckCircle2
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
            ) : (
              <XCircle
                className="h-5 w-5 text-destructive"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span
                className={`font-display text-base font-bold ${isSuitable ? "text-primary" : "text-destructive"}`}
              >
                {isSuitable ? t("history.suitable") : t("history.notSuitable")}
              </span>
              <span className="flex-shrink-0 font-body text-xs text-muted-foreground">
                {formatDate(record.timestamp)}
              </span>
            </div>

            {/* Input chips */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              <InputChip
                label={t("result.temp")}
                value={`${record.input.temperature}°C`}
              />
              <InputChip
                label={t("result.humidity")}
                value={`${record.input.humidity}%`}
              />
              <InputChip
                label={t("result.rainfall")}
                value={`${record.input.rainfall}mm`}
              />
              <InputChip
                label={t("result.soil")}
                value={record.input.soilType}
              />
            </div>
          </div>

          {/* Delete button */}
          <button
            type="button"
            data-ocid={`history.delete_button.${index}`}
            onClick={() => onDelete(record.id)}
            disabled={deletingId === record.id}
            aria-label={t("history.delete")}
            className="flex-shrink-0 rounded-md p-1.5 text-muted-foreground transition-smooth hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          >
            {deletingId === record.id ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Expand recommendations */}
        {(record.plantingTime ||
          record.fertilizerSuggestion ||
          record.generalGuidance) && (
          <>
            <button
              type="button"
              data-ocid={`history.expand_button.${index}`}
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 flex w-full items-center justify-center gap-1 rounded-md border border-border py-1.5 font-body text-xs text-muted-foreground transition-smooth hover:bg-muted/40"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("history.hideDetails")}
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("history.viewDetails")}
                </>
              )}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                  data-ocid={`history.details.${index}`}
                >
                  <div className="mt-3 space-y-2 rounded-md bg-muted/40 p-3">
                    {record.plantingTime && (
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground">
                          {t("result.plantingTime")}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {record.plantingTime}
                        </p>
                      </div>
                    )}
                    {record.fertilizerSuggestion && (
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground">
                          {t("result.fertilizer")}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {record.fertilizerSuggestion}
                        </p>
                      </div>
                    )}
                    {record.generalGuidance && (
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground">
                          {t("result.guidance")}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {record.generalGuidance}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.li>
  );
}

export default function HistoryPage() {
  const { t } = useTranslation();
  const { actor, isFetching: actorLoading } = useActor(createActor);
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<bigint | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<bigint | null>(null);

  const {
    data: predictions,
    isLoading,
    isError,
  } = useQuery<PredictionRecord[]>({
    queryKey: ["predictions"],
    queryFn: async () => {
      if (!actor) return [];
      const records = await actor.getPredictions();
      return records as PredictionRecord[];
    },
    enabled: !!actor && !actorLoading,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deletePrediction(id);
    },
    onSuccess: (_data, id) => {
      queryClient.setQueryData<PredictionRecord[]>(
        ["predictions"],
        (old) => old?.filter((p) => p.id !== id) ?? [],
      );
      toast.success(t("history.deleteSuccess"));
      setDeletingId(null);
      setConfirmDeleteId(null);
    },
    onError: () => {
      toast.error(t("history.deleteError"));
      setDeletingId(null);
      setConfirmDeleteId(null);
    },
  });

  const handleDeleteRequest = (id: bigint) => {
    setConfirmDeleteId(id);
  };

  const handleDeleteConfirm = () => {
    if (!confirmDeleteId) return;
    setDeletingId(confirmDeleteId);
    deleteMutation.mutate(confirmDeleteId);
  };

  const sortedPredictions = predictions
    ? [...predictions].sort((a, b) => Number(b.timestamp) - Number(a.timestamp))
    : [];

  return (
    <Layout showHeader headerTitle={t("history.title")}>
      <div className="pb-6">
        <p className="mb-5 font-body text-base text-muted-foreground">
          {t("history.subtitle")}
        </p>

        {/* Loading state */}
        {(isLoading || actorLoading) && (
          <div
            data-ocid="history.loading_state"
            className="flex flex-col items-center gap-4 py-20"
          >
            <Loader2
              className="h-9 w-9 animate-spin text-primary"
              aria-hidden="true"
            />
            <p className="font-body text-base text-muted-foreground">
              {t("history.loading")}
            </p>
            {/* Skeleton cards */}
            <div className="w-full space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="card-elevated h-24 animate-pulse bg-muted/40"
                />
              ))}
            </div>
          </div>
        )}

        {/* Error state */}
        {isError && !isLoading && (
          <div
            data-ocid="history.error_state"
            className="flex flex-col items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-6 py-10 text-center"
          >
            <AlertTriangle
              className="h-8 w-8 text-destructive"
              aria-hidden="true"
            />
            <p className="font-display text-base font-bold text-foreground">
              {t("common.error")}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {t("common.retry")}
            </p>
          </div>
        )}

        {/* Empty state */}
        {!isLoading &&
          !actorLoading &&
          !isError &&
          sortedPredictions.length === 0 && (
            <motion.div
              data-ocid="history.empty_state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-muted/40 px-6 py-16 text-center"
            >
              <span className="text-5xl" role="img" aria-label="chart">
                📊
              </span>
              <div>
                <p className="font-display text-lg font-bold text-foreground">
                  {t("history.empty")}
                </p>
                <p className="mt-1 font-body text-base text-muted-foreground">
                  {t("history.emptyDesc")}
                </p>
              </div>
              <Link
                to="/predict"
                data-ocid="history.start_first_button"
                className="button-primary flex items-center gap-2 px-6 py-3 text-base"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                {t("history.startFirst")}
              </Link>
            </motion.div>
          )}

        {/* Predictions list */}
        {!isLoading &&
          !actorLoading &&
          !isError &&
          sortedPredictions.length > 0 && (
            <ul
              className="flex flex-col gap-3"
              data-ocid="history.list"
              aria-label={t("history.title")}
            >
              <AnimatePresence>
                {sortedPredictions.map((record, idx) => (
                  <HistoryCard
                    key={record.id.toString()}
                    record={record}
                    index={idx + 1}
                    deletingId={deletingId}
                    onDelete={handleDeleteRequest}
                  />
                ))}
              </AnimatePresence>
            </ul>
          )}
      </div>

      {/* Delete confirmation dialog */}
      <AnimatePresence>
        {confirmDeleteId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 sm:items-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setConfirmDeleteId(null);
            }}
          >
            <motion.dialog
              data-ocid="history.dialog"
              aria-labelledby="delete-dialog-title"
              open
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="w-full max-w-sm rounded-xl bg-card p-6 shadow-xl backdrop:bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <Trash2
                    className="h-5 w-5 text-destructive"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="delete-dialog-title"
                  className="font-display text-base font-bold text-foreground"
                >
                  {t("history.deleteConfirm")}
                </h2>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  data-ocid="history.cancel_button"
                  onClick={() => setConfirmDeleteId(null)}
                  className="flex-1 rounded-lg border border-border py-3 font-body text-base text-foreground transition-smooth hover:bg-muted/40"
                >
                  {t("history.cancel")}
                </button>
                <button
                  type="button"
                  data-ocid="history.confirm_button"
                  onClick={handleDeleteConfirm}
                  disabled={deletingId === confirmDeleteId}
                  className="flex-1 rounded-lg bg-destructive py-3 font-body text-base font-medium text-destructive-foreground transition-smooth hover:bg-destructive/90 disabled:opacity-50"
                >
                  {deletingId === confirmDeleteId ? (
                    <Loader2
                      className="mx-auto h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    t("history.delete")
                  )}
                </button>
              </div>
            </motion.dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
