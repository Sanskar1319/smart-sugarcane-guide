import { useNavigate } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle2,
  History,
  Lightbulb,
  RotateCcw,
  Sprout,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/Layout";
import { usePredictionStore } from "../store/prediction-store";

function getStatus(value: number, type: "temp" | "humidity" | "rainfall") {
  const ranges = {
    temp: { min: 20, max: 35 },
    humidity: { min: 50, max: 80 },
    rainfall: { min: 1100, max: 1800 },
  };
  const { min, max } = ranges[type];
  if (value < min) return "tooLow";
  if (value > max) return "tooHigh";
  return "optimal";
}

function StatusBadge({
  status,
}: {
  status: "optimal" | "tooHigh" | "tooLow";
}) {
  const { t } = useTranslation();
  const classes: Record<string, string> = {
    optimal: "text-primary font-semibold",
    tooHigh: "text-destructive font-semibold",
    tooLow: "text-secondary font-semibold",
  };
  const keys: Record<string, string> = {
    optimal: "result.optimal",
    tooHigh: "result.tooHigh",
    tooLow: "result.tooLow",
  };
  return (
    <span className={`font-body text-xs ${classes[status]}`}>
      {t(keys[status])}
    </span>
  );
}

export default function ResultPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentResult, resetPrediction } = usePredictionStore();

  useEffect(() => {
    if (!currentResult) {
      navigate({ to: "/predict" });
    }
  }, [currentResult, navigate]);

  if (!currentResult) return null;

  const isSuitable = currentResult.result === "Suitable";
  const tempStatus = getStatus(currentResult.input.temperature, "temp");
  const humidityStatus = getStatus(currentResult.input.humidity, "humidity");
  const rainfallStatus = getStatus(currentResult.input.rainfall, "rainfall");

  const handleNewPrediction = () => {
    resetPrediction();
    navigate({ to: "/predict" });
  };

  const handleViewHistory = () => {
    navigate({ to: "/history" });
  };

  const recommendations = [
    {
      titleKey: "result.plantingTime",
      content: currentResult.plantingTime,
      Icon: Calendar,
      ocid: "result.planting_card",
    },
    {
      titleKey: "result.fertilizer",
      content: currentResult.fertilizerSuggestion,
      Icon: Sprout,
      ocid: "result.fertilizer_card",
    },
    {
      titleKey: "result.guidance",
      content: currentResult.generalGuidance,
      Icon: Lightbulb,
      ocid: "result.guidance_card",
    },
  ];

  return (
    <Layout showHeader headerTitle={t("result.title")}>
      <div className="flex flex-col gap-4 pb-6">
        {/* Result banner */}
        <motion.div
          data-ocid="result.banner"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`flex flex-col items-center gap-3 rounded-xl px-6 py-8 shadow-card ${
            isSuitable ? "bg-primary" : "bg-destructive"
          }`}
        >
          {isSuitable ? (
            <CheckCircle2
              className="h-14 w-14 text-primary-foreground"
              aria-hidden="true"
            />
          ) : (
            <XCircle
              className="h-14 w-14 text-destructive-foreground"
              aria-hidden="true"
            />
          )}
          <h2
            className={`font-display text-2xl font-extrabold uppercase tracking-wide text-center leading-tight ${
              isSuitable
                ? "text-primary-foreground"
                : "text-destructive-foreground"
            }`}
          >
            {isSuitable ? t("result.suitable") : t("result.notSuitable")}
          </h2>
          <p
            className={`font-body text-sm text-center max-w-xs ${
              isSuitable
                ? "text-primary-foreground/80"
                : "text-destructive-foreground/80"
            }`}
          >
            {isSuitable
              ? t("result.suitableDesc")
              : t("result.notSuitableDesc")}
          </p>
        </motion.div>

        {/* Input summary grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="mb-2 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {t("result.inputSummary")}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                {
                  label: t("result.temp"),
                  value: `${currentResult.input.temperature}°C`,
                  status: tempStatus,
                  key: "temp",
                },
                {
                  label: t("result.humidity"),
                  value: `${currentResult.input.humidity}%`,
                  status: humidityStatus,
                  key: "humidity",
                },
                {
                  label: t("result.rainfall"),
                  value: `${currentResult.input.rainfall}mm`,
                  status: rainfallStatus,
                  key: "rainfall",
                },
                {
                  label: t("result.soil"),
                  value: currentResult.input.soilType,
                  status: "optimal" as const,
                  key: "soil",
                },
              ] as const
            ).map(({ label, value, status, key }) => (
              <div
                key={key}
                data-ocid={`result.summary_${key}`}
                className={`card-elevated p-3 border-l-4 ${
                  isSuitable ? "border-l-primary/60" : "border-l-destructive/60"
                }`}
              >
                <p className="font-body text-xs text-muted-foreground">
                  {label}:{" "}
                  <span className="font-semibold text-foreground">{value}</span>
                </p>
                <StatusBadge
                  status={status as "optimal" | "tooHigh" | "tooLow"}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendation cards */}
        <div>
          <h3 className="mb-2 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {t("result.viewRecommendations")}
          </h3>
          {recommendations.map(({ titleKey, content, Icon, ocid }, idx) => (
            <motion.div
              key={titleKey}
              data-ocid={ocid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`card-elevated mb-3 p-4 border-l-4 ${
                isSuitable ? "border-l-primary" : "border-l-destructive"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                    isSuitable
                      ? "bg-primary/10 text-primary"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                    {t(titleKey)}
                  </h4>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">
                    {content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col gap-3 pt-1"
        >
          <button
            type="button"
            data-ocid="result.new_prediction_button"
            onClick={handleNewPrediction}
            className="button-primary flex w-full items-center justify-center gap-2 py-4 font-display text-base uppercase tracking-wide"
          >
            <RotateCcw className="h-5 w-5" aria-hidden="true" />
            {t("result.restartPrediction")}
          </button>

          <button
            type="button"
            data-ocid="result.view_history_button"
            onClick={handleViewHistory}
            className="button-secondary flex w-full items-center justify-center gap-2 py-4 font-display text-base uppercase tracking-wide"
          >
            <History className="h-5 w-5" aria-hidden="true" />
            {t("nav.history")}
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
