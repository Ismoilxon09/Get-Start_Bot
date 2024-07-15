function tekshir(){
    fetch('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port')
    .then(response => response.json())
    .then(json => {
    var inp1 = document.getElementById('inp1');
    var inp2 = document.getElementById('inp2');
    var error = document.getElementById('error');

    console.log(json.features[0].properties.city);
    console.log(json.features[0].properties.type);
   
    if(inp1.value == json.features[0].properties.city && inp2.value == json.features[0].properties.type){
        window.open('profile.html', '_self');
    }
    else{
        error.innerText = "Login yoki parol hato!";
        error.style.fontSize = "14pt"
        error.style.color = "red";
    }
     
});
}