let qot = document.querySelector("#qot");
let name1 = document.querySelector(".name");
let morequote = document.querySelector(".more-quote");
morequotesbox = document.querySelector("#more-quotes-box")
let errormsg = document.querySelector(".errormsg");
let select = document.querySelector("select");
let btn = document.querySelector("#btn-option")


let url = "https://api.gameofthronesquotes.xyz/v1/author/"

function newurl(value){
     return(`${url}${value}/3`);
}

function display() {
     errormsg.style.display="none";
     if(select.value!='Choose Character...'){
          morequote.style.display="block";
          return true;
     } else {
          errormsg.style.display="block";
         errormsg.innerHTML=`<span style="color:red">*Please select a character first.</span>`;
         morequote.style.display="none";
         return false;
     }
     
}

function morequotes(){
     morequotesbox.style.display=("block");
     morequote.style.display=("block");
     if(display()){
    let more = fetch(newurl(select.value));
    more.then((value)=>{
         return value.json();
    }).catch(()=>{
          errormsg.style.display="block";
         errormsg.innerHTML=`<span style="color:red">*SERVER DID NOT RESPOND</span>`;
    }).then((value)=>{
         let ihtml = " ";
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
         
         morequote.innerHTML=ihtml;
         
    }).catch(()=>{
         qot.innerHTML=`<span style="color:red">Quote not found</span>`
    })
    } 
}


btn.addEventListener("click",morequotes)