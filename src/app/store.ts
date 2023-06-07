import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import charactersReducer from '../features/tools/casters/characters/charactersSlice';
import playersReducer from '../features/tools/casters/players/playersSlice';
import h2hReducer from '../features/tools/casters/h2h/h2hSlice';
import castersReducer from '../features/tools/casters/castersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    players: playersReducer,
    h2h: h2hReducer,
    casters: castersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
