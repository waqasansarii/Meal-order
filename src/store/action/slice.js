import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./initialState";

export const getAllMeals = createAsyncThunk("mealItem", async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes;
});

const mealSLice = createSlice({
  initialState: InitialState,
  name: "store",
  reducers: {
    addMeal: (state, action) => {
      const { week, mealId } = action.payload;
      const selectedMeal = state.allMeals.filter((meal) => meal.id === mealId);
      const isMeal = state[week].filter((meal) => meal.id === mealId);
      if (isMeal.length > 0) {
        alert("Already selected");
      } else {
        state[week] = [...state[week], selectedMeal[0]];
        state.selectedMeal = null;
      }
    },
    selectAMeal: (state, action) => {
      state.selectedMeal = action.payload;
    },
    deleteMeal : (state,action)=>{
        const { week , item} = action.payload
        state[week] = state[week].filter((meal) => meal.id !== item.id);
        state.selectedMeal = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMeals.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getAllMeals.fulfilled, (state, action) => {
        state.allMeals = action.payload;
        state.loading = false;
      });
    builder.addCase(getAllMeals.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { addMeal, selectAMeal,deleteMeal } = mealSLice.actions;

export default mealSLice.reducer;
