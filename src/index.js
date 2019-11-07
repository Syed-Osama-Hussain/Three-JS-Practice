import * as THREE from 'three';
var camera, scene, renderer;
var geometry, material, cube;
let line;

init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //camera = new THREE.OrthographicCamera(-5, 5, -5, 5, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // cube
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  //line
  geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(3, 3, 0));
  //geometry.vertices.push(new THREE.Vector3(2, 0, 0));
  material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  line = new THREE.Line(geometry, material);
  camera.position.z = 5;
  scene.add(line);
  //renderer.render(scene, camera);
}

function animate() {
  //requestAnimationFrame(animate);
  //cube.rotation.x += 0.05;
  //cube.rotation.y += 0.05;
  for (let i = 0; i <= 10; i++) {
    //let vectory = Math.sin(i * (360 / 10)) / Math.sqrt(18);
    //let vectorx = Math.sqrt(18 - Math.pow(vectory, 2));

    let newCube = cube.clone();    //line.translateY(2);
    let lineCube = line.clone()
    line.rotation.z = i * (360 / 10) * (Math.PI / 180);
    line.translateY(2);

    //console.log(Math.PI, vectorx, vectory);

    newCube.rotation.z = i * (360 / 10) * (Math.PI / 180);
    newCube.translateY(2);
    scene.add(line);
    scene.add(newCube);
  }
  //cube.rotation.z = Math.PI;

  renderer.render(scene, camera);

}