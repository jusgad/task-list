

export const todoReducer = (initialState, action) => {

	switch (action.type) {
		case 'Agregar':
			return [...initialState, action.payload]

		case 'Borrar':
			return initialState.filter(todo => todo.id !== action.payload)

		case 'Completar':
			return initialState.map(todo => {
				if (todo.id === action.payload){
					return {
						...todo,
						done: !todo.done
					};
				}

				return todo;
			});

		case 'Actualizar':
						return initialState.map(todo => {
				if (todo.id === action.payload.id){
					return {
						...todo,
						description: action.payload.description,
					};
				}

				return todo;
			});
	
		default:
			return initialState;
	}

};