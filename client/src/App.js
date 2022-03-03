import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Context } from './context'
import { AppRouter } from './components/AppRouter'
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState({
    isAuth: false,
    isLoading: true,
    data: {
      access_key: null,
      refresh_key: null,
      id : null,
      username: null,
    }
  });

  useEffect(() => {
    if (cookies.isAuth) {
      setUser({...user, isAuth: true})
    }
    setUser({...user, isLoading: false, isAuth: true})
  }, [])


  return (
    <CookiesProvider>
      <Context.Provider value={{
        user, setUser, cookies, setCookie, removeCookie
      }}>
        <BrowserRouter>
          <AppRouter />
          </BrowserRouter>
        </Context.Provider>
      </CookiesProvider>
  );
}

export default App;
