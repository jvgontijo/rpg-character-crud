import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/characters';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addCharacter = createAsyncThunk('characters/addCharacter', async (character) => {
  const response = await axios.post(API_URL, character);
  return response.data;
});

export const updateCharacter = createAsyncThunk('characters/updateCharacter', async (character) => {
  const response = await axios.put(`${API_URL}/${character.id}`, character);
  return response.data; 
});

export const deleteCharacter = createAsyncThunk('characters/deleteCharacter', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCharacter.fulfilled, (state, action) => {
        state.list = state.list.filter((character) => character.id !== action.payload);
      })
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCharacter.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateCharacter.fulfilled, (state, action) => {
        const index = state.list.findIndex((char) => char.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  }
});

export default characterSlice.reducer;
