// ====================================================
// IMPORTS
import styles from './header.module.scss'
import Logo from '../logo/logo'
import React from 'react'
import { NavLink } from 'react-router-dom'

// ====================================================
// Component

const Header = () => {
	// JSX
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<Logo />

					<a
						href="https://github.com/z-a-h-a-r"
						className="link"
						target="_blank"
					>
						My GitHub
					</a>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default React.memo(Header)
