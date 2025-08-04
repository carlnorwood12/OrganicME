document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(CustomEase, SplitText);
    CustomEase.create("customEase", "0.65, 0.05, 0, 1");
  
    // Split text elements
    const elements = document.querySelectorAll('[data-split="letters"]');
  
    elements.forEach((element) => {
      // Create a new SplitText instance
      const splitText = new SplitText(element, {
        type: "chars",
        charsClass: "single-letter",
      });
  
      const chars = splitText.chars;
  
      // Find the parent button for hover events
      const button = element.closest(".button");
        const tl = gsap.timeline({ paused: true });
        tl.to(chars, {
        y: "-1.25em",
        color: "#06402b",
        duration: 0.6,
        stagger: 0.01,
        ease: "customEase",
      });
  
      // Apply hover events
      button.addEventListener("mouseenter", () => {
        tl.play();
      });
  
      button.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });
  });