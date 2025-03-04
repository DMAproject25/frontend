
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,  // Для создания ссылок между страницами
  useNavigate  // Хук для программной навигации
} from 'react-router-dom';

// Компоненты страниц
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LikesPage from './pages/LikesPage';
import MapPage from './pages/MapPage';

/* import './App.css' */

// Компонент с навигационным меню
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/profile">Профиль</Link>
        </li>
        <li>
          <Link to="/matching">Лайки</Link>
        </li>
        <li>
          <Link to="/chat/:id">Карта</Link>
        </li>
      </ul>
    </nav>
  );
};

// Пример компонента с программной навигацией
const LikesButton = () => {
  const navigate = useNavigate();

  const handleStartMatching = () => {
    navigate('/matching');
  };

  return (
    <button onClick={handleStartMatching}>
      Начать знакомства
    </button>
  );
};

function App() {
	return (
    <Router>
      <div>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/matching" element={<LikesPage />} />
          <Route path="/chat/:id" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
		
	)
}

export default App
