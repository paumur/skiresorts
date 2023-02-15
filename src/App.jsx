import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home';
import Resorts from '../src/pages/Resorts/Resorts';
import Results from '../src/pages/Results/Results';
import SingleResort from '../src/pages/SingleResort/SingleResort';
import PageNotFound from '../src/pages/PageNotFound/PageNotFound';
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
