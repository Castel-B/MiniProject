//  responsive Project image
const imgContainer = document.querySelector(".left-1");
const img1 = document.querySelector(".main-img-1");
const img1detail = document.querySelector(".img-detail-cont-1");
imgContainer.addEventListener("mouseenter", () => {
    img1.classList.toggle("img1-active");
    img1detail.classList.toggle("detail1-active");
});
imgContainer.addEventListener("mouseleave", () => {
    img1.classList.remove("img1-active");
    img1detail.classList.remove("detail1-active");
});

const imgContainer2 = document.querySelector(".left-2");
const img2 = document.querySelector(".main-img-2");
const img2detail = document.querySelector(".img-detail-cont-2");
imgContainer2.addEventListener("mouseenter", () => {
    img2.classList.toggle("img2-active");
    img2detail.classList.toggle("detail2-active");
});
imgContainer2.addEventListener("mouseleave", () => {
    img2.classList.remove("img2-active");
    img2detail.classList.remove("detail2-active");
});

const imgContainer3 = document.querySelector(".left-3");
const img3 = document.querySelector(".main-img-3");
const img3detail = document.querySelector(".img-detail-cont-3");
imgContainer3.addEventListener("mouseenter", () => {
    img3.classList.toggle("img3-active");
    img3detail.classList.toggle("detail3-active");
});
imgContainer3.addEventListener("mouseleave", () => {
    img3.classList.remove("img3-active");
    img3detail.classList.remove("detail3-active");
});



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

