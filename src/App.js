import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login";
import Signup from "./components/Sign Up/Signup";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import InventoryItems from "./components/Inventory Items/InventoryItems";
import ManageItems from "./components/Manage Items/ManageItems";
import AddItem from "./components/Add Item/AddItem";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";


function App() {
  return (
    <div className="body">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventoryItems"
          element={<InventoryItems></InventoryItems>}
        ></Route>
        <Route
          path="/manageItems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/addItems" element={<AddItem></AddItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
