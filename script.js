document.addEventListener("DOMContentLoaded", () => {

  //===========================
  // Search
  //===========================
  const searchBtn = document.getElementById("searchBtn");
  const query = document.getElementById("query");

  searchBtn.addEventListener("click", () => {
    const encoded = encodeURIComponent(query.value);
    window.location.href = `https://camcookiem.github.io/archive/?q=${encoded}`;
  });

  //===========================
  // Topbar Links
  //===========================
  const mainLinks = [
    { name: "Home", url: "https://camcookiem.github.io/" },
    { name: "Radio", url: "https://camcookiem.github.io/archive/v/" },
    { name: "DOCS", url: "https://camcookie876.github.io/DOCS/" },
    { name: "Games", url: "https://camcookieg.github.io/" },
    { name: "Books", url: "https://camcookieb.github.io/" },
    { name: "Connect", url: "https://camcookie876.github.io/connect/" }
  ];

  const linkContainer = document.querySelector(".Topbar-links");
  const dropdown = document.querySelector(".Topbar-dropdown");
  const menuBtn = document.querySelector(".Topbar-menu-btn");

  // Desktop links
  const h1 = document.createElement("h1");
  mainLinks.forEach((link, i) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.className = "Topbarlink";
    h1.appendChild(a);
    if (i < mainLinks.length - 1) h1.append(" | ");
  });
  linkContainer.appendChild(h1);

  // Mobile dropdown
  mainLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    dropdown.appendChild(a);
  });

  // Toggle dropdown
  menuBtn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  });

});