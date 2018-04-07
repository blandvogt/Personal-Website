//Required Packages
const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const History = require('history')
require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')

const {withRouter} = require('react-router')
let {Router, Route, link} = ReactRouter
let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})

//Routing Pages
const Content = require('./content.jsx')
const Home = require('./home.jsx')
const About = require('./about.jsx')
const Experience = require('./experience.jsx')

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Content}>
      <Route path="/" component={withRouter(Home)}></Route>
      <Route path="/about" component={withRouter(About)}></Route>
      <Route path="/experience" component={withRouter(Experience)}></Route>
    </Route>
  </Router>
), document.getElementById('content'))
