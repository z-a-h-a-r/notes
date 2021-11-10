// ====================================================
// IMPORTS
import styles from './main.module.scss'
import React, { useState } from 'react'
import Form from './form/form'
import { useSelector } from 'react-redux'
import Task from './task/task'
import { Link } from 'react-scroll'

// ====================================================
// Component

const Main = props => {
	// ====================================================
	// Variables

	// ====================================================
	// State

	let tasks = useSelector(state => state.app.tasks)

	// ====================================================
	// Local state

	let [isActiveTask, setIsActiveTask] = useState()
	let [form, setForm] = useState()
	let [tagsSearch, setTagsSearch] = useState([])
	let tags = []

	// ====================================================
	// Logic

	tasks = tasks.sort((prev, next) => prev.id - next.id)

	tasks.map(i => {
		i.tags.map(j => tags.push({ id: i, content: j }))
	})

	// ====================================================
	// JSX

	return (
		<div
			className={styles.body}
			onClick={() => {
				setIsActiveTask(-1)
			}}
		>
			<div className={styles.list}>
				<h1>Simple notes</h1>
				<div className={styles.list}>
					{tasks.length !== 0 &&
						tasks.map(i => (
							<div
								className={
									isActiveTask === i.id ? styles.activeTask : styles.task
								}
								id={`${i.id}`}
							>
								<Task content={i.content} id={i.id} tags={i.tags} />
							</div>
						))}
				</div>
				<Form />
			</div>

			<div className={styles.tags}>
				<h1>Tags</h1>
				<div className={styles.tagsList}>
					{tagsSearch?.length !== 0 ? (
						tagsSearch?.map(i => (
							<Link
								to={i.id}
								onClick={() => {
									setIsActiveTask(i.id)
								}}
								className={styles.tag}
							>
								{i.content + ' '}
							</Link>
						))
					) : tasks.length !== 0 ? (
						tasks.map(i => (
							<>
								{i.tags.map(j => (
									<Link
										to={i.id}
										onClick={() => {
											setIsActiveTask(i.id)
										}}
										className={styles.tag}
									>
										{j + ' '}
									</Link>
								))}
							</>
						))
					) : (
						<p>There are no tags here</p>
					)}
				</div>
				<form
					onSubmit={e => {
						e.preventDefault()
					}}
					className={styles.form}
				>
					<input
						type="text"
						value={form}
						className={styles.input}
						placeholder={'Search tag...'}
						autocomplete="off"
						className={styles.input}
						onChange={e => {
							setForm((form = e.target.value))
							let arr = []
							tags.map(i => {
								console.log(i.content.includes(form))
								if (i.content.includes(form)) {
									arr.push(i)
								}
							})

							if (form.length !== 0) {
								setTagsSearch(arr)
							} else {
								setTagsSearch([])
							}
						}}
					/>
				</form>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Main)
