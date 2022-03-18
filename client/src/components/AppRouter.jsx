import { privateRoutes, publicRoutes, contentTabs } from "../router/index";
import { PageTemplate } from "./PageTemplate";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Error } from "./elements/Error";
import { Context } from "../context";
import { useContext, useEffect } from "react";
import { LoadingPage } from "./elements/Loading/LoadingPage";
import { NoContent } from "./contents/NoContent";
import { observer } from "mobx-react-lite";
import { getCookie } from "../utils/cookie";

export const AppRouter = observer(() => {
  const { store } = useContext(Context);
  const urlParams = new URLSearchParams(useLocation().search);

  useEffect(() => {
    if (getCookie("refresh") && getCookie("access")) {
      store.checkAuth();
    } else {
      store.setLoading(false);
    }
  }, []);

  if (store.isLoading) {
    return <LoadingPage />;
  }

  return store.isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={
            route.error ? (
              <Error />
            ) : route.redirect ? (
              <Navigate to={route.to}></Navigate>
            ) : route.content ? (
              <PageTemplate Sidebar={route.sidebar} Content={route.content} />
            ) : contentTabs[urlParams.get("tab")] ? (
              <PageTemplate
                Sidebar={route.sidebar}
                Content={contentTabs[urlParams.get("tab")]}
              />
            ) : (
              <PageTemplate Sidebar={route.sidebar} Content={NoContent} />
            )
          }
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={
            route.redirect ? (
              <Navigate to={route.to}></Navigate>
            ) : (
              <route.element />
            )
          }
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Routes>
  );
});
