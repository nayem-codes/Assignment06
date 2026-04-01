import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Workflow from './components/workflow/Workflow'
import Pricing from './components/pricing/Pricing'
import Steps from './components/steps/Steps'
import Info from './components/steps/info/Info'
import Models from './components/models/Models'
import ModelCard from './components/models/ModelCard'
import Cart from './components/cart/Cart'
import { useState } from 'react'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState("model")
  const [cart, setCart] = useState([])
 

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Info></Info>

      
      
      <div className='pt-28'>

        <div className="text-center">
          <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
          <p className="text-gray-600 my-4">Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
        </div>

        <div className="tabs tabs-box max-w-3xs mx-auto flex justify-between bg-transparent">
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Products" defaultChecked 
          onClick={() => setActiveTab("model")}/>

          <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label={`Cart (${cart.length})`} 
          onClick={() => setActiveTab("cart")}/>

        </div>
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} cart={cart} setCart={setCart}></Models>}

      {activeTab === "cart" && <Cart cart={cart} setCart={setCart} ></Cart>}
      <Steps></Steps>

      <Pricing></Pricing>

      <Workflow></Workflow>

      <Footer></Footer>
    </>
  )
}

export default App
