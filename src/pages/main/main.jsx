// ====================================================
// IMPORTS
import styles from './main.module.scss'
import React from 'react'
import { useDispatch } from 'react-redux'

// ====================================================
// Component
const Main = props => {
	// ====================================================
	// Variables

	const dispatch = useDispatch()

	// ====================================================
	// JSX

	return <div className={styles.body}>main</div>
}

// ====================================================
// Exports

export default React.memo(Main)
