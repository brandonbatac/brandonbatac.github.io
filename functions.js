function toggleStyleSheet() {
  var styleSheet = document.getElementById("page-style");
  var currentStyle = styleSheet.getAttribute("href");
  var logoImage = document.getElementById("logo");
  var newStyle;
  if (currentStyle.includes("style-1.css")) {
    newStyle = "css/style-2.css";
    logoImage.setAttribute("src", "images/Logo2.png");
  } else {
    newStyle = "css/style-1.css";
    logoImage.setAttribute("src", "images/Logo.png");
  }
  styleSheet.setAttribute("href", newStyle);
  localStorage.setItem("stylesheet", newStyle);
  console.log(newStyle);
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}

window.onload = function () {
  var savedStyle = localStorage.getItem("stylesheet");
  var styleSheet = document.getElementById("page-style");
  var logoImage = document.getElementById("logo");
  if (styleSheet && savedStyle) {
    styleSheet.setAttribute("href", savedStyle);
    if (savedStyle.includes("style-2.css")) {
      logoImage.setAttribute("src", "images/Logo2.png");
    } else {
      logoImage.setAttribute("src", "images/Logo.png");
    }
  }
};
