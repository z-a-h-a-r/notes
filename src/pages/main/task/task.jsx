// ====================================================
// IMPORTS
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../../../reducers/appReducer'
import styles from './task.module.scss'

// ====================================================
// Component

const Task = props => {
	// ====================================================
	// Variables

	const dispatch = useDispatch()

	// ====================================================
	// Local state

	let [isEditMode, setIsEditMode] = useState(false)
	let [form, setForm] = useState('')

	// ====================================================
	// Side Effects

	useEffect(() => {
		setForm((form = props.content))
	}, [])

	// ====================================================
	// Logic

	const _editTask = (id, content, tags) => {
		let prevTasks = JSON.parse(localStorage.getItem('tasks'))
		let newTasks = []
		let newTask = {
			id,
			content,
			tags,
		}

		dispatch(editTask(id, newTask))

		prevTasks.map(i => {
			if (i.id !== newTask.id) {
				newTasks.push(i)
			}
		})

		localStorage.setItem('tasks', JSON.stringify([...newTasks, newTask]))
	}

	const isTag = content => {
		if (content.substr(0, 1) === '#') {
			return <span className={styles.tag}>{content}</span>
		} else {
			return content
		}
	}

	// ====================================================
	// JSX

	return (
		<div className={styles.body}>
			<div
				className={styles.circle}
				onClick={() => {
					dispatch(deleteTask(props.id))

					let prevTasks = JSON.parse(localStorage.getItem('tasks'))
					let newTasks = []

					prevTasks.map(i => {
						if (i.id !== props.id) {
							newTasks.push(i)
						}
					})

					localStorage.setItem('tasks', JSON.stringify([...newTasks]))
				}}
			></div>
			{!isEditMode ? (
				<p
					onDoubleClick={() => {
						setIsEditMode(true)
					}}
					className={styles.content}
				>
					{props.content.split(' ').map(i => {
						return isTag(i + ' ')
					})}
				</p>
			) : (
				<input
					type="text"
					onBlur={() => {
						setIsEditMode(false)

						_editTask(props.id, form, props.tags)
					}}
					className={styles.input}
					value={form}
					// onKeyDown={e => {
					// 	console.log(e)
					// 	if (e.keyCode === 123) {
					// 		_editTask(props.id, form, false)
					// 		setIsEditMode(false)
					// 	}
					// }}
					onChange={e => {
						setForm(e.target.value)
					}}
				/>
			)}
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Task)
