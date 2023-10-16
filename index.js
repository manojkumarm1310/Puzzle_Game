
function show(){
    document.getElementById("display").style.visibility="visible";
    document.getElementById("start").style.display="none";
}
function getId(getval){
    var id = parseInt(getval)
    if(id+1>=1 && id+1<=16 && document.getElementById(id+1).innerHTML==' '){
        var swap1 = document.getElementById(id+1)
        var swap2 = document.getElementById(id)
        swap(swap1,swap2);
    }
    if(id-1>=1 && id-1<=16 && document.getElementById(id-1).innerHTML==' '){
        var swap1 = document.getElementById(id-1)
        var swap2 = document.getElementById(id)
        swap(swap1,swap2);
    }
    if(id+4>=1 && id+4<=16 && document.getElementById(id+4).innerHTML==' '){
        var swap1 = document.getElementById(id+4)
        var swap2 = document.getElementById(id)
        swap(swap1,swap2);
    }
    if(id-4>=1 && id-4<=16 && document.getElementById(id-4).innerHTML==' '){
        var swap1 = document.getElementById(id-4)
        var swap2 = document.getElementById(id)
        swap(swap1,swap2);
    }
}
function swap(swap1,swap2){
    var temp = swap1.innerHTML;
    swap1.innerHTML = swap2.innerHTML;
    swap2.innerHTML = temp;

}