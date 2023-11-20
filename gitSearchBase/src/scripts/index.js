// import {getUserFromLocalStorage} from "./profile"

export const baseUrl= "https://api.github.com/users/"

const fetchUserData = async(username)=>{
    const result = await fetch(`${baseUrl}${username}`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
        },
    }).then(result=> 
       result.json()
    )

     return result 
}
const inputCapiture =  ()=>{ 
    const button = document.querySelector(".index__button")
    button.addEventListener("click", async ()=>{
        const input =  document.querySelector(".index__input");
        const inputValue = input.value
        const result = await fetchUserData(inputValue);
        // console.log(result);
        if(result.type === "User"){
            localStorage.setItem("githubUserInfo", JSON.stringify(result) )
            location.replace("./src/pages/profile.html")
        } else{
            location.replace("./src/pages/error.html")
        }
    })
}

inputCapiture()
