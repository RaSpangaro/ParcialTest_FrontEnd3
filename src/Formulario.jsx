import { useState } from "react";
import Card from './Card';
import style from './style.module.css'


function Formulario(){
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [libroFavorito, setLibroFavorito]  = useState('');
    const [mensaje, setMensaje] = useState(false);

    const onChangeNombre = (event) =>{
        setNombre(event.target.value)
    }

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangeLibroFavorito = (event) =>{
        setLibroFavorito(event.target.value)
    };


    const onSubmitForm  = (event) =>{

    event.preventDefault();    
    const nombreValido = nombre.trim();
    const emailValido = email.contain('@');
    const libroFavoritoValido = libroFavorito.trim();

        if(nombreValido.length > 3 && libroFavoritoValido > 6 && emailValido){
            setMensaje(true);
        }else{
            setMensaje(false);
            alert('Por favor, verifique los datos ingresados')
        }
    }


return(
    <>
    <h1>Registro de Lectores</h1>
    <form className = {style.form} onSubmit={onSubmitForm}>
            <input className="style.input"
                type='text'
                placeholder='Ingrese su nombre'
                onChange={onChangeNombre}
                value={nombre}/>

            <input className="style.input"
                type='text'
                placeholder='Ingrese su email'
                onChange={onChangeEmail}
                value={email}/>

            <input className="style.input"
                type='text'
                placeholder='Ingrese su libro favorito'
                onChange={onChangeLibroFavorito}
                value={libroFavorito}/>
                
                <button>Registrar</button>
    </form>

    {mensaje ? <Card lector ={nombre} libro={libroFavorito}/> : null}
    </>
)
}

export default Formulario;