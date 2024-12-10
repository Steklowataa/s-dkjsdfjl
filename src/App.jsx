import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import {Animation} from "../src/components/Animation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/men' element={<ShopCategory category="men"/>}/>
      <Route path='/women' element={<ShopCategory  category="women"/>}/>
      <Route path='/kids' element={<ShopCategory  category="kids"/>}/>
    </Routes>
    <div className="App">
                <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
                    <ambientLight intensity={5} />
                    <OrbitControls enableZoom={true} />
                    <Animation />
                </Canvas>
                </div>
    </BrowserRouter>
    </> 
  )
}

