// ====================================================
// IMPORTS
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../../reducers/appReducer'
import st from './form.module.scss'
import { addTaskToLocalStorage } from '../../../utils/localStorageHandler'

// ====================================================
// Component

const Form = props => {
	// ====================================================
	// State

	let tasks = useSelector(state => state.app.tasks)

	// ====================================================
	// Variables

	const dispatch = useDispatch()
	let lastItemId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id : 0

	// ====================================================
	// Local state

	let [form, setForm] = useState('')
	let [isSubmitting, setIsSubmitting] = useState(false)

	// ====================================================
	// Logic

	const submit = e => {
		e.preventDefault()

		let arr = form.split(' ')
		let tags = []
		arr.forEach(i => {
			if (i.substr(0, 1) === '#') {
				tags.push(i)
			}
		})
		lastItemId++
		if (form.length !== 0) {
			let newTask = {
				content: form,
				id: lastItemId,
				tags: tags,
			}

			dispatch(addTask(newTask))
			addTaskToLocalStorage(newTask)
		}

		setForm('')
		setIsSubmitting(false)
	}

	// ====================================================
	// JSX

	return (
		<form onSubmit={submit} className={st.form}>
			<input
				type="text"
				name="message"
				value={form}
				className={st.input}
				placeholder={'Type new note...'}
				autocomplete="off"
				onChange={e => {
					setForm((form = e.target.value))
				}}
			/>
			<button disabled={isSubmitting} type="submit" className={st.button}>
				+
			</button>
		</form>
	)
}

// ====================================================
// Exports

export default React.memo(Form)
