export const getTodos = (state) => {
	return state.items;
};

export const getTodosCount = (state) => {
	return state.items.length;
};

export const getTodosDoneCount = (state) => {
	return state.items.filter((todo) => todo.completed).length;
};

export const getTodosNotDoneCount = (state) => {
	return state.items.filter((todo) => !todo.completed).length;
};
