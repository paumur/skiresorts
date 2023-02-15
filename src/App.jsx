import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home/Home';
import Resorts from '../pages/Resorts/Resorts';
import Results from '../pages/Results/Results';
import SingleResort from '../pages/SingleResort/SingleResort';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { Provider } from 'react-redux';
import store from './state/index';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ski-resorts/:pageNumber' element={<Resorts />} />
          <Route path='/results/:queryKey/:pageNumber' element={<Results />} />
          <Route path='/resort/:id' element={<SingleResort />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
