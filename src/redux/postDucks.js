import axios from 'axios';
const urlAxios = 'http://localhost:3000/api/post/';

// constantes
const dataInitial = {
  array: [],
  filter:""
};

// types
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const SET_POST_SUCCESS = 'SET_POST_SUCCESS';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const SET_FILTER_SUCCESS = 'SET_FILTER_SUCCESS';

// reducer
export default function postReducer( state = dataInitial, action ){
  switch ( action.type ) {
    case GET_POST_SUCCESS:
      return { ...state, array: action.payload };

    case SET_POST_SUCCESS:
      return { ...state, array: state.array.concat( action.payload ) };

    case DELETE_POST_SUCCESS:
      const newStateDelete = state.array.filter( post => post.id !== action.payload.id);
      return { ...state, array: newStateDelete };

    case SET_FILTER_SUCCESS:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

// actions
// Obtener los Post
export const getPostAction = () => async ( dispatch, getState ) => {
  try {
    const res = await axios.get( urlAxios );

    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data.posts
    });
    
  } catch ( error ) {
    console.log( error );
  }
};

// Agregar un Post
export const addPostAction = (post) => async ( dispatch, getState ) => {
  try {
    const res = await axios.post( urlAxios, post );
console.log(res.data.post);
    dispatch({
      type: SET_POST_SUCCESS,
      payload: res.data.post
    });
    
  } catch ( error ) {
    console.log( error );
  }
};

// Borrar un Post
export const deletePostAction = (id) => async ( dispatch, getState ) => {  
  try {
    const res = await axios.delete( urlAxios + 'delete/'+ id );
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: res.data.post
    });
  } catch ( error ) {
    console.log( error );
  }
};

// Agregar filtro
export const setFilterPostAction = (filter) => async ( dispatch, getState ) => {
  try {

    dispatch({
      type: SET_FILTER_SUCCESS,
      payload: filter
    });
    
  } catch ( error ) {
    console.log( error );
  }
};