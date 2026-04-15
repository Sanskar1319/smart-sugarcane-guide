import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PredictionInput {
    soilType: string;
    temperature: number;
    humidity: number;
    rainfall: number;
}
export interface PredictionRecord {
    id: bigint;
    result: string;
    plantingTime: string;
    owner: Principal;
    generalGuidance: string;
    timestamp: bigint;
    fertilizerSuggestion: string;
    input: PredictionInput;
}
export interface backendInterface {
    deletePrediction(id: bigint): Promise<boolean>;
    getPredictions(): Promise<Array<PredictionRecord>>;
    savePrediction(input: PredictionInput): Promise<PredictionRecord>;
}
