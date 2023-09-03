import React, {useEffect, useMemo, useRef, useState} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Box(props) {
  const meshRef = useRef()
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

const SoundViz = ({analyserData}) => {
  return(
    <Box position={[-1.2, 0, 0]} />
  )

}





const AudioAnalyser = ({analyser, testFNew}) => {


  useFrame((_, delta) => {
    const data = analyser.getFrequencyData();
    testFNew(data)

  });

}





const ThreeCanvas = () => {

  // const [vizData, setVizData] = useState(null)


  const cameraRef = useRef();

  const listener = new THREE.AudioListener();
  
  const sound = new THREE.Audio( listener);


  const analyser = new THREE.AudioAnalyser(sound, 32);


  const audioLoader = new THREE.AudioLoader();

  let url = "../../src/assets/BrownMunde.mp3"

  audioLoader.load(url, function(buffer){
    sound.setBuffer( buffer );
    sound.setLoop( true );
  });
  




  const handleClick = () => {

    if (sound.isPlaying){
      sound.pause();
    } else {
      sound.play();
    }
  }

 

  if (cameraRef.current){
    cameraRef.current.add(listener);
  }


  const testF = (data) => {
// setVizData(data) 
 }




  return (
    <div className="w-screen h-screen">
      <Canvas className="w-screen h-screen">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AudioAnalyser analyser={analyser} testFNew={testF}/>
    {/* <SoundViz analyserData={vizData}/> */}
        <OrbitControls />
        <perspectiveCamera ref = {cameraRef} position={[0, 0, 5]} />
      </Canvas>
      <button className="width-[10vw] absolute top-10" onClick={()=>handleClick()}>Play Music</button>
    </div>
      
      
  );
};



export default ThreeCanvas
