
import React from 'react';
import {Route, BrowserRouter,Redirect,Switch} from 'react-router-dom';
import Header from './Components/Header';
import MainImage from './Components/MainImage';

function App() {
  return (
    <div className="container">
     <BrowserRouter>
        <Route
        exact={true}
        path="/"
        render={()=>(
          <div>
            <Header></Header>
            <MainImage></MainImage>
            
             
          </div>
        )}/>
       
          
      
          
         
          <Redirect to="/"></Redirect>
    </BrowserRouter>
    
    
     
   </div>
  );
}

export default App;
