import { createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const selectDirectortSections = createSelector(
	[selectDirectory],
	directory => directory.sections
)