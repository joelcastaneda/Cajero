
let jsonData = fetch("/resources/db/datos.json").then(response => {return  response.json();}).then (response => jsonData = response);


function iniciar(){    
    const username = document.getElementById("user").value;
    const pin = document.getElementById("pin").value;
    const value = buscar(username,pin);
    if (value == true){
        return window.open("./main.html","_self");
    }else{
        alert("Error!","Error Usuario o Contraseña Incorrecto","error");
    }
}


function buscar(username,pin){
    const json = jsonData.accounts;
    localStorage.setItem("accounts",JSON.stringify(json));
    var boolean; 
    for(let i= 0; i < json.length;i++){
        if(username == json[i].nombre && pin == json[i].pin){
            localStorage.setItem("session",JSON.stringify(json[i]));
            boolean = true;
            return boolean;
        }else{
                boolean = "false";
            }    
    } return boolean;
}

/*Para redireccionar las vistas "como una sesion"*/
function session(){
    const value=localStorage.getItem('session');
        if(value != null){
        return window.open("./main.html","_self");
    }
}