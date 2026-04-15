import { c as createLucideIcon } from "./proxy-CBnkwJ4B.js";
import { R as React } from "./index-BJHXwJTK.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
const defaultProfile = {
  name: "",
  email: "",
  phone: "",
  preferredLanguage: "en"
};
function loadProfile() {
  if (typeof window === "undefined") return defaultProfile;
  try {
    const stored = localStorage.getItem("cane-predict-profile");
    return stored ? JSON.parse(stored) : defaultProfile;
  } catch {
    return defaultProfile;
  }
}
const usePredictionStore = create((set) => ({
  currentInput: {},
  currentResult: null,
  language: typeof window !== "undefined" ? localStorage.getItem("cane-predict-lang") ?? "en" : "en",
  profile: loadProfile(),
  setCurrentInput: (input) => set((state) => ({ currentInput: { ...state.currentInput, ...input } })),
  setCurrentResult: (result) => set({ currentResult: result }),
  setLanguage: (lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cane-predict-lang", lang);
    }
    set({ language: lang });
  },
  setProfile: (profileUpdate) => set((state) => {
    const updated = { ...state.profile, ...profileUpdate };
    if (typeof window !== "undefined") {
      localStorage.setItem("cane-predict-profile", JSON.stringify(updated));
    }
    return { profile: updated };
  }),
  resetPrediction: () => set({ currentInput: {}, currentResult: null })
}));
export {
  User as U,
  usePredictionStore as u
};
