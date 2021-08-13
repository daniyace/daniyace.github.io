import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
