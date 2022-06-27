// const scores = document.getElementById("ini");
document.getElementById("newForm1").addEventListener("submit", clickButton);

function clickButton(e){
    
    e.preventDefault();

    let inpu = document.getElementById("newUser2").value;
    const key = "MDQ6VXNlcjc0NzI3MzMw";

      


    const getApi = async (id) => {
    
    
        const base = 'https://api.github.com/users/';
        const query = `${id}?apikey${key}`;
    
        const response = await fetch(base + query);
        const data = await response.json();
        
        return data;

        
    };
    getApi(inpu).then(data => {

        if (data.message === "Not Found"){
        
            document.getElementById("tas").innerHTML = `<h3>User not found</h3>` ;

           
}else{
    
        const datame = `<ul><li><img src="${data.avatar_url}" style="width:50%"></li><li>Name: ${data.name}</li><li>Username: ${data.login}</li><li>Followers: ${data.followers}</li><li>Following: ${data.following}</li><li>Public Repo:${data.public_repos} </li></ul>`;
       document.getElementById("tas").innerHTML = datame;
        
        let foloA = data.followers * 1,
            foloB = data.following * 1,
            repo = data.public_repos * 0.5;

            let init = `<ul><li>${foloA + foloB + repo}</li></ul>`;
            document.getElementById("scorezd").innerHTML = init;

            let inits = `${foloA + foloB + repo}`;

           
            setTimeout(function(){
                window.location.href = "faceoff.html";
             }, 1000);      
           

             
     
    window.localStorage.setItem('player2',
             JSON.stringify(datame)
 )     
 
 window.localStorage.setItem('clot2',
 JSON.stringify(Number(inits))
)        
            }
    })

}
// done