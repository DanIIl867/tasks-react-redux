// export const getTasks = state => state.tasks.items;
// export const isLoading = state => state.tasks.isLoading;
// export const isError = state => state.tasks.error;
// export const getFilters = state => state.filters.status;

export const isLoading = state => state.tasks.isLoading
export const IsError = state => state.tasks.error
export const getTasks = state => state.tasks.items
export const getFilters = state => state.filter