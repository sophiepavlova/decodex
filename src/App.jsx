import { useState } from 'react';
import Home from './pages/Home';
import ReactPage from './pages/ReactPage';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  function handleSelectSubject(subjectId) {
    setCurrentSubject(subjectId);
  }

  function handleBackHome() {
    setCurrentSubject(null);
  }

  if (currentSubject === 'react') {
    return <ReactPage onBack={handleBackHome} />;
  }

  return <Home onSelectSubject={handleSelectSubject} />;
}
