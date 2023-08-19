let qot = document.querySelector("#qot");
let name1 = document.querySelector(".name");
let blockquote = document.querySelector("blockquote");
let morequotesbox = document.querySelector(".more-quote");
let errormsg = document.querySelector(".errormsg");
let select = qocument.querySelector("select");
let btn = document.querySelector("#btn-option")


let url = "https://api.gameofthronesquotes.xyz/v1/author/tyrion/3"

function morequotes(){

    let more = fetch(url);
    more.then((value)=>{
         return value.json();
    }).catch(()=>{
         errormsg.innerHTML=`<span style="color:red">SERVER DID NOT RESPOND</span>`;
    }).then((value)=>{
            console.log(value);
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
              console.log(value[i].sentence);
         }
         
         morequotesbox.innerHTML=ihtml;
         
    }).catch(()=>{
        // qot.innerHTML=`<span style="color:red">Quote not found</span>`
    })
}

btn.addEventListener=morequotes();