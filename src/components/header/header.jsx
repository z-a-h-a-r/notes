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

					<ul className={styles.menu}>
						<NavLink to={'/'} className="link">
							link
						</NavLink>
						<NavLink to={'/'} className="link">
							link
						</NavLink>
						<NavLink to={'/'} className="link">
							link
						</NavLink>
						<NavLink to={'/'} className="link">
							link
						</NavLink>
					</ul>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default React.memo(Header)
