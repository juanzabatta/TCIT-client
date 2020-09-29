import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterPostAction } from '../redux/postDucks'
import './SearchPost.css';

const SearchPost =()=>{
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
    name:''
  });

  const handleInputChange =(event)=>{
    setDatos({
      ...datos,
      [event.target.name]:event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch( setFilterPostAction(datos.name) );
  };

  return (
    <Fragment>
      <section className="searchPost">
        <form id="formSearchPost" onSubmit={handleSubmit} >
          <input 
            type="search" 
            name="name"
            onChange={handleInputChange} 
            placeholder="Filtro de nombre" 
            />

          <input type="submit" value="Buscar"/>
        </form>                   
      </section>
    </Fragment>
    
  );
};

export default SearchPost;