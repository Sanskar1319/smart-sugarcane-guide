import type { Principal } from "@icp-sdk/core/principal";

export interface PredictionInput {
  temperature: number;
  humidity: number;
  rainfall: number;
  soilType: string;
}

export interface PredictionRecord {
  id: bigint;
  timestamp: bigint;
  result: string;
  plantingTime: string;
  fertilizerSuggestion: string;
  generalGuidance: string;
  owner: Principal;
  input: PredictionInput;
}

export type SoilType = "Loam" | "Clay" | "Sandy" | "Black Soil";

export type PredictionResult = "Suitable" | "Not Suitable";

export interface FormStep1Data {
  temperature: number;
  humidity: number;
}

export interface FormStep2Data {
  rainfall: number;
  soilType: SoilType;
}

export type PredictionFormData = FormStep1Data & FormStep2Data;
