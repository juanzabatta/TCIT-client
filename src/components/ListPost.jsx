import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction, deletePostAction } from '../redux/postDucks'
import './ListPost.css';

let unique = true;

const ListPost =()=>{

  const dispatch = useDispatch();
  
  if (unique ) {
    dispatch( getPostAction() );
    unique = false;
  };

  let filter = useSelector( store => store.posts.filter );
  let posts=[];
  const postsWithoutFilter = useSelector( store => store.posts.array );

  if ( filter !== "" && postsWithoutFilter.length > 0) {
    postsWithoutFilter.forEach(post => {
      if (post.name.toLowerCase() === filter.toLowerCase()) {
          posts.push(post);
      };
    });

  } else{
      posts = postsWithoutFilter; 
  };
  
  return (
    <section className="listPost">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>               
                  {
                    posts.length === 0 ? 
                    <tr><td colSpan="3" className="notResults">Not Results.</td></tr>:

                        posts.map((post) =>(
                          <tr key={post.id}>
                            <td>{ post.name }</td>
                            <td>{ post.description }</td>
                            <td><button onClick={ () => dispatch( deletePostAction(post.id) ) }>Eliminar</button></td>
                          </tr>
                        ))
                   
                  }
            </tbody>
                         
          </table>
                   
        </section>
  );
};

export default ListPost;