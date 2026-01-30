let demo2=0;
function contador(){
    document.getElementById("demo").innerHTML=demo2;


}

function incrementar(){
    demo2++;
    contador();
}

function decrementar(){
    demo2--;
    contador();
}