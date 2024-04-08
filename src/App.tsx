import { Route, Routes } from 'react-router-dom';
import CNav from './nav/nav';
import CHome from './pages/Home';
import CUsage from './pages/Usage';
import CDevelopment from './pages/Development';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<CNav />}>
        <Route index element={<CHome />} />
        <Route path='/usage' element={<CUsage />} />
        <Route path='/develop' element={<CDevelopment />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
