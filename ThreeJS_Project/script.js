// get canvas elemt
const canvas = document.getElementById("threejs-canvas");

// make scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// attach 2 camera

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xaf7ac5 });

const cube = new THREE.Mesh(geometry, material);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff0000}));

const pyramid = new THREE.Mesh(new THREE.TetrahedronGeometry(1), new THREE.MeshStandardMaterial({ color: 0xffffff}));

pyramid.position.set(-5, 0, 0);
sphere.position.set(5, 0, 0);

scene.add(cube);
scene.add(sphere);
scene.add(pyramid);

const AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(AmbientLight);

const DirectionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
DirectionalLight.position.set(5, 5, 5);
scene.add(DirectionalLight);



function animate() {
  requestAnimationFrame(animate);

  //rotat
  cube.rotation.x += 0.01;
  cube.rotation.y -= 0.015;

  sphere.rotation.x += 0.01;
  sphere.rotation.y -= 0.015;

  pyramid.rotation.x += 0.01;
  pyramid.rotation.y -= 0.015;

  renderer.render(scene, camera);
}
animate();

let isMouseDown = false;
let previousMousePosition = { x: 0, y: 0 };

canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
});

canvas.addEventListener("mouseup", (event) => {
  isMouseDown = false;
});

canvas.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    const deltaMove = {
      x: event.offsetX - previousMousePosition.x,
      y: event.offsetY - previousMousePosition.y,
    };

    cube.rotation.x += deltaMove.x * 0.01;
    cube.rotation.y -= deltaMove.y * 0.01;
  }
  previousMousePosition = { x: event.offsetX, y: event.offsetY };
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") pyramid.position.x += 0.25;
  if (event.key === "ArrowRight") pyramid.position.x -= 0.25;
  if (event.key === "ArrowUp") pyramid.position.y += 0.25;
  if (event.key === "ArrowDown") pyramid.position.y -= 0.25;
  if (event.key === "ArrowLeft") sphere.position.x -= 0.25;
  if (event.key === "ArrowRight") sphere.position.x += 0.25;
  if (event.key === "ArrowUp") sphere.position.y -= 0.25;
  if (event.key === "ArrowDown") sphere.position.y += 0.25;
  if (event.key === "a") pyramid.position.x += 0.25;
  if (event.key === "d") pyramid.position.x -= 0.25;
  if (event.key === "w") pyramid.position.y += 0.25;
  if (event.key === "s") pyramid.position.y -= 0.25;
  if (event.key === "a") sphere.position.x -= 0.25;
  if (event.key === "d") sphere.position.x += 0.25;
  if (event.key === "w") sphere.position.y -= 0.25;
  if (event.key === "s") sphere.position.y += 0.25;
//  if (event.key === "e") sphere.scale.set(2, 2, 2)
//  if (event.key === "q") sphere.scale.set(-2, -2, -2)
})

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / innerHeight; 
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
})