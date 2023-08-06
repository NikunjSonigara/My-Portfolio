var typed = new Typed(".text", {
    strings: ["Web Developer", "Student", "Flutter Developer", "Blockchain Developer", "Fast Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// function classToggle() {
//     const navs = document.querySelectorAll('.toggle')

//     navs.forEach(nav => nav.classList.toggle('navbar_right'));
// }

// document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle);

icon.onclick = function (e) {
    var nav = document.querySelector(".navbar_right");
    icon.style.display = "block"
    if (nav.style.display == "flex"){
        document.getElementById('icone2').style.display = "none";
        document.getElementById('icone1').style.display = "block";
        return nav.style.display = "none";
    }
    else{
        document.getElementById('icone1').style.display = "none";
        document.getElementById('icone2').style.display = "block";
        return nav.style.display = "flex";
    }
};

// function show() {
//     /* Access image by id and change
//     the display property to block*/
//     if (document.getElementById('icone1').style.display == "none"){
//         document.getElementById('icone2').style.display = "none";
//         return document.getElementById('icone1').style.display = "block";
//     }
//     else {
//         document.getElementById('icone1').style.display = "none"
//         return document.getElementById('icone2').style.display = "block"
//     };
// }