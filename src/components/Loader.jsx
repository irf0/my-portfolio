import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { color } from "framer-motion";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}
      </p>
    </Html>
  );
};

export default Loader;
