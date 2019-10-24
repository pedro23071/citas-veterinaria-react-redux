import React from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';

//redux
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={ store }>
      <div className="container">
        <Header/>
        <div className="row mt-5">
          <div className="col-6">
            <AgregarCita />
          </div>
          <div className="col-6">
            <ListadoCitas/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
