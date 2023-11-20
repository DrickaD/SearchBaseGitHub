export const redirectTohomePages = ()=>{
    const button = document.querySelector(".new-search__button")
    button.addEventListener("click", ()=>{
        location.replace("../../");
    })
}

redirectTohomePages()