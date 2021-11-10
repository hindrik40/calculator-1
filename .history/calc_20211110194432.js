let result=document.getElementById("inputext");
let calculate=(number)=> {
    result.value += number;
}

let Result = () => {
    try{
        result.value=eval(result.value)
    }
   catch(err){
       alert("Skriv in en riktig beräkning ");
   }
}

function clr(){
    result.value=""

}