// const scores = document.getElementById("bat");
document.getElementById("newForm").addEventListener("submit", clickeButton);

function clickeButton(e){
    
    e.preventDefault();

    let inp = document.getElementById("newUser").value;
    const key = "MDQ6VXNlcjc0NzI3MzMw";

      


    const getApi = async (id) => {
    
    
        const base = 'https://api.github.com/users/';
        const query = `${id}?apikey${key}`;
    
        const response = await fetch(base + query);
        const data = await response.json();
        console.log(data);
        return data;

        
    };
    
    getApi(inp).then(data => {
        if (data.message === "Not Found"){
        
            document.getElementById("task").innerHTML = `<h3>User not found</h3>` ;

           
}else{

   
    const datam = `<ul><li><img src="${data.avatar_url}" style="width:50%"></li><li>Name: ${data.name}</li><li>Username: ${data.login}</li><li>Followers: ${data.followers}</li><li>Following: ${data.following}</li><li>Public Repo:${data.public_repos} </li></ul>`;
       document.getElementById("task").innerHTML = datam ;
        
        let foloA = data.followers * 1,
            foloB = data.following * 1,
            repo = data.public_repos * 0.5;
        let bate = `<ul><li>${foloA + foloB + repo}</li></ul>`;
            document.getElementById("scorez").innerHTML = bate;

            let bates = `${foloA + foloB + repo}`;
            
        
            setTimeout(function(){
                window.location.href = "playertwo.html";
             }, 1000);
       
       
            
            window.localStorage.setItem('player1',
            JSON.stringify(datam)
)  

window.localStorage.setItem('clot1',
JSON.stringify(Number(bates))
)  


}   

    })
     
    
 
  
    
}
//    done