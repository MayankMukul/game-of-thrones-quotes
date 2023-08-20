let qot = document.querySelector("#qot");
let name1 = document.querySelector(".name");
let blockquote = document.querySelector("blockquote");
let morequotesbox = document.querySelector(".more-quote");
let errormsg = document.querySelector(".errormsg")

let url = "https://api.gameofthronesquotes.xyz/v1/random";

function morequotes(){
     let more = fetch(url+"/5");
     more.then((value)=>{
          return value.json();
     }).catch(()=>{
          errormsg.style.display="block";
          errormsg.innerHTML=`<span style="color:red">SERVER DID NOT RESPOND</span>`;
     }).then((value)=>{
          //console.log(value);
          morequotesbox.style.display="block";
          let ihtml = " "
          for(let i in value){
               ihtml += `
               <div class="card-body my-5">
                     <blockquote class="blockquote mb-0 text-center">
                       <p id="qot">"${value[i].sentence}"</p>
                       <footer class="blockquote-footer text-end name">${value[i].character.name} in <cite title="Source Title">Game of Thrones</cite></footer>
                     </blockquote>
               </div>
               `;
          }
          
          morequotesbox.innerHTML=ihtml;
          
     }).catch(()=>{
         // qot.innerHTML=`<span style="color:red">Quote not found</span>`
     })
}

function getQuote() {
     let p = fetch(url);
     p.then((value)=>{
          return value.json();
     }).catch(()=>{
          blockquote.innerHTML=`SERVER DID NOT RESPONDE`
     }).then((value)=>{
          qot.innerHTML = `"${value.sentence}"`;
          name1.innerHTML = `${value.character.name} in <cite title="Source Title">Game of Thrones</cite>`;
     }).catch(()=>{
          qot.innerHTML=`<span style="color:red">Quote not found</span>`
     })

    morequotes();
}

getQuote();