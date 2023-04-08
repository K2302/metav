const Plane = () => {
  return (
      <mesh position={[0, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[200, 200]} />
          <meshStandardMaterial color={"grey"} />
      </mesh>
  );
}

export default Plane;