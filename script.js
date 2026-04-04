// Smooth scrolling for in-page anchor links (e.g., #about, #projects).
document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener("click", (event) => {
		const targetId = link.getAttribute("href");

		// Ignore empty hashes and external links.
		if (!targetId || targetId === "#") return;

		const targetElement = document.querySelector(targetId);
		if (!targetElement) return;

		event.preventDefault();
		targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
	});
});

// Mobile menu toggle logic.
// Works when you add a button with [data-menu-toggle] and a nav list with [data-nav-links].
const menuToggleButton = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuToggleButton && navLinks) {
	menuToggleButton.addEventListener("click", () => {
		const isExpanded = menuToggleButton.getAttribute("aria-expanded") === "true";
		menuToggleButton.setAttribute("aria-expanded", String(!isExpanded));
		navLinks.classList.toggle("is-open");
	});
}

// Basic fade-in on scroll for elements marked with [data-reveal].
const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealElements.length > 0) {
	const revealObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.15 }
	);

	revealElements.forEach((element) => {
		revealObserver.observe(element);
	});
}
