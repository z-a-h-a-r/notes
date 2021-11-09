// ====================================================
// IMPORTS
import styles from './main.module.scss'
import React from 'react'
import Form from './form/form'
import { useSelector } from 'react-redux'
import Task from './task/task'

// ====================================================
// Component

const Main = props => {
	// ====================================================
	// Variables
	let tasks = useSelector(state => state.app.tasks)
	// ====================================================
	// Logic

	tasks = tasks.sort((prev, next) => prev.id - next.id)
	// ====================================================
	// JSX

	return (
		<div className={styles.body}>
			<div className={styles.list}>
				<h1>Simple notes</h1>
				<div className={styles.list}>
					{tasks.length !== 0 &&
						tasks.map(i => (
							<div className={styles.task}>
								<Task content={i.content} id={i.id} isDone={i.isDone} />
							</div>
						))}
				</div>
				<Form />
			</div>

			<div className={styles.tags}>
				<h1>Tags</h1>
				<div className={styles.tagsList}>
					{tasks.length !== 0 ? (
						tasks.map(i => (
							<>
								{i.tags.map(j => (
									<a href={`#${j}`} className={styles.tag}>
										{j + ' '}
									</a>
								))}
							</>
						))
					) : (
						<p>There are no tags here</p>
					)}
				</div>
			</div>
		</div>
	)
}

// ====================================================
// Exports

// export default React.memo(Main)
export default Main
