    
    let session = JSON.parse(localStorage.getItem('session'));

    
    function principal(){
        if(session == null){
            return window.open("./login.html","_self");
        }
        document.getElementById("p_user").innerHTML="Bienvenido "+ session.nombre;
        document.getElementById("p_money").innerHTML=" $ "+ session.saldo;
    }

    function depositar(){
            const cantidad = document.getElementById("cantidad_ingreso");
            if(cantidad.value == '' ){
               return alert("Error!","Ingrese una cantidad","error");
            }
            const total = session.saldo + parseInt(cantidad.value);
            if(total > 990){
                alert("Error!","Maximo de Cantidad Alcanzado","error");
                cantidad.value='';
            }else{
                alert("Aprobado!","Deposito Autorizado","success");
                cantidad.value='';
                session.saldo= total;
                localStorage.setItem('session',JSON.stringify(session));
                $('#ingresar').modal('hide');
            }
            principal();
    }

    function retirar(){
            const cantidad = document.getElementById("cantidad_retiro");
            const total = session.saldo - parseInt(cantidad.value);
            if(cantidad.value == '' ){
                return alert("Error!","Ingrese una cantidad","error");
            }
            if(total < 10){
                alert("Error!","Minimo de Cantidad Alcanzado","error");
                cantidad.value='';
            }else{
                alert("Aprobado!","Retiro Correcto","success")
                cantidad.value='';
                session.saldo= total;
                localStorage.setItem('session',JSON.stringify(session));
                $('#retirar').modal('hide');
            }
            principal();
    }

    function salir(){
            session = {};
            localStorage.clear();
            return window.open("./login.html","_self");
    }
