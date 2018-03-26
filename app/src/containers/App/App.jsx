import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './../../components/Header/Header';
import CarsContainer from './../Cars/CarsContainer';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <CarsContainer />
    <ToastContainer />
  </div>
);

export default App;
