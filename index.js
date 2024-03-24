const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const accordionHandler = accordion.querySelector(".accordion-header");
  const nestedAccordions = document.querySelectorAll(".accordion .nested-accordion");
  accordionHandler.addEventListener("click", () => {
    if(accordion.classList.contains("active")) {
      accordion.classList.remove("active");
    }
    else {
      toggleHandlers(accordions);
      toggleHandlers(nestedAccordions);
      accordion.classList.toggle("active");
    }
  })
  nestedAccordions.forEach((nestedAccordion) => {
    const nestedAccordionHandler = nestedAccordion.querySelector(".accordion-header");
    nestedAccordionHandler.addEventListener("click", () => {
      toggleHandlers(nestedAccordions);
      nestedAccordion.classList.toggle("active");
    })
  })
})

function toggleHandlers(accordions) {
  accordions.forEach((accordion) => {
    accordion.classList.remove("active");
  })
}