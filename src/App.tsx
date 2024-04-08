import { Route, Routes } from 'react-router-dom';
import CNav from './nav/nav';
import CHome from './pages/Home';
import CUsage from './pages/Usage';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<CNav />}>
        <Route index element={<CHome />} />
        <Route path='/usage' element={<CUsage />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
