const motionPreference = window.matchMedia("(prefers-reduced-motion: no-preference)");

if (motionPreference.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.classList.add("is-animated");
      observer.unobserve(target);
    }
  }, { threshold: 0.55 });

  document.querySelectorAll("[data-motion]").forEach((art) => observer.observe(art));
}
