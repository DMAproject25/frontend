import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import LikesPage from './pages/LikesPage'
import MapPage from './pages/MapPage'
import ProfileMusicEdit from './pages/ProfileMusicEdit'
import ProfileInterestsEdit from './pages/ProfileInterestsEdit'
import ProfilePersonalEdit from './pages/ProfilePersonalEdit'

import TabBar from './components/TabBar'

const App: React.FC = () => {
	return (
		<Router>
			<MainContent />
		</Router>
	)
}

const MainContent: React.FC = () => {
	const location = useLocation()
	const hideTabBar = ['/login', '/register'].includes(location.pathname) // Скрываем TabBar на некоторых страницах

	return (
		<div className='flex flex-col min-h-screen bg-gray-900 text-white'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/matching' element={<LikesPage />} />
				<Route path='/map' element={<MapPage />} />
				<Route path='/profile/profile-music-edit' element={<ProfileMusicEdit />}/>
				<Route path='/profile/profile-interests-edit' element={<ProfileInterestsEdit />}/>
				<Route path='/profile/profile-personal-edit' element={<ProfilePersonalEdit />}/>
			</Routes>
			{!hideTabBar && <TabBar />} {/* Подключаем TabBar на всех страницах */}
		</div>
	)
}

export default App
