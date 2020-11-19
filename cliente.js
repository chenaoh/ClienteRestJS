function obtenerPersona() {
    var documento = document.getElementById("documento");
    var url='http://localhost:8080/clinicasoft/servicio/personas/' + documento.value;
    fetch(url)
    .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
    } ).then((respuesta) => {
        console.log(respuesta);
        document.getElementById('nombre').value = respuesta.nombre;
        document.getElementById('tipo').value = respuesta.tipo;
        document.getElementById('profesion').value = respuesta.profesion;
        document.getElementById('telefono').value = respuesta.telefono;
        document.getElementById('nacimiento').value = respuesta.nacimiento.fechaNacimiento;
        document.getElementById('ciudad').value = respuesta.nacimiento.ciudadNacimiento;
        document.getElementById('departamento').value = respuesta.nacimiento.departamentoNacimiento;
        document.getElementById('pais').value = respuesta.nacimiento.paisNacimiento;
    })
}   

function registrarPersona() {
    var url='http://localhost:8080/clinicasoft/servicio/personas/add';
    fetch(url, {
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            idPersona: documento.value,
            nacimiento: {
                ciudadNacimiento: ciudad.value,
                departamentoNacimiento: departamento.value,
                fechaNacimiento: nacimiento.value,
                idNacimiento: null,
                paisNacimiento: pais.value
            },
            nombre: nombre.value,
            profesion: profesion.value,
            telefono: telefono.value,
            tipo: tipo.value
        })
     })    
     .then(response => response)
     .then(json => console.log(json)) 
}  

function actualizarPersona() {
    var documento = document.getElementById("documento");
    var url='http://localhost:8080/clinicasoft/servicio/personas/' + documento.value;

    fetch(url, {
        method: 'PUT',
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
          idPersona: documento.value,
            nacimiento: {
                ciudadNacimiento: ciudad.value,
                departamentoNacimiento: departamento.value,
                fechaNacimiento: nacimiento.value,
                paisNacimiento: pais.value
            },
            nombre: nombre.value,
            profesion: profesion.value,
            telefono: telefono.value,
            tipo: tipo.value
        })
     })    
     .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
    } ).then((respuesta) => {
        console.log(respuesta);
        document.getElementById('nombre').value = respuesta.nombre;
        document.getElementById('tipo').value = respuesta.tipo;
        document.getElementById('profesion').value = respuesta.profesion;
        document.getElementById('telefono').value = respuesta.telefono;
        document.getElementById('nacimiento').value = respuesta.nacimiento.fechaNacimiento;
        document.getElementById('ciudad').value = respuesta.nacimiento.ciudadNacimiento;
        document.getElementById('departamento').value = respuesta.nacimiento.departamentoNacimiento;
        document.getElementById('pais').value = respuesta.nacimiento.paisNacimiento;
    })
} 

function eliminarPersona() {
    var documento = document.getElementById("documento");
    var url='http://localhost:8080/clinicasoft/servicio/personas/' + documento.value;
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => response)
    .then((respuesta) => {
        console.log(respuesta);
        if(respuesta.status==200){
        document.getElementById("documento").value="";  
        document.getElementById('nombre').value = ""; 
        document.getElementById('tipo').value = "";
        document.getElementById('profesion').value = "";
        document.getElementById('telefono').value = "";
        document.getElementById('nacimiento').value = "";
        document.getElementById('ciudad').value = "";
        document.getElementById('departamento').value = "";
        document.getElementById('pais').value = "";
        }else{
            if(respuesta.status==204){
                alert("La persona no se puede eliminar, tiene mascotas o productos asociados");
            }else{
                if(respuesta.status==404){
                    alert("La persona no existe!");
                }else{
                    alert("Ocurrió un Error!");
                }   
            }    
        }
    })
}   


    
