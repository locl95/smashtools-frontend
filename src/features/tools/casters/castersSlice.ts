import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store'
import { CastersState } from './types'

const initialState: CastersState = {
    isH2hViewMode: true
};


export const castersSlice = createSlice({
    name: 'casters',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        switchViewMode: (state) => {
            state.isH2hViewMode = !state.isH2hViewMode
        }
    }
});

export const { switchViewMode } = castersSlice.actions;

export const isH2hViewMode = (state: RootState) => state.casters.isH2hViewMode

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default castersSlice.reducer;
