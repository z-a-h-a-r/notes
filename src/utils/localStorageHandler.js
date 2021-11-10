export const addTaskToLocalStorage = task => {
	let prevTasks = JSON.parse(localStorage.getItem('tasks'))

	if (!prevTasks) {
		prevTasks = []
	}
	localStorage.setItem('tasks', JSON.stringify([...prevTasks, task]))
}
