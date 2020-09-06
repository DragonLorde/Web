let menu = document.querySelector(".menu");
let btn = document.querySelectorAll("button");
let close = document.querySelector(".menu__krest");
let aboutCard = document.querySelectorAll(".about__column");



    function hovering (e) {
        console.log(e);
    }

    function menus() {
        menu.classList.toggle("hide");
    }

    for(let prop of aboutCard) {
        prop.addEventListener("mouseenter" , (e) => {
            if(e.target.classList.contains("about__column") ) {
                let hv = e.target.querySelector(".about__hv");
                hv.classList.remove("about__column__hide");
                let dec = e.target.querySelector("p");
                dec.style.textalign = "left";
                dec.style.color = "#FFEE90";
                e.target.querySelector(".hide_hide").style.display = "none";
                e.target.querySelector(".hide__button").style.display = "block"; 
            }   
        });
        prop.addEventListener("mouseleave" , (e) => {
            if(e.target.classList.contains("about__column") ) {
                let hv = e.target.querySelector(".about__hv");
                hv.classList.add("about__column__hide");
                e.target.querySelector("p").style.color = "#FFFFFF";
                e.target.querySelector(".hide_hide").style.display = "block";
                e.target.querySelector(".hide__button").style.display = "none"; 
            }  
        })
    }
    
    for(let prop of btn) {
        prop.addEventListener("click" , menus);
    }