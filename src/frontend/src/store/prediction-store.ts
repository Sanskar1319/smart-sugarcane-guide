import { create } from "zustand";
import type { PredictionInput, PredictionRecord } from "../types/prediction";

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  preferredLanguage: "en" | "mr";
}

interface PredictionState {
  currentInput: Partial<PredictionInput>;
  currentResult: PredictionRecord | null;
  language: string;
  profile: UserProfile;
  setCurrentInput: (input: Partial<PredictionInput>) => void;
  setCurrentResult: (result: PredictionRecord | null) => void;
  setLanguage: (lang: string) => void;
  setProfile: (profile: Partial<UserProfile>) => void;
  resetPrediction: () => void;
}

const defaultProfile: UserProfile = {
  name: "",
  email: "",
  phone: "",
  preferredLanguage: "en",
};

function loadProfile(): UserProfile {
  if (typeof window === "undefined") return defaultProfile;
  try {
    const stored = localStorage.getItem("cane-predict-profile");
    return stored ? (JSON.parse(stored) as UserProfile) : defaultProfile;
  } catch {
    return defaultProfile;
  }
}

export const usePredictionStore = create<PredictionState>((set) => ({
  currentInput: {},
  currentResult: null,
  language:
    typeof window !== "undefined"
      ? (localStorage.getItem("cane-predict-lang") ?? "en")
      : "en",
  profile: loadProfile(),

  setCurrentInput: (input) =>
    set((state) => ({ currentInput: { ...state.currentInput, ...input } })),

  setCurrentResult: (result) => set({ currentResult: result }),

  setLanguage: (lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cane-predict-lang", lang);
    }
    set({ language: lang });
  },

  setProfile: (profileUpdate) =>
    set((state) => {
      const updated = { ...state.profile, ...profileUpdate };
      if (typeof window !== "undefined") {
        localStorage.setItem("cane-predict-profile", JSON.stringify(updated));
      }
      return { profile: updated };
    }),

  resetPrediction: () => set({ currentInput: {}, currentResult: null }),
}));
