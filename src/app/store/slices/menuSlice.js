import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		isOpen: false,
		isLoading: true,
	},
	reducers: {
		toggleMenu: (state) => {
			state.isOpen = !state.isOpen;
		},
		toggleLoading: (state) => {
			state.isLoading = false;
		},
	},
});

export const { toggleMenu, toggleLoading } = menuSlice.actions;

export default menuSlice.reducer;
