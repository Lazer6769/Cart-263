import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'


// canvas
const canvas = document.querySelector("canvas#three-ex");
const scene = new THREE.Scene();

//lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 50)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight);

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);

//make a plane
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshStandardMaterial({ color: "#657997" }),
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(plane)

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);




let gltfModel = null;

try {
     gltfModel = await gltfLoader.loadAsync('model/FINALRoomAGAIN.glb');
    
    //add models to an array 
    let objs = []
    objs.push(gltfModel)
    addAndRun(objs)
    // console.log(gltfModel)
    // addAndRun(gltfModel);
}
catch (error) {
    console.log(error.message)
}
function addAndRun(loadedObjsArray) {
    let roomModel = loadedObjsArray[0].scene.children[0]

    roomModel.scale.set(.015, .015, .015)
    console.log(loadedObjsArray[0])
   
    //set scale
    roomModel.scale.x -= .005
    roomModel.scale.y -= .005
    roomModel.scale.z -= .005

    //set pos
    roomModel.position.x = 1
    roomModel.position.y = -0.5
    roomModel.position.z = 0

    scene.add(roomModel)
    
    //spotlight on duck
    const spotLight = new THREE.SpotLight(0xBB76E3, 20, 10, Math.PI * 0.1, 0.25, 1)
    spotLight.position.set(0, 2, 3)
    scene.add(spotLight)
    spotLight.target = roomModel
}