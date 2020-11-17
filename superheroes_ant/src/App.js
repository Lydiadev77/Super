import React from 'react';
import Headerr from "./component/header";
import Main from "./component/main";
import {BrowserRouter , Switch,Route } from 'react-router-dom';



const App = () =>{
    return(
        <BrowserRouter>
        <div>
        <Headerr />
        <Switch>
            <Route exact path="/" component={Main}/>
         </Switch>
     
      </div> 
      </BrowserRouter>
    );
    
}
export default App;