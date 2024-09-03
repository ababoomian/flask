import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task2 from './pages/Task2';
import KeyboardEvent from './pages/KeyboardEvent';
import LayoutProvider from './Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <LayoutProvider>
        <Routes>
          <Route path="/task1" element={<KeyboardEvent />} />
          <Route path="/task2" element={<Task2 sona={{ "1": 2 }} />} />
          <Route path="/" element={<KeyboardEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutProvider>
    </Router>
  );
};

export default App;
