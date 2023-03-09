import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Text } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computers = useGLTF("./desktop_pc/scene.gltf");
  const [lightOn, setLightOn] = useState(true);
  const toggleLights = () => {
    setLightOn(!lightOn);
  };

  return (
    <>
      <mesh
        position={isMobile ? [-1, 0.2, -2] : [0.5, -0.4, -4]}
        onClick={toggleLights}
      >
        <boxBufferGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#e8f13f" />
        <Text
          position={[0.2, 0.2, 0]}
          color="white"
          fontSize={0}
          rotation={[0, 1.3, 0]}
          billboard
        >
          {lightOn ? "OFF" : "ON"}
        </Text>
      </mesh>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />

        {lightOn && (
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize={1024}
          />
        )}
        {lightOn && <pointLight intensity={1} />}
        <primitive
          object={computers.scene}
          position={isMobile ? [-1, -1, -0.7] : [0, -3.25, -1.25]}
          scale={isMobile ? 0.35 : 0.75}
        />
      </mesh>
    </>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload />
      </Canvas>
    </>
  );
};

export default ComputerCanvas;
