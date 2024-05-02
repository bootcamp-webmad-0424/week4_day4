import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import NotFoundPage from './components/NotFoundPage/NotFoudPage'
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails'


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/sobre-mi'} element={<AboutPage />} />
        <Route path={'/mis-proyectos'} element={<ProjectsPage />} />

        <Route path={'/mis-proyectos/:project_id'} element={<ProjectDetails />} />

        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}
export default App;
