import {Animation} from "./Animation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function AnimationShow() {
    return (
        <div className="relative">
        <Canvas camera={{ fov: 64, position: [-2, 20, 0] }} className="mt-[400px]">
            <ambientLight intensity={5} />
            <OrbitControls enableZoom={true} />
            <Animation />
        </Canvas>
        </div>
    )
}