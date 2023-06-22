import React from "react";
import { Link } from "react-router-dom";
import './App.css';

export const Signup = () => {
    return (
        <>
            <div className="d-flex">
            <div style={{marginTop:'150px',width:'20%'}}>
                        <h1 style={{ transform: "rotate(-90deg)",width:'300px' }}>Bootstarp 4</h1>
                    </div>
                <div className="d-flex" style={{gap:'50px',height:'100%',width:'100%'}} >
                    
                        <div>
                            <h1 style={{ color: "green" }}>Create new account</h1>
                            <input className="f-input" type="text" name="username" value='' placeholder="User Name" /><br /><br />
                            <input type="email" name="email" value='' placeholder="Email" className="f-input" /><br /><br />
                            <input type="password" name="password" value='' placeholder="password" className="f-input" /><br /><br />
                            <button class="btn btn-dark">Create New account</button><br /> <br />
                            <input type="checkbox" name="para" />Create account with your Email Address
                        </div>
                        <div style={{ backgroundColor: "green", color: " white", border: "1px solid lightpink", borderRadius: "35px", padding: "85px",height:'100%' }}>
                            <h1>HELLO WORD !</h1>
                            <p>Sam Lanksy of Idolator called the song "surprisingly great" and noted it was a "mature midpoint" between the group's signature "rollicking pop-rock confection.
                                Sam Lanksy of Idolator called the song "surprisingly great" and noted it was a "mature midpoint" between the group's signature "rollicking pop-rock confect</p>
                            <Link to="/"><button style={{ marginLeft: "40%", marginTop: "20px", padding: "5px", width: 100 }} class="btn btn-dark" >See More</button></Link>
                        </div>
                </div>
            </div>
        </>
    )
}