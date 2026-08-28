(function () {
  "use strict";

  // Build the hero filmstrip from thumbnail images, duplicated once for a seamless loop.
  var thumbs = [
    "life-01-sketchbook-spread", "character-02-spiderverse", "painting-01-flower",
    "graphic-08-childrens-book-c", "portrait-03-gcse-final", "figure-03-digital-colour",
    "digital-01-butterfly", "graphic-03-campaign-goat", "life-04-sketchbook-spread",
    "character-01-own-character", "painting-02-koi", "graphic-01-book-cover-a",
    "portrait-01-digital", "character-03-hybrid-form", "painting-04-unit1-final",
    "graphic-04-campaign-parrot"
  ];

  var track = document.getElementById("filmstrip-track");
  if (track) {
    var frag = document.createDocumentFragment();
    thumbs.concat(thumbs).forEach(function (slug) {
      var img = document.createElement("img");
      img.src = "images/thumbs/" + slug + ".jpg";
      img.alt = "";
      img.loading = "lazy";
      frag.appendChild(img);
    });
    track.appendChild(frag);
  }

  // Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCap = document.getElementById("lightbox-cap");
  var closeBtn = document.getElementById("lightbox-close");
  var lastFocused = null;

  function openLightbox(src, cap) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = cap || "";
    lightboxCap.textContent = cap || "";
    lightbox.classList.add("open");
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".plate .frame").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn.getAttribute("data-img"), btn.getAttribute("data-cap"));
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });
})();
