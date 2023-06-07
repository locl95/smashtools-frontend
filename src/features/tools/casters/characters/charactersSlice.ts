import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { Character, CharactersState, RANDOM_CHARACTER, SetCharacterAction } from './types'

const initialState: CharactersState = {
    characterForPlayer1: RANDOM_CHARACTER,
    characterForPlayer2: RANDOM_CHARACTER,
    characters: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload;
        },
        setCharacterForPlayer: (state, action: PayloadAction<SetCharacterAction>) => {
            if(action.payload.isPlayer1) state.characterForPlayer1 = action.payload.character;
            else state.characterForPlayer2 = action.payload.character;
        },

    },

});

export const { setCharacters, setCharacterForPlayer  } = charactersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCharacters = (state: RootState) => state.characters.characters;
export const selectCharacterForPlayer1 = (state: RootState) => state.characters.characterForPlayer1;
export const selectCharacterForPlayer2 = (state: RootState) => state.characters.characterForPlayer2;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default charactersSlice.reducer;
