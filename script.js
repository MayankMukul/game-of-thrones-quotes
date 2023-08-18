let qot = document.querySelector("#qot");
let name1 = document.querySelector(".name");

let url = "https://api.gameofthronesquotes.xyz/v1/random";



function getQuote() {
    
     let p = new Promise((response,reject)=>{
          response(fetch(url));
     })
     p.then((value)=>{
          return value.json();
     }).then((value)=>{
          qot.innerHTML = `"${value.sentence}"`;
          name1.innerHTML = `${value.character.name} in <cite title="Source Title">Game of Thrones</cite>`;
         
     })
    
}

getQuote();