// ====================================================
// IMPORTS

// ====================================================
// Types

const SET_INITIALIZED = 'SET_INITIALIZED'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const SET_TASKS = 'SET_TASKS'
const EDIT_TASK = 'EDIT_TASK'

// ====================================================
// Initial state

let initialState = {
	tasks: [],
}

// ====================================================
// Reducer

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			}

		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			}

		case DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter(i => i.id != action.id),
			}

		case SET_TASKS:
			return {
				...state,
				tasks: action.payload,
			}

		case EDIT_TASK:
			return {
				...state,
				tasks: [...state.tasks.filter(i => i.id != action.id), action.task],
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const initializeSuccess = payload => ({
	type: SET_INITIALIZED,
	payload,
})
export const addTask = payload => ({
	type: ADD_TASK,
	payload,
})
export const deleteTask = id => ({
	type: DELETE_TASK,
	id,
})
export const setTasks = payload => ({
	type: SET_TASKS,
	payload,
})
export const editTask = (id, task) => ({
	type: EDIT_TASK,
	id,
	task,
})

// ====================================================
// Thunks

export const initializeApp = () => {
	return async dispatch => {
		new Promise((resolve, reject) => {
			let tasks = JSON.parse(localStorage.getItem('tasks'))
			if (tasks) {
				resolve(dispatch(setTasks(tasks)))
			} else {
				resolve()
			}
		}).then(() => {
			return new Promise((resolve, reject) => {
				resolve(dispatch(initializeSuccess()))
			})
		})
	}
}

// ====================================================
// Exports

export default appReducer
