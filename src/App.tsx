import 'flowbite'
import { HashRouter, Route, Routes } from 'react-router-dom'
import '../src/core/css/App.css'
import NumberOrderCart from './core/component/cart/NumberOrderCart'
import Footer from './core/component/layout/Footer'
import NavBar from './core/component/layout/NavBar'
import ScrollToTop from './core/component/layout/ScrollToTop'
import { ROUTER } from './core/constant/router'
import CartConatiner from './page/Cart/CartConatiner'
import ContactContainer from './page/Contact/ContactContainer'
import HomeContainer from './page/Home/HomeContainer'
import OrderSuccessContainer from './page/Order_Success/OrderSuccessContainer'
import PolicyContainer from './page/Policy/PolicyContainer'
import DetailProductContainer from './page/Product/DetailProduct/DetailProductContainer'
import ProductContainer from './page/Product/ProductContainer'

function App() {
  return (
    <HashRouter>
      <div className='flex flex-col !justify-between'>
        <NavBar />
        <div className='mx-[10%] h-auto'>
          <Routes>
            <Route path={ROUTER?.HOME} element={<HomeContainer />} />
            <Route path={ROUTER?.PRODUCT} element={<ProductContainer />} />
            <Route path={ROUTER?.DETAIL_PRODUCT} element={<DetailProductContainer />} />
            <Route path={ROUTER?.CONTACT} element={<ContactContainer />} />
            <Route path={ROUTER?.POLICY} element={<PolicyContainer />} />
            <Route path={ROUTER?.CART} element={<CartConatiner />} />
            <Route path={ROUTER?.ORDER_SUCCESS} element={<OrderSuccessContainer />} />
          </Routes>
        </div>
        <Footer />
        <NumberOrderCart />
        <ScrollToTop />
      </div>
    </HashRouter>
  )
}

export default App
