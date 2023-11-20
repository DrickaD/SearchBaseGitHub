
// import { baseUrl } from "./index";

export const getUserFromLocalStorage = async()=>{
    const user = await JSON.parse(localStorage.getItem("githubUserInfo"))
   renderUserInfo(user)
}


const renderUserInfo= (user) =>{
    const imagem = document.querySelector(".profile__image");
    const log = document.querySelector(".profile__username");

    imagem.src = user.avatar_url;
    imagem.alt = "Usuário"
    log.innerHTML = user.login

    const button = document.querySelector(".profile__change-user--button")
    button.addEventListener("click", ()=>{
        location.replace("../../");
        })
}

const renderUserRepos = async() =>{
    const usuario = await JSON.parse(localStorage.getItem("githubUserInfo"))
    const username = usuario.login

    const repositorios = await fetch(`https://api.github.com/users/${username}/repos`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    }) .then(result=> 
        result.json()
        )
        
        
        const ul = document.querySelector(".profile__ul");
        ul.innerHTML = "";
     repositorios.forEach(element => {

        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const paragraph = document.createElement("p");
        const link = document.createElement("a");

        h4.innerHTML = element.name;
        paragraph.innerHTML = element.descripion!= null ? element.description : "Repositório sem descrição";
        link.innerHTML = "Repositório";
        link.href = element.html_url
        link.target = "_blank"
        li.append(h4, paragraph,link);
        ul.appendChild(li);

        return ul;
    });

 }

getUserFromLocalStorage();
renderUserRepos()