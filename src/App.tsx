import React from 'react';
import './App.css';
import { ProjectProvider } from './context/ProjectContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import GlobalStyles from './styles/GlobalStyles';

// function App() {
//   return (
//     <div className="App">
//           <h1> Project Management </h1>
//     </div>
//   );
// }

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/"  element={ <DashboardPage /> } />
        </Routes>
      </Router>
    </ProjectProvider>
  );
};

export default App;
