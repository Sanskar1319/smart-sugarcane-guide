import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { apiSavePrediction } from "../api/predictions";
import { createActor } from "../backend";
import { Layout } from "../components/Layout";
import { usePredictionStore } from "../store/prediction-store";
import type { PredictionFormData, SoilType } from "../types/prediction";

const SOIL_TYPES: SoilType[] = ["Loam", "Clay", "Sandy", "Black Soil"];
const SOIL_KEYS: Record<SoilType, string> = {
  Loam: "predict.soilLoam",
  Clay: "predict.soilClay",
  Sandy: "predict.soilSandy",
  "Black Soil": "predict.soilBlack",
};

export default function PredictPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setCurrentInput, setCurrentResult } = usePredictionStore();
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<PredictionFormData>({
    defaultValues: {
      temperature: 28,
      humidity: 70,
      rainfall: 1200,
      soilType: "Loam",
    },
  });

  const temp = watch("temperature");
  const humidity = watch("humidity");

  const mutation = useMutation({
    mutationFn: async (data: PredictionFormData) => {
      if (!actor) throw new Error("Actor not ready");
      return apiSavePrediction(actor, {
        temperature: Number(data.temperature),
        humidity: Number(data.humidity),
        rainfall: Number(data.rainfall),
        soilType: data.soilType,
      });
    },
    onSuccess: (result) => {
      setCurrentResult(result);
      queryClient.invalidateQueries({ queryKey: ["predictions"] });
      navigate({ to: "/result" });
    },
    onError: () => {
      toast.error(t("result.saveError"));
    },
  });

  const onNext = async () => {
    const valid = await trigger(["temperature", "humidity"]);
    if (valid) setStep(2);
  };

  const onSubmit = (data: PredictionFormData) => {
    setCurrentInput(data);
    mutation.mutate(data);
  };

  return (
    <Layout
      showHeader
      headerTitle=""
      headerLeft={
        <button
          type="button"
          data-ocid="predict.back_button"
          onClick={() => (step === 2 ? setStep(1) : navigate({ to: "/home" }))}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
          aria-label={t("common.back")}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="font-body text-sm font-medium">
            {t("common.back")}
          </span>
        </button>
      }
    >
      <div className="pb-6">
        {/* Page heading — bilingual */}
        <div className="mb-5">
          <h1 className="font-display text-xl font-extrabold text-foreground leading-tight">
            {t("predict.title")}
          </h1>
          <p className="mt-0.5 font-body text-sm text-muted-foreground">
            {t("predict.subtitle")}
          </p>
        </div>

        {/* Step indicator */}
        <div className="mb-6 flex gap-3" aria-label={`Step ${step} of 2`}>
          {[1, 2].map((s) => (
            <div key={s} className="flex flex-1 flex-col gap-1">
              <div
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
              <span
                className={`font-body text-xs ${
                  s === step
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {s === 1 ? t("predict.step1") : t("predict.step2")}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-5"
              >
                {/* Temperature slider */}
                <div className="card-elevated p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="temperature"
                      className="font-display text-sm font-bold uppercase tracking-wider text-foreground"
                    >
                      {t("predict.temperature")}
                    </label>
                    <span className="rounded-md bg-foreground px-2.5 py-1 font-body text-sm font-bold text-card">
                      {temp}
                      {t("predict.temperatureUnit")}
                    </span>
                  </div>
                  <input
                    id="temperature"
                    type="range"
                    min={15}
                    max={40}
                    step={0.5}
                    data-ocid="predict.temperature_input"
                    className="w-full accent-primary h-2 cursor-pointer"
                    {...register("temperature", {
                      required: t("predict.required"),
                      min: { value: 15, message: t("predict.tempRange") },
                      max: { value: 40, message: t("predict.tempRange") },
                    })}
                  />
                  <div className="mt-1 flex justify-between">
                    <span className="font-body text-xs text-muted-foreground">
                      15°C
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      40°C
                    </span>
                  </div>
                  {errors.temperature && (
                    <p
                      data-ocid="predict.temperature_field_error"
                      className="mt-1 font-body text-xs text-destructive"
                    >
                      {errors.temperature.message}
                    </p>
                  )}
                </div>

                {/* Humidity slider */}
                <div className="card-elevated p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="humidity"
                      className="font-display text-sm font-bold uppercase tracking-wider text-foreground"
                    >
                      {t("predict.humidity")}
                    </label>
                    <span className="rounded-md bg-foreground px-2.5 py-1 font-body text-sm font-bold text-card">
                      {humidity}
                      {t("predict.humidityUnit")}
                    </span>
                  </div>
                  <input
                    id="humidity"
                    type="range"
                    min={30}
                    max={90}
                    step={1}
                    data-ocid="predict.humidity_input"
                    className="w-full accent-primary h-2 cursor-pointer"
                    {...register("humidity", {
                      required: t("predict.required"),
                      min: { value: 30, message: t("predict.humidityRange") },
                      max: { value: 90, message: t("predict.humidityRange") },
                    })}
                  />
                  <div className="mt-1 flex justify-between">
                    <span className="font-body text-xs text-muted-foreground">
                      30%
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      90%
                    </span>
                  </div>
                  {errors.humidity && (
                    <p
                      data-ocid="predict.humidity_field_error"
                      className="mt-1 font-body text-xs text-destructive"
                    >
                      {errors.humidity.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  data-ocid="predict.next_button"
                  onClick={onNext}
                  className="button-primary w-full py-4 font-display text-base uppercase tracking-wide"
                >
                  {t("predict.next")}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-5"
              >
                {/* Rainfall numeric input */}
                <div className="card-elevated p-4">
                  <label
                    htmlFor="rainfall"
                    className="mb-2 block font-display text-sm font-bold uppercase tracking-wider text-foreground"
                  >
                    {t("predict.rainfall")}
                  </label>
                  <p className="mb-2 font-body text-xs text-muted-foreground">
                    {t("predict.rainfallHint")}
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      id="rainfall"
                      type="number"
                      inputMode="numeric"
                      data-ocid="predict.rainfall_input"
                      className="flex-1 rounded-md border border-input bg-card px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="1200"
                      {...register("rainfall", {
                        required: t("predict.required"),
                        min: { value: 0, message: t("predict.rainfallRange") },
                        max: {
                          value: 3000,
                          message: t("predict.rainfallRange"),
                        },
                        valueAsNumber: true,
                      })}
                    />
                    <span className="rounded-md bg-muted px-3 py-3 font-body text-sm font-semibold text-muted-foreground">
                      {t("predict.rainfallUnit")}
                    </span>
                  </div>
                  {errors.rainfall && (
                    <p
                      data-ocid="predict.rainfall_field_error"
                      className="mt-1 font-body text-xs text-destructive"
                    >
                      {errors.rainfall.message}
                    </p>
                  )}
                </div>

                {/* Soil type select */}
                <div className="card-elevated p-4">
                  <label
                    htmlFor="soilType"
                    className="mb-2 block font-display text-sm font-bold uppercase tracking-wider text-foreground"
                  >
                    {t("predict.soilType")}
                  </label>
                  <div className="relative">
                    <select
                      id="soilType"
                      data-ocid="predict.soil_type_select"
                      className="w-full appearance-none rounded-md border border-input bg-card px-4 py-3 font-body text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer pr-10"
                      {...register("soilType", {
                        required: t("predict.required"),
                      })}
                    >
                      {SOIL_TYPES.map((soil) => (
                        <option key={soil} value={soil}>
                          {t(SOIL_KEYS[soil])}
                        </option>
                      ))}
                    </select>
                    {/* Chevron icon for select */}
                    <span
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </div>
                  {errors.soilType && (
                    <p
                      data-ocid="predict.soil_type_field_error"
                      className="mt-1 font-body text-xs text-destructive"
                    >
                      {errors.soilType.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  data-ocid="predict.submit_button"
                  disabled={mutation.isPending}
                  className="button-primary flex w-full items-center justify-center gap-2 py-4 font-display text-base uppercase tracking-wide disabled:opacity-60"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2
                        className="h-5 w-5 animate-spin"
                        aria-hidden="true"
                      />
                      {t("predict.analyzing")}
                    </>
                  ) : (
                    t("predict.predictButton")
                  )}
                </button>

                {/* Loading state */}
                {mutation.isPending && (
                  <p
                    data-ocid="predict.loading_state"
                    className="flex items-center justify-center gap-2 rounded-md bg-muted px-4 py-3 font-body text-sm text-muted-foreground"
                    aria-live="polite"
                  >
                    <Loader2
                      className="h-4 w-4 animate-spin text-primary inline-block"
                      aria-hidden="true"
                    />
                    {t("predict.analyzing")}
                  </p>
                )}

                {/* Error state */}
                {mutation.isError && (
                  <div
                    data-ocid="predict.error_state"
                    className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3"
                    role="alert"
                  >
                    <p className="font-body text-sm text-destructive">
                      {t("result.saveError")}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </Layout>
  );
}
