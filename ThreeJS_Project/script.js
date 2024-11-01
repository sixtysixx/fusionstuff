// get canvas elemt
const canvas = document.getElementById('threejs-canvas')

// make scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera (90, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 5

// attach 2 camera

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshStandardMaterial({ color: 0xaf7ac5  })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

const AmbientLight = new THREE.AmbientLight(0xffffff, .45)
scene.add(AmbientLight)

const DirectionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
DirectionalLight.position.set(5,5,5);
scene.add(DirectionalLight)

function animate() {
    requestAnimationFrame(animate)

    //rotat
    cube.rotation.x += 0.01;
    cube.rotation.y -= 0.015;

    renderer.render(scene, camera)
}
animate();
