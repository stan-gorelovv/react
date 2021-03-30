//import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
        return(
            <nav className="nav">
                <NavLink className="nav-link active" aria-current="page" to="/">Main</NavLink>
                <NavLink className="nav-link" to="/about">About us</NavLink>
                <NavLink className="nav-link" to="/contact-us">Contact us</NavLink>
            </nav>
        )
}

function ContactUs(){
    return (
        <div className="container my-5">
                <form action="">
                    <div className="mb-3"><input type ="text" className="form-control"/></div>
                    <div className="mb-3"><input type ="text" className="form-control"/></div>
                    <div className="mb-3"><textarea type ="text" className="form-control"/></div>
                    <div className="mb-3"><input type ="text" className="form-control btn btn-primary"/></div>

                </form>
        </div>
    )
}


function Main(){
    return (
        <div className="container my-5">
            <form action="">
                <h1>Main Page</h1>
            </form>
        </div>
    )
}

function AboutUs(){
    return (
        <div className="container my-5">
            <form action="">
                <h1>About us</h1>
            </form>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu/>

            <Route exact path="/" render={()=><Main/>} />
            <Route path="/about" render={()=><AboutUs/>}/>
            <Route path="/contact-us" render={()=><ContactUs/>}/>
        </BrowserRouter>
    </div>
  );
}
export default App;
