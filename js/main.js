class Usuarios{
    constructor (nombre,apellido,edad,dni,usuario,contrasena){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.dni=dni;
        this.usuario=usuario;
        this.contrasena=contrasena;
    }

}

class Servicios{
    constructor (fabricante,servicio,precio,qMotoresDisponibles){
        this.fabricante=fabricante
        this.servicio=servicio;
        this.precio=precio;
        this.qMotoresDisponibles=qMotoresDisponibles;
    }
}

let users=[];
let services=[];
let opcion="";
let turns=0;
let usuarioIngreso="";
let verifUsuario=undefined;
let verifContrasena=""

users.push(new Usuarios("1", "1", 1, 1, "1", "1234"));
users.push(new Usuarios("Franco", "Hernadez", 22, 45772311, "FranHer", "12345"));


alert("Bievenido a Pure Race");

do{

        opcion=prompt("Ingrese Opción para su Login:\n1 Usuario Existente\n2 Nuevo Usuario");
    
        switch(opcion){

            case "1":
                usuarioIngreso=prompt("Ingrese Su Usuario: ");
                console.log(usuarioIngreso);
                usuarioContrasena=prompt("Ingrese Su Contraseña: ");
                console.log(usuarioContrasena);
                verifUsuario=users.find((elemento)=>(elemento.usuario===usuarioIngreso && elemento.contrasena===usuarioContrasena))
                console.log(verifUsuario);
                if(verifUsuario===undefined){
                    alert("Credenciales Invalidas");
                    verifOpcion=false;
                    break;
                }else{
                    break;
                }
  
            case "2":
                alert("Complete los siguientes datos para crear su cuenta:");
                nuevoUsuario = new Usuarios(prompt("Ingrese Nombre: "),prompt("Ingrese Apellido: "), parseInt(prompt("Ingrese Edad: ")),prompt("Ingrese DNI: "),prompt("Ingrese Usuario: "),prompt("Ingrese Contraseña: "));
                users.push(nuevoUsuario);
                console.log(nuevoUsuario);
                console.log(users);
                verifOpcion=false;
                break;

            default:
                alert("Opcion Incorrecta");

        }
    

    }while(verifUsuario===undefined)


services.push(new Servicios("Pagani", "Competición", 400, 0));
services.push(new Servicios("Pagani", "Deportivos", 200, 4));
services.push(new Servicios("Pagani", "Picadas", 200, 1));
services.push(new Servicios("Mercedes Benz", "Competición", 700, 0));
services.push(new Servicios("Mercedes Benz", "Deportivos", 900, 0));
services.push(new Servicios("Mercedes Benz", "Picadas", 1000, 0));
services.push(new Servicios("Ferrari", "Competición", 880, 0));
services.push(new Servicios("Ferrari", "Deportivos", 550, 1));
services.push(new Servicios("Ferrari", "Picadas", 610, 0));

    

let verifServicio="";
let verifPrestador="";
let verifStock="";
let servicio=""

opcion=""; 
    do{
        opcion=prompt("Ingrese Opción:\n1 Tipos de Motores\n2 Buscar por fabricante\n3 Motores en Stock\n4 Salir de la pagina");
        
        switch (opcion){
        case "1":
            do{
            servicio=prompt("Motores a disposición:\n- Competición\n- Deportivos\n- Picadas\n\nIngrese el tipo de motor: ");
            servicio=formatoPalabra(servicio);
        
            }while(servicio!="Competición" && servicio!="Deportivos" && servicio!="Picadas")
              
            verifServicio=services.filter((elemento)=>(elemento.servicio.includes(servicio)))
            console.log(verifServicio);
            
            const mensajesCon = verifServicio.map(concatenarInformacion);
            alert(mensajesCon);
            break;
        
        case "2":
            do{
                prestador=prompt("Prestadores Disponibles:\n- Pagani\n- Mercedes Benz\n- Ferrari\n\nIntroduzca el fabricante: ");
                prestador=formatoPalabra(prestador);
            }while(prestador!="Pagani" && prestador!="Mercedes Benz" && prestador!="Ferrari")
            
            verifPrestador=services.filter((elemento)=>(elemento.fabricante.includes(prestador)))
            console.log(verifPrestador);
    
            const mensajesCon2 = verifPrestador.map(concatenarInformacion);
            alert(mensajesCon2);
            break;
        
        case "3":
            do{
                servicio=prompt("Motores a disposición:\n- Competición\n- Deportivos\n- Picadas\n\nIngrese el tipo de motor: ");
                servicio=formatoPalabra(servicio);

                }while(servicio!="Competición" && servicio!="Deportivos" && servicio!="Picadas")
            
            do{
                prestador=prompt("Prestadores Disponibles:\n- Pagani\n- Mercedes Benz\n- Ferrari\n\nIntroduzca el fabricante: ");
                prestador=formatoPalabra(prestador);
            }while(prestador!="Pagani" && prestador!="Mercedes Benz" && prestador!="Ferrari")    
            
            prestador=prompt("Prestadores Disponibles:\nPagani\nMercedes Benz\nPagani\nIntroduzca el fabricante: ");
            verifStock=services.filter((elemento)=>(elemento.servicio.includes(servicio)) && (elemento.fabricante.includes(prestador)))

            const mensajesCon3 = verifStock.map(concatenarInformacionStock);
            alert(mensajesCon3);
            break;
        
        case "4":
            break;

            default:
            alert("Opción Incorrecta")
        }
}while(opcion!="4")

alert("Gracias por confiar en nosotros y comprar en nuestra pagina.")

function formatoPalabra(texto){
     texto=texto.toLowerCase();
     primeraLetra=texto[0].toUpperCase();
     restoPalabra=texto.slice(1);
     palabraFinal=primeraLetra+restoPalabra;

    return palabraFinal
}

function concatenarInformacion(elemento) {
    if(elemento.qMotoresDisponibles>0){
        textStock="Hay Unidades Disponibles"
    }else{
        textStock="No poseemos Unidades Disponibles"
    }
    
    return "El motor " + elemento.servicio + " que provee " + elemento.fabricante + "\nTiene un valor de $" + elemento.precio + "\n" + textStock +"\n\n";
}

function concatenarInformacionStock(elemento) {
    return "El motor " + elemento.servicio + " que provee " + elemento.fabricante + "\nTiene " + elemento.qMotoresDisponibles + " Motores disponibles\n\n";
}

