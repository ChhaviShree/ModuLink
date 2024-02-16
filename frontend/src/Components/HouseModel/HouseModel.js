/*import React, { useRef,useEffect } from 'react'
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader'
import './HouseModel.css'


const HouseModel = () => {
    const canvasRef=useRef();
    
    useEffect(()=>{
        const canvas=canvasRef.current;

        const scene=new THREE.Scene();
        const camera=new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer=new THREE.WebGL1Renderer({canvas,antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);

        let model=new THREE.Object3D();
        const loader=new GLTFLoader();
        
        loader.load('/path/to/your/house_model.gltf',(gltf)=>{
            model=gltf.scene;
            scene.add(model);
        });

        camera.position.z=5;

        const ambientLight=new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight=new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const animate =()=>{
            requestAnimationFrame(animate);
            /*if (model && model.rotation) {
                model.rotation.x += 0.01;
                model.rotation.y += 0.01;
              }
            renderer.render(scene,camera);
          };
        animate();

        const handleResize=()=>{
            const newWidth=window.innerWidth;
            const newHeight=window.innerHeight;

            camera.aspect=newWidth/newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth,newHeight);

        };
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);
    return <canvas ref={canvasRef} className="house-canvas" />;
};

export default HouseModel*/
