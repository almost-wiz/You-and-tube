import {
  privateRoutes,
  publicRoutes,
  contentTabs
} from '../router/index'
import { PageTemplate } from './PageTemplate'
import { Routes, Route } from "react-router-dom";
import { Error } from './elements/Error'
import { Context } from "../context";
import { useContext } from 'react';
import { Loading } from './elements/Loading';
import { NoContent } from './contents/NoContent';
import { useLocation } from "react-router-dom";

export const AppRouter = () => {
  const { user } = useContext(Context);
  const urlParams = new URLSearchParams(useLocation().search);

  if (user.isLoading) {
    return <Loading />
  }

  return (
    user.isAuth
      ? (
        <Routes>
          {privateRoutes.map(route =>
            <Route
              element={route.error ? <Error /> : (
                route.content
                  ? (
                    <PageTemplate Sidebar={route.sidebar} Content={route.content}/>
                  )
                  : (
                    contentTabs[urlParams.get('tab')]
                      ? <PageTemplate Sidebar={route.sidebar} Content={contentTabs[urlParams.get('tab')]}/>
                      : <PageTemplate Sidebar={route.sidebar} Content={NoContent}/>
                  )
              )}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          )}
        </Routes>
      )
      : (
        <Routes>
          {publicRoutes.map(route =>
            <Route
              element={route.error ? <Error /> : <route.element/>}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          )}
        </Routes>
      )
  )
}
