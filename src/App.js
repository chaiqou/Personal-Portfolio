import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import SmoothScrollbar from './components/SmoothScrollbar'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'




const App = () => {
  return (
    <>
  <Router>
    <NavBar />
    <SmoothScrollbar>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
  </Switch>
  <Footer />
  </SmoothScrollbar>
  </Router>
    </>
  )
}

export default App
