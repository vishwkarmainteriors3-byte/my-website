/* ===== NAVBAR ACTIVE ON CLICK ===== */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});


/* ===== NAVBAR ACTIVE ON SCROLL ===== */
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(
                '.nav-links a[href="#' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});


/* ===== SCROLL REVEAL (BOXES) ===== */
const boxes = document.querySelectorAll(".box");

function revealBoxes() {
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight - 100) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealBoxes);


/* ===== INITIAL STATE ===== */
window.addEventListener("load", () => {
    boxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(50px)";
        box.style.transition = "0.6s ease";
    });
});
