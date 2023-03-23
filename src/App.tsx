import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/MainLayout';
import Home from './pages/Home';
import Hero from './pages/Hero';
import RQHero from './pages/RQHero';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/rqhero" element={<RQHero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
