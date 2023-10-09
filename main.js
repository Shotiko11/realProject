import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild(renderer.domElement);

const torusRadius = 1; 
const tubeRadius = 0.3; 
const torusSegments = 16;
const tubeSegments = 100;

const geometry = new THREE.TorusGeometry(torusRadius, tubeRadius, torusSegments, tubeSegments);
const orangeMaterial = new THREE.MeshStandardMaterial({ color: 0xFFA500 }); 
const torus = new THREE.Mesh(geometry, orangeMaterial);
scene.add(torus);

camera.position.z = 5;

torus.position.x = 12;
camera.position.y = -4.1;
torus.position.z = -5;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

let isDragging = false;
let previousMousePosition = {
  x: 0,
  y: 0
};

document.addEventListener('mousedown', (event) => {
  isDragging = true;
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY
  };
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y
    };

    torus.rotation.x += deltaMove.y * 0.005;
    torus.rotation.y += deltaMove.x * 0.005;

    previousMousePosition = {
      x: event.clientX,
      y: event.clientY
    };
  }
});

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();




// dsadsadsadasdasdasdasdas




document.addEventListener("DOMContentLoaded", function () {
  let video1 = document.getElementById("background-video");
  let video2 = document.getElementById("second-video");
  let video3 = document.getElementById("third-video");
  let video4 = document.getElementById("fourth-video");
  let video5 = document.getElementById("fifth-video");
  let video6 = document.getElementById("sixth-video");

  let activeVideo = video1;
  let isScrolling = false;

  document.addEventListener("wheel", function (event) {
      if (event.deltaY > 0) {
          switch (activeVideo) {
              case video1:
                  video1.style.display = "none";
                  video2.style.display = "block";
                  activeVideo = video2;
                  break;
              case video2:
                  video2.style.display = "none";
                  video3.style.display = "block";
                  activeVideo = video3;
                  break;
              case video3:
                  video3.style.display = "none";
                  video4.style.display = "block";
                  activeVideo = video4;
                  break;
              case video4:
                  video4.style.display = "none";
                  video5.style.display = "block";
                  activeVideo = video5;
                  break;
              case video5:
                  video5.style.display = "none";
                  video6.style.display = "block";
                  activeVideo = video6;
                  break;
              case video6:
                  video6.style.display = "none";
                  video1.style.display = "block";
                  activeVideo = video1;
                  break;
              default:
                  break;
          }
      } else {
          // Scroll up
          switch (activeVideo) {
              case video1:
                  video1.style.display = "none";
                  video6.style.display = "block";
                  activeVideo = video6;
                  break;
              case video2:
                  video2.style.display = "none";
                  video1.style.display = "block";
                  activeVideo = video1;
                  break;
              case video3:
                  video3.style.display = "none";
                  video2.style.display = "block";
                  activeVideo = video2;
                  break;
              case video4:
                  video4.style.display = "none";
                  video3.style.display = "block";
                  activeVideo = video3;
                  break;
              case video5:
                  video5.style.display = "none";
                  video4.style.display = "block";
                  activeVideo = video4;
                  break;
              case video6:
                  video6.style.display = "none";
                  video5.style.display = "block";
                  activeVideo = video5;
                  break;
              default:
                  break;
          }
      }

      isScrolling = true;

      setTimeout(function () {
          isScrolling = false;
      }, 100);
  });

  window.addEventListener("scroll", function (event) {
      if (isScrolling) {
          event.preventDefault();
      }
  });
});