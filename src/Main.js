import React, { Component } from "react"
import {Route, NavLink, HashRouter} from "react-router-dom"
import Home from "./Home.js"
import Stuff from "./Stuff.js"
import Contact from "./Contact.js"
import { format } from "path"
import Language from "./Language.js"


class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/stuff" activeClassName="active">Stuff</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active"> Contact</NavLink></li>
                    <li><NavLink to="/Language" activeClassName="active">Language</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Language" component={Language}/>


                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;