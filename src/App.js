import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LayOut from './screens/LayOut';
import NotBuilt from './screens/NotBuilt';
import NotFound from './screens/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<LandingPage />} />
          <Route path="not-built" element={<NotBuilt />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
