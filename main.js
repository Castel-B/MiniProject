// toggle & responsive nav
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector(".nav-items");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// clear form
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

