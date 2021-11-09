// ====================================================
// IMPORTS
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './logo.module.scss'

// ====================================================
// Component

const Logo = props => {
	// JSX
	return (
		<NavLink to={'/'}>
			<div className={styles.body}>
				<span>Notes</span>
			</div>
		</NavLink>
	)
}

// ====================================================
// Exports

export default React.memo(Logo)
