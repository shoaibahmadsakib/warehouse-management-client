import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RequireAuth from "./components/requireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog></Blog>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
