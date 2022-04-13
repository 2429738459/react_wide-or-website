import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from './login/app'
import Login from './login/login'
import Home from './login/home'
import signIn from './login/signIn'
import Detail from './login/detail'
export default function IRouter(){
   return <Router>
       <Switch>
       <Route exact path="/" component={App}></Route>
       <Route path="/login" component={Login}></Route>
       <Route path="/home" component={Home}></Route>
       <Route path="/signIn" component={signIn}></Route>
       <Route path="/detail/:id" component={Detail}></Route>
       </Switch>
   </Router>
}