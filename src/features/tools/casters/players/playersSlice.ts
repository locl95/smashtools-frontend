import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { Player, PlayersState } from './types'

const initialState: PlayersState = {
    players: []
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setPlayers: (state, action: PayloadAction<Player[]>) => {
            state.players = action.payload
        },
        setPlayer: (state, action: PayloadAction<[Player, Boolean]>) => {
            if(action.payload[1]) state.player1 = action.payload[0];
           else state.player2 = action.payload[0];
        },
    },

});

export const {  setPlayer, setPlayers } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.players
export const selectPlayer1 = (state: RootState) => state.players.player1;
export const selectPlayer2 = (state: RootState) => state.players.player2;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default playersSlice.reducer;
