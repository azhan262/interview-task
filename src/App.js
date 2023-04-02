import './styles.css';
import React, {useState} from 'react'
import Card from './components/Card'

function App() {
  return (
      <div className="container-custom">
        <div className = 'row justify-content-md-center m-0'>
          <div className = 'col-xl-3 col-md-6 col-12 my-5 my-xl-0 justify-content-sm-center'>
            <Card 
              productName = 'Product 1'
            />
          </div>
          <div className = ' col-xl-3 col-md-6 col-12 my-5 my-xl-0'>
            <Card
              productName = 'Product 2'
            />
          </div>
          <div className = ' col-xl-3 col-md-6 col-12 my-5 my-xl-0'>
            <Card 
             productName = 'Product 3'
            />
          </div>
          <div className = ' col-xl-3 col-md-6 col-12 my-5 my-xl-0'>
            <Card
             productName = 'Product 4'
            />
          </div>
        </div>
        
      </div>
  );
}

export default App;
