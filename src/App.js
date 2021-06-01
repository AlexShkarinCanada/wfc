import React, {Component}  from 'react';
import { BrowserRouter as Router, Route, Switch , NavLink} from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage'
import Test_1 from './Components/Test_1/Test_1'
import Test_2 from './Components/Test_2/Test_2'
import Test_3 from './Components/Test_3/Test_3'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

 class App extends Component {
  state = {
    name: ''
  }
  

render () {

return (

  <Router basename={'/'}>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link " href="/test1" >Test 1</a>
      <a class="nav-item nav-link" href="/test2">Test 2</a>
      <a class="nav-item nav-link" href="/test3">Test 3</a>
    </div>
  </div>
</nav>   

      <Switch>
          <Route          
              exact path={`${process.env.PUBLIC_URL}/`}
              component={WelcomePage}       
          />
          <Route          
              path={`${process.env.PUBLIC_URL}/test1`}
              component={Test_1}
          />
          <Route
              path={`${process.env.PUBLIC_URL}/test2`}
              component={Test_2}
          />
          <Route
              path={`${process.env.PUBLIC_URL}/test3`}
              component={Test_3}
          />

      </Switch>

      <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '} Your Website
            <Link color="inherit" href="https://wfc.tv/en">
            Test for World Fashion Channel
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>

  </Router>
);
}
}

export default App;
