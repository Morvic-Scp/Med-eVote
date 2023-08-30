// src: "../assets/rive/forestCamp.riv",
const r = new rive.Rive({
    src: "../assets/rive/monster.riv",
    // src: "https://cdn.rive.app/animations/vehicles.riv",
    // Or the path to a public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true,
    fit:rive.Fit.cover,
    stateMachines: "State Machine 1",
    onLoad: () => {
      // r.resizeDrawingSurfaceToCanvas();
      resizeCanvasToWebsiteWidth();
    window.addEventListener("resize", resizeCanvasToWebsiteWidth);
    },
});

const r2 = new rive.Rive({
  src: "../assets/rive/pumpkin.riv",
  // src: "https://cdn.rive.app/animations/vehicles.riv",
  // Or the path to a public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("canvas1"),
  autoplay: true,
  fit:rive.Fit.cover,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r2.resizeDrawingSurfaceToCanvas();

  },
});

const r3 = new rive.Rive({
  src: "../assets/rive/sneaky_racoon.riv",
  // src: "https://cdn.rive.app/animations/vehicles.riv",
  // Or the path to a public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("canvas2"),
  autoplay: true,
  fit:rive.Fit.cover,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r3.resizeDrawingSurfaceToCanvas();

  },
});
function resizeCanvasToWebsiteWidth() {
  const websiteWidth = document.documentElement.clientWidth;
  const canvas = document.getElementById("canvas");
  canvas.width = websiteWidth;
  r.resizeDrawingSurfaceToCanvas();
}