import React from "react";
import GithubReposContextProvider from "./context/GithubReposContext";
import GithubUserContextProvider from "./context/GithubUserContext";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <GithubUserContextProvider>
      <GithubReposContextProvider>
        <AppRouter />
      </GithubReposContextProvider>
    </GithubUserContextProvider>
  );
};

export default App;
