document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "bounceAnimation"
  var animatedImages = document.querySelectorAll(".bounceAnimation");

  // Function to handle the intersection observer callback
  function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // If the element is intersecting with the viewport, add the bounce class
        entry.target.classList.add("bounce");
      } else {
        // If the element is not intersecting, remove the bounce class
        entry.target.classList.remove("bounce");
      }
    });
  }

  // Create an Intersection Observer with the callback
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  // Add each animated image to the observer
  animatedImages.forEach(function(image) {
    observer.observe(image);
  });

  // Function to handle the animationend event
  function onAnimationEnd(event) {
    // Remove the bounce class when the animation ends
    event.target.classList.remove("bounce");
  }

  // Add animationend event listeners to all animated images
  animatedImages.forEach(function(image) {
    image.addEventListener("animationend", onAnimationEnd);
  });
});
