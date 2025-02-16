import { useMemo } from "react";

export default function Stars({ count = 500 }) {
  const positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const r = 300;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x =
        r * Math.cos(theta) * Math.sin(phi) + (-20 + Math.random() * 40);
      const y =
        r * Math.sin(theta) * Math.sin(phi) + (-20 + Math.random() * 40);
      const z = r * Math.cos(phi) + (-10 + Math.random() * 20);
      positions.push(x);
      positions.push(y);
      positions.push(z);
    }
    return new Float32Array(positions);
  }, [count]);
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={1} sizeAttenuation color="white" fog={false} />
    </points>
  );
}
