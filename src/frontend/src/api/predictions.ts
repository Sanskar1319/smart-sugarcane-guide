import { useActor } from "@caffeineai/core-infrastructure";
import { createActor } from "../backend";
import type { PredictionInput, PredictionRecord } from "../types/prediction";

export function useBackendActor() {
  return useActor(createActor);
}

export async function apiSavePrediction(
  actor: {
    savePrediction: (input: PredictionInput) => Promise<PredictionRecord>;
  },
  input: PredictionInput,
): Promise<PredictionRecord> {
  return actor.savePrediction(input);
}

export async function apiGetPredictions(actor: {
  getPredictions: () => Promise<PredictionRecord[]>;
}): Promise<PredictionRecord[]> {
  return actor.getPredictions();
}

export async function apiDeletePrediction(
  actor: { deletePrediction: (id: bigint) => Promise<boolean> },
  id: bigint,
): Promise<boolean> {
  return actor.deletePrediction(id);
}
