let selectio = document.querySelectorAll(".selection")
let selection = document.getElementsByClassName("selection")
let arrows = document.getElementsByClassName("arrow");
let hover = document.getElementsByClassName("hover")



for (let i = 0; i < selection.length; i++) {
    const eachNavItem = selection[i];

    ["click", "mouseenter", "mouseleave"].forEach(element => eachNavItem.addEventListener(element, function show() {
            arrows[i].style.transform = 'rotate(-180deg)';
            hover[i].style.display = "flex"
            console.log("you hovered over an element");


        })

    );

    for (let i = 0; i < hover.length; i++) {
        const hovering = hover[i];
        hovering.addEventListener("mouseleave", function keepShowing() {
            setTimeout(() => {
                this.style.display = "none"
                if (hovering.style.display = "none") {
                    arrows[i].style.transform = 'rotate(360deg)';
                }
            }, 100);
            console.log('entered to keep on showing NONE');
        })
    }



}