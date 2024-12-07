import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import Dash from './pages/Dashboard/Dash';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
    <Loader />
  ) : (
    <Provider store={store}>
      <Routes>
        <Route
          index
          element={
            <>
              <Dash />
            </>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
