import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { H2hState, Match } from './types'

const initialState: H2hState = {
    matches: []
};


export const h2hSlice = createSlice({
    name: 'h2h',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setMatches: (state, action: PayloadAction<Match[]>) => {
            state.matches = action.payload
        }
    }
});

export const { setMatches } = h2hSlice.actions;

export const selectMatches = (state: RootState) => state.h2h.matches

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default h2hSlice.reducer;
