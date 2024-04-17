import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChapterTwo } from "../modules/Chapter-2";
import LayoutInit from "../components/LayoutInit";
import ChapterOne from "../modules/Chapter-1/ChapterOne";
import Authentifications from "../modules/Chapter-2/widgets/authentifications";
import ErrorPage from "../components/ErrorPage";

export default function BaseRoute() {
  const arrayRoute = [
    { path: "home", element: <ChapterTwo /> },
    { path: "chapter-1", element: <ChapterOne /> },
    { path: "chapter-2", element: <ChapterTwo /> },
  ];
  return (
    <React.Suspense>
      <Routes>
        {arrayRoute.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<LayoutInit>{route.element}</LayoutInit>}
          />
        ))}
        <Route
          index
          element={
            <LayoutInit>
              <ChapterOne />
            </LayoutInit>
          }
        />
        <Route
          path="chapter-2"
          element={
            <LayoutInit>
              <ChapterTwo />
            </LayoutInit>
          }
        />
        <Route
          path="home"
          element={
            <LayoutInit>
              <ChapterTwo />
            </LayoutInit>
          }
        />
        <Route path="sign-in" element={<Authentifications />} />
        <Route path="sign-out" element={<Authentifications />} />
        <Route
          path="chapter-1"
          element={
            <LayoutInit>
              <ChapterOne />
            </LayoutInit>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};
