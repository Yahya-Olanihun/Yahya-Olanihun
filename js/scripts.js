// const h1 = document.querySelector(".heading-primary")

// h1.textContent = "Olanihun Yahya";

// const h2 = document.querySelector(".heading-secondary")

// h2.textContent = "Olanihun Yahya";

////////////////////////////////////////////////////////
//Set current year
// const yearEl = document.querySelector(".btn-mobile-nav");
// const currentYear = newDate().getFullYear();
// yearNow.textContent = currentYear;

/////////////////////////////////////////////
/// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open')  
});


///////////////////////////////
//Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll

    if (href === "#") window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth"});
    }

    // Close the mobile navigation
    if(link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open")
  });
})

////////////////////////////
// Sticky nav bar



///////////////////////////////////////////////
// fixing flexbox gap property missing in some safari versions
function checkFlexGap() {
 var flex = document.createElement("div");
 flex.style.display = "flex" ;
 flex.style.flexDirection = "column" ;
 flex.style.rowGap = "1px" ;


 flex.appendChild(document.createElement("div"));
 flex.appendChild(document.createElement("div"));

 document.body.appendChild(flex);
 var isSupported = flex.scrollHeight === 1;
 flex.parentNode.removeChild(flex);
 console.log(isSupported)

 if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();