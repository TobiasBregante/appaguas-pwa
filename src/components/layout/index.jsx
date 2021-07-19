import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import Header from './_header'
//import Footer from './_footer'
import Home from "../../modules/home"
import Signin from "../../modules/signin"
import Dashboard from "../../modules/dashboard"

const Layout = () => {
    return(
        <>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path='/signin'>
                    <Signin/>
                </Route>
                <Route path='/dashboard'>
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Layout