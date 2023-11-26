import { ActionReducerMap } from "@ngrx/store";
import { authFeatureName, reducer as authReducer, State as AuthState } from "./auth/auth.reducer";



export interface AppState {
    [authFeatureName]: AuthState;
};

export const appReducer: ActionReducerMap<any> = {

    [authFeatureName] : authReducer,
};

