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
                setTimeout(() => { 
                    hv.classList.remove("about__column__hide");
                    e.target.querySelector(".hide__button").classList.add("bt__op");
                    e.target.querySelector(".hide__button").style.display = "block"; 
                } , 600);
                
                setTimeout(() => { 
                    hv.classList.add("hide__hides");
                    e.target.querySelector(".hide__button").classList.remove("bt__op"); 
                    e.target.querySelector(".hide__button").classList.add("hide__hides");
            } , 700);
                let dec = e.target.querySelector("p");
                dec.style.textalign = "left";
                dec.style.color = "#FFEE90";
                e.target.querySelector(".hide_hide").style.display = "none";
                
                

            }   
        });
        prop.addEventListener("mouseleave" , (e) => {
            if(e.target.classList.contains("about__column") ) {
                let hv = e.target.querySelector(".about__hv");
                
                e.target.querySelector("p").style.color = "#FFFFFF";
               // hv.classList.remove("hide__hides");
                //setTimeout(() => hv.classList.add("about__column__hide") , 0);
                setTimeout(() => { 
                    hv.classList.add("about__column__hide");
                    e.target.querySelector(".hide__button").classList.remove("bt__op");
                    e.target.querySelector(".hide__button").style.display = "none"; 
                } , 610);
                
                setTimeout(() => { 
                    hv.classList.add("hide__hides");
                    e.target.querySelector(".hide__button").classList.remove("bt__op"); 
                    e.target.querySelector(".hide__button").classList.add("hide__hides");
            } , 710);
                e.target.querySelector(".hide_hide").style.display = "block";
                e.target.querySelector(".hide__button").style.display = "none"; 
            }  
        })
    }
    
    for(let prop of btn) {
        prop.addEventListener("click" , menus);
    }

    