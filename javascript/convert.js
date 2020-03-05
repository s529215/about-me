function convert(){
    const miles = parseFloat(document.getElementById("miles").value);
    const feet = (miles * 5280);
    document.getElementById("feet").innerHTML = feet+'ft';
    return false;
}
