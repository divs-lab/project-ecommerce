
import './App.css'
import {Route,Routes} from 'react-router-dom'
import LoginPage from './components/Login'
import Signup from './components/SignUp'
import Home from './pages/Home'
import CreateAddress from './components/CreateAddress'
import ProductForm from './components/ProductForm'
import SingleProductPage from './components/SingleProductPage'
import CartPage from './pages/Cart'


function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/add-address" element={<CreateAddress/>}/>
                <Route path="/product-form" element={<ProductForm/>}/>
                <Route path="/single-product" element={<SingleProductPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </>
    )
}

export default App