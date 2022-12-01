/* CUSTOM CURSOR */
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
        + "px; top: " + e.clientY + "px;";

});


/* SHOW SIDEBAR RESPONSIVE */

const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')  

      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              const target = document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents => {
                  tabContents.classList.remove('skills__active')
              })

              target.classList.add('skills__active')


              tabs.forEach(tab => {
                  tab.classList.remove('skills__active')
              })

              tab.classList.add('skills__active')
          })
      })



/*  POPUP PROJECT  */

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})

function toggleProjectPopup() {
    document.querySelector(".project__popup").classList.toggle("open");
}

document.querySelector(".project__popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(projectItem) {
    document.querySelector(".pp__thumbnail img").src = projectItem.querySelector(".work__img").src;
    document.querySelector(".details__title").innerHTML = projectItem.querySelector(".work__title").innerHTML;
    document.querySelector(".project__popup-body").innerHTML = projectItem.querySelector(".project__item-details").innerHTML;
}

/*  CONTACT  TEXTAREA  */

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*  FORM SUBMIT  */

function formSubmit() {
    document.forms["yourName"].submit();
}


/*  SCROLL SECTION ACTIVE LINK */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}













/*  COLOUR CHANGING  */

$(document).ready(function(){

    var color = $('color');

    // colours you wanted to give 

    var color  = [
        'rgb(6, 201, 6)',
        'blue',
        'red',
        'purple'
    ];

    var i = 2;

    // make a function

    function changeColor(){
        color.css('color',color[i]);
    }

    //call function

    changeColor();

    setInterval(changeColor,1000);


})