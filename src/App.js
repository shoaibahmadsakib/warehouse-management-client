import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles

import Header from "./components/header/Header";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RequireAuth from "./components/requireAuth/RequireAuth";
import AddItem from "./pages/AddItem";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ManageItem from "./pages/ManageItem";
import UpdateItem from "./pages/UpdateItem";
import Footer from "./components/footer/Footer";
import Inventory from "./pages/Inventory";
import MyItem from "./pages/MyItem";
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
         <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
         <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="/manageitem" element={<ManageItem></ManageItem>}></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route path="/updateitem/:id" element={<UpdateItem></UpdateItem>}></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
