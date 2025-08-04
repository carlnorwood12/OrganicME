document.addEventListener("DOMContentLoaded", function () {
  // Register the SplitText plugin with GSAP
  gsap.registerPlugin(SplitText);

  // Set the initial state of the H1 to be visible so the animation can run
  // We set opacity to 0 in CSS and 1 here to avoid a flash of unstyled text
  gsap.set("#luxury-honey", { opacity: 1 });

  // Create the SplitText instance
  let split = new SplitText("#luxury-honey", {
    type: "lines,chars",
    linesClass: "lineParent",
    charsClass: "lineChild",
  });

  // The animation timeline
  gsap.from(
    split.chars, // Animate the characters
    {
      duration: 0.8, // It's good practice to set a duration
      yPercent: 120,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.05,
      ease: "power2.out",
      // We REMOVED the onComplete with split.revert()
      // This ensures the animation styles persist after completion.
    }
  );
});