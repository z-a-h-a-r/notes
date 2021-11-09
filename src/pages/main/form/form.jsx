// ====================================================
// IMPORTS
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../reducers/appReducer'
import st from './form.module.scss'

// ====================================================
// Component

const Form = props => {
	// ====================================================
	// Variables

	const dispatch = useDispatch()

	// ====================================================
	// Local state

	let [form, setForm] = useState('')
	let [isSubmitting, setIsSubmitting] = useState(false)
	let id = useRef(0)

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

		if (form.length !== 0) {
			dispatch(
				addTask({
					content: form,
					id: id.current,
					isDone: false,
					tags: tags,
				})
			)
		}
		setForm('')
		id.current++
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
