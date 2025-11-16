// Menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("nav-list");
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  menu.classList.toggle("show");
  this.setAttribute("aria-expanded", !isExpanded);
});

// Close menu button
document.getElementById("close-menu").addEventListener("click", function () {
  const menu = document.getElementById("nav-list");
  const toggle = document.getElementById("menu-toggle");
  menu.classList.remove("show");
  toggle.setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.getElementById("nav-list");
    const toggle = document.getElementById("menu-toggle");
    menu.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Formulario de contacto
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    //Simular envío de formulario
    alert(`¡Gracias por tu mensaje, ${name}! Te responderé pronto a ${email}`);

    // Limpiar formulario
    this.reset();
  });

// Efecto de nieve
(function () {
  "use strict";

  var canvas, ctx;
  var points = [];
  var maxDist = 100;

  function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resizeCanvas();
    generatePoints(350);
    pointFun();
    setInterval(pointFun, 30);
    window.addEventListener("resize", resizeCanvas, false);
  }

  function point() {
    this.x = Math.random() * (canvas.width + maxDist) - maxDist / 2;
    this.y = Math.random() * (canvas.height + maxDist) - maxDist / 2;
    this.z = Math.random() * 0.4 + 0.4;
    this.vx = (Math.random() * 1.5 - 0.5) * this.z;
    this.vy = (Math.random() * 1.2 + 1) * this.z;
    this.fill = "rgba(255,255,255," + (0.3 * Math.random() + 0.2) + ")";
    this.dia = (Math.random() * 2 + 1) * this.z;
    points.push(this);
  }

  function generatePoints(amount) {
    for (var i = 0; i < amount; i++) {
      new point();
    }
  }

  function draw(obj) {
    ctx.beginPath();
    ctx.strokeStyle = "transparent";
    ctx.fillStyle = obj.fill;
    ctx.arc(obj.x, obj.y, obj.dia, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function update(obj) {
    obj.x += obj.vx;
    obj.y += obj.vy;
    if (obj.x > canvas.width + maxDist / 2) {
      obj.x = -(maxDist / 2);
    } else if (obj.x < -(maxDist / 2)) {
      obj.x = canvas.width + maxDist / 2;
    }
    if (obj.y > canvas.height + maxDist / 2) {
      obj.y = -(maxDist / 2);
    } else if (obj.y < -(maxDist / 2)) {
      obj.y = canvas.height + maxDist / 2;
    }
  }

  function pointFun() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < points.length; i++) {
      draw(points[i]);
      update(points[i]);
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  document.addEventListener("DOMContentLoaded", init, false);
})();
