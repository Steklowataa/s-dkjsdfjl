import { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Animation(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./public/blenderFile.glb");
  
  // Add checks and log to confirm animations are present
  console.log("Animations:", animations);

  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play(); // Automatically play the first animation
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Render meshes only if nodes are available */}
        {nodes.Cube && (
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            position={[-0.07, 0.1, -0.127]}
            scale={[10, 0.03, 6]}
          />
        )}
        {nodes.Sphere && (
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials["Material.002"]}
            position={[-0.62, 0.43, -0.79]}
            rotation={[-0.01, 0.11, -0.02]}
            scale={0.09}
          />
        )}
        {nodes.Sphere001 && (
          <mesh
            name="Sphere001"
            geometry={nodes.Sphere001.geometry}
            material={materials["Material.001"]}
            position={[0.4, 0.55, 0.15]}
            scale={0.41}
          />
        )}
      </group>
    </group>
  );
}
