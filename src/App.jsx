import React from 'react';
import SearchPost from './components/SearchPost.jsx';
import ListPost from './components/ListPost.jsx';
import FormPost from './components/FormPost.jsx';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

function App(){
  const store = generateStore();

    return (
      <Provider store ={ store }>
        <SearchPost />
        <ListPost /> 
        <FormPost />       
      </Provider>
    );
};

export default App;
      