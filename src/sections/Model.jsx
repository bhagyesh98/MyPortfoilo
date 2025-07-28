import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('https://models.babylonjs.com/laptop.glb');
  return <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} />;
};

export default Model;

