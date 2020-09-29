import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostAction } from '../redux/postDucks'
import './FormPost.css';

const FormPost =()=>{
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    name:'',
    description:''
  });

  const handleInputChange =(event)=>{
    setDatos({
      ...datos,
      [event.target.name]:event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (datos.name.length > 0 && datos.description.length > 0) {
      dispatch( addPostAction(datos) );
        document.getElementById("fromAddPost").reset();
    }else{
      alert('Por favor completa los campos.')
    };
 
  };

  return (
    <Fragment>
      <section className="FormPost">
        <form id="fromAddPost" onSubmit={handleSubmit} >
          <input 
            type="text" 
            name="name"
            onChange={handleInputChange} 
            placeholder="Nombre" 
            />

          <input 
            type="text" 
            name="description"
            onChange={handleInputChange}  
            placeholder="Descripción" 
            />

          <input type="submit" value="Agregar"/>
        </form>                   
      </section>
    </Fragment>
    
  );
};

export default FormPost;