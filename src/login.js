import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa_z20raEzFki8m31UStjTDYy7TpMCyUZUGE92gOGId-fiJcNIsXgD45vMQsv0mnStww&usqp=CAU" style={{ height: 100, marginTop: 25, }} />
                            <h2>Address</h2>
                            <h5>Maruti Park <br />Near Bigbazar<br /></h5>

                            <img src="https://e7.pngegg.com/pngimages/818/957/png-clipart-computer-icons-telephone-call-graphics-telephone-number-telephone-text-telephone-call-thumbnail.png" style={{ height: 75, marginTop: 25 }} />
                            <h2>Phone</h2>
                            <h5>+1234567890<br />+1234567890<br /></h5>

                            <img src="https://icon2.cleanpng.com/20180602/zef/kisspng-gmail-email-logo-g-suite-google-5b132ab64aef11.6860968915279827743069.jpg" style={{ height: 90, marginTop: 25 }} />
                            <h2 >Email</h2>
                            <h5>dreamspot@gmail.com</h5>
                        </div>

                        <div className="col-6">
                            <h1 style={{ color: "red", marginTop: 30 }}>Send us a message</h1>
                            <p style={{ fontSize: 20, marginTop: 25 }}>If you any work from me or any type of quires related to my tutorial.you can send me message from here.It's my pleosure to help you.</p>
                            <input type="text" id="fname" name="fname" placeholder="enter your name" style={{ width: 500, height: 40, marginTop: 25 }} /><br /><br />
                            <input type="text" id="email" name="email" placeholder="enter your email" style={{ width: 500, height: 40, marginTop: 20 }} /><br /><br />
                            <input type="text" id="message" name="message" placeholder="enter your message......" style={{ width: 500, paddingBottom: 100, marginTop: 20 }} />
                            <div style={{ textAlign: "center" }}>
                                <Link to="/Signup"><button style={{ marginLeft: "40%",marginTop:"20px",padding:"5px",width:100 }} class="btn btn-danger" >Send</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}