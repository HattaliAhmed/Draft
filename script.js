window.onload = init;

function init() {
    const input = document.getElementById("input");

    input.innerHTML = window.location.hash.length === 0 ?
        "Create easily shareable notes"
        : decodeURI(atob(window.location.hash.substring(1)));
    window.location.hash = encodeURI(btoa(input.innerHTML));
    input.addEventListener('keyup', () => {
        window.location.hash = encodeURI(btoa(input.innerHTML));
    });
    function auto_height(elem) {  /* javascript */
        elem.style.height = "1px";
        elem.style.height = (elem.scrollHeight) + "px";
    }

    const toggle = document.querySelector('.toggle');
    const logo = document.querySelector('.logo');
    toggle.addEventListener("click", modeSwitch);

    let isLight = true;

    function modeSwitch() {
        isLight = !isLight;
        var rootElement = document.body;
        var toggle = document.getElementById("toggle");
        rootElement.classList.toggle("lightMode");
        toggle.classList.toggle("off");
        logo.classList.toggle("light");
    }
}
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    document.getElementById("copy").firstChild.data = "Link copied!"
    setTimeout(function () {
        document.getElementById("copy").firstChild.data = "Copy link"
    }, 5000);
}