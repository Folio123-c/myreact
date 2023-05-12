import { BrowserRouter, Routes, Route } from "react-router-dom";
import OTPForm from "./pages/OTPForm";
import CategoryForm from "./pages/Category";
import {Viewcategory} from "./pages/Viewcategory";
import LoginForm from "./pages/Login";
import {ProductHome} from "./pages/ProductHome";
import {Homepage} from "./pages/Homepage";
import AddProductForm from "./pages/Addproduct";
import NotFoundPage from "./pages/NotfoundPage";
import {BuyerView} from "./pages/BuyerView";
import {SingleProductView} from "./pages/SingleProduct";
import SignupForm from "./pages/SignupPage";
import {UsersHome} from "./pages/ViewUsers";



function App() {
  return (
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/OTPForm" element={<OTPForm />} />
                <Route path="/Addproduct" element={<AddProductForm />} />
                <Route path="/Addcategory" element={<CategoryForm />} />
                <Route path="/Viewcategory" element={<Viewcategory />} />
                <Route path="/ProductHome" element={<ProductHome />} />
                <Route path="/allproduct" element={<BuyerView/>} />
                <Route path={"/category"} element={< Viewcategory/>} />
                <Route path="/products/:id" element={<SingleProductView/>} />
               <Route path="/signup" element={<SignupForm/>} />
              <Route path="/allusers" element={<UsersHome/>} />
                <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>

  );
}


export default App;
