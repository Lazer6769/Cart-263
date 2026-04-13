import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const canvas = document.querySelector('#c');
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x000000, 1);

//plane
const plane = new three.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide })
);
plane.rotation.x = Math.PI * 0.5;
plane.position.y = -0.65;
scene.add(plane);


