import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FolderManager from './component/FolderManager';
import StoreContextWrapper from './store/StoreContext';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {

  return (
    <Provider store={store}>
      <StoreContextWrapper>
        <Router>
          <Routes>
            <Route path='/folder' element={<FolderManager />}></Route>
          </Routes>
        </Router>
      </StoreContextWrapper>
    </Provider>
  );
}

export default App;
