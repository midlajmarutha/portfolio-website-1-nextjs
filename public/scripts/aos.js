if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", () => {
      console.log("file loaded...")
        const animateElements = document.querySelectorAll(".animate-on-scroll");
        const navSections = document.querySelectorAll("section")
        const nav = document.querySelector("nav")
        const observerOptions = {
          root: null, // Use the viewport as the container
          rootMargin: "0px",
          threshold: 0.1, // Trigger animation when 10% of the element is visible
        };
      
        const animateOnScroll = (entries, observer) => {
          entries.forEach((entry) => {
            const delay = entry.target.getAttribute("data-delay") || "0s"; // Default delay is 0s
            entry.target.style.transitionDelay = delay; // Apply the delay
            if (entry.isIntersecting) {
              console.log("intersecting...")
              entry.target.classList.add("animated"); // Add animated class
              observer.unobserve(entry.target); // Stop observing once animated
            }
          });
        };
      
        const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    
        animateElements.forEach((el) => {
          observer.observe(el);
        });
      });
  }
  else{
    const animateElements = document.querySelectorAll(".animate-on-scroll");
        const navSections = document.querySelectorAll("section")
        const nav = document.querySelector("nav")
        const observerOptions = {
          root: null, // Use the viewport as the container
          rootMargin: "0px",
          threshold: 0.1, // Trigger animation when 10% of the element is visible
        };
      
        const animateOnScroll = (entries, observer) => {
          entries.forEach((entry) => {
            const delay = entry.target.getAttribute("data-delay") || "0s"; // Default delay is 0s
            entry.target.style.transitionDelay = delay; // Apply the delay
            if (entry.isIntersecting) {
              console.log("intersecting...")
              entry.target.classList.add("animated"); // Add animated class
              observer.unobserve(entry.target); // Stop observing once animated
            }
          });
        };
      
        const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    
        animateElements.forEach((el) => {
          observer.observe(el);
        });
  }