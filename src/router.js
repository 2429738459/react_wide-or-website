import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from './login/app'
import Login from './login/login'
import signIn from './login/signIn'
export default function IRouter(){
   return <Router>
       <Switch>
       <Route exact path="/" component={App}></Route>
       <Route path="/login" component={Login}></Route>
       <Route path="/signIn" component={signIn}></Route>
       </Switch>
   </Router>
}