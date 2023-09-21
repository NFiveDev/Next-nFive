import { createSlice } from '@reduxjs/toolkit';

interface CourseState {
  filterFormOpen: boolean;
}

const initialState: CourseState = {
  filterFormOpen: false,
};

export const CourseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    toggleFilter: state => {
      state.filterFormOpen = !state.filterFormOpen;
      console.log('TOGGLE CALLED')
      console.log(state.filterFormOpen)
    },
  },
});

export const { toggleFilter } = CourseSlice.actions;

export default CourseSlice.reducer;
