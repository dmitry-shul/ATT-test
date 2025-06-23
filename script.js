const main_input = document.querySelector(".form-select-chosen__input")
const search_block = document.querySelector(".form-select-chosen__search")
const output_wrap = document.querySelector(".form-select-chosen__output-wrap")
const submit_button = document.querySelector(".submit-button")
const option_items = document.querySelectorAll(".form-select-chosen__option")

main_input.addEventListener("click", () => {
  output_wrap.classList.toggle("form-select-chosen__output-wrap_active")
  search_block.classList.toggle("form-select-chosen__search_active")
})

option_items.forEach((item) => {
  item.addEventListener("click", () => {
    main_input.value = item.innerHTML
    output_wrap.classList.remove("form-select-chosen__output-wrap_active")
    search_block.classList.remove("form-select-chosen__search_active")
  })
})

submit_button.addEventListener("click", (e) => {
  if(main_input.value === "") {
    e.preventDefault();
    main_input.classList.add("error-class")
  }
})