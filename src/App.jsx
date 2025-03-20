import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

//contexts
import GlobalContext from './contexts/globalContext';

//layouts
import DefaultLayout from './layouts/DefaultLayout';

//pages
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>

        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/movies/:id" Component={MoviePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
