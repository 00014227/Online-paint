import React from 'react';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/ToolBox';
import './styles/app.scss'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (

    <div className="App">
   

      <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path='/:id'>
                        <Toolbar/>
                        <SettingBar/>
                        <Canvas/>
                    </Route>
                    <Redirect to={`f${(+new Date).toString(16)}`}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>


  );
}

export default App;
