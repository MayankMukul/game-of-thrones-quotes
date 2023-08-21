let qot = document.querySelector("#qot");
let name1 = document.querySelector(".name");
let morequotesbox = document.querySelector(".more-quote");
let errormsg = document.querySelector(".errormsg");
let select = document.querySelector("select");
let btn = document.querySelector("#btn-option")


let url = "https://api.gameofthronesquotes.xyz/v1/house/"

function newurl(value){
     return(`${url}${value}`);
}

function display() {
     errormsg.style.display="none";
     if(select.value!='Choose option'){
          morequotesbox.style.display="block";
          return true;
     } else {
          errormsg.style.display="block";
         errormsg.innerHTML=`<span style="color:red">*Please select a option first.</span>`;
         morequotesbox.style.display="none";
         return false;
     }
     
}

function morequotes(){
     if(display()){
    let more = fetch(newurl(select.value));
    more.then((value)=>{
         return value.json();
    }).catch(()=>{
          errormsg.style.display="block";
         errormsg.innerHTML=`<span style="color:red">*SERVER DID NOT RESPOND</span>`;
    }).then((value)=>{
        // console.log('data',value);
         let ihtml = " ";
         for(let i in value[0].members){
            // console.log(value[0].members);
              ihtml += `<p >${value[0].members[i].name}</p>`
              
         }
         
         morequotesbox.innerHTML=
         `
              <div class="card-body my-2">
                    <blockquote class="blockquote mb-0 text-center">
                    <table class="table caption-top">
                    <caption>${(value[0].slug).charAt(0).toUpperCase() + (value[0].slug).slice(1)}'s</caption>
                    <tbody>
                      
                      <tr>
                        
                        <td>House Name</td>
                        <td>${value[0].name}</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Members</td>
                        <td>${ihtml}</td>
                        
                      </tr>
                    </tbody>
                  </table>
                    </blockquote>
              </div> 
          `;
         
    }).catch(()=>{
         qot.innerHTML=`<span style="color:red">Quote not found</span>`
    })
    } 
}


btn.addEventListener("click",morequotes)