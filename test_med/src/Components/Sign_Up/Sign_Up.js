import React, { Component } from 'react'
import "./Sign_Up.css"

export default class Sign_Up extends Component {
  render() {
    return (
        <div className="container" style={{marginTop: "5%"}}> 
        <div className="signup-grid"> 
            <div className="signup-text"> 
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1"> 
                Already a member? <span><a href="/login" style={{color: "#2190FF"}}> Login</a></span>
            </div>
            <div className="signup-form"> 
                <form> 

                    <div className="form-group"> 
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>

                    <div className="form-group"> 
                        <label for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required class="form-control" placeholder="Enter your phone number" maxLength="10" aria-describedby="helpId" />
                    </div>

                    <div className="form-group"> 
                        <label for="email">Email</label> 
                        <input type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>

                    <div className="form-group"> 
                        <label for="password">Password</label>
                        <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" /> 
                    </div>

                    <div className="btn-group"> 
                        <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
  }
}
