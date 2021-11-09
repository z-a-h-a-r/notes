// ====================================================
// IMPORTS
import './styles/zeroing.scss'
import './styles/style.scss'
import './styles/commonStyles.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeApp } from './reducers/appReducer'
import Loading from './components/loading/loading'
import Main from './pages/main/main'
import Footer from './components/footer/footer'
import Header from './components/header/header'

// ====================================================
// Component

const App = props => {
	const dispatch = useDispatch()

	// ====================================================
	// state

	const initialized = useSelector(state => state.app.initialized)

	// ====================================================
	// Side effects

	useEffect(() => {
		dispatch(initializeApp())
	}, [])

	// ====================================================
	// JSX

	return !initialized ? (
		<Loading />
	) : (
		<div className="body">
			<Header />
			<div className="main">
				<div className="container">
					<Main />
				</div>
			</div>
			<Footer />
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(App)
