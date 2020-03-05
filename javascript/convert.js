function convert(){
    const miles = parseFloat(document.getElementById("miles").value);
    const feet = (miles * 5280);
    document.getElementById("feet").innerHTML = feet+'ft';
    if(localStorage.counter){
        localStorage.counter = Number(localStorage.counter) + 1;
    }
    else {
        localStorage.counter = 1;
    }
    document.getElementById("num").innerHTML= localStorage.counter;
}
function empty(){
    window.localStorage.clear();
}
