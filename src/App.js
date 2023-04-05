import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProduct from "./home/product";
import EditProduct from "./edit/editProduct";
import DetailProduct from "./detail/DetailProduct";
import AddProduct from "./addProduct/addProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addProduct" element={<AddProduct />} />

          <Route path="/product" element={<MyProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
