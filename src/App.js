/*应用根组件*/
import React,{Component} from 'react'
import {Button,message} from 'antd'
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom"
import Login from "./pages/login/login.jsx"
import Admin from "./pages/admin/admin.jsx"
 class App extends Component{
  handleClick=()=>{
    message.success('成功啦。。。');
  }
  render(){
   
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />

        </Switch>


      </HashRouter>
      
        
    )

  }

}




export default App
