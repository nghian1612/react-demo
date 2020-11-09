import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: '',
      pass: ''
    }
  }

  login = () => {
    this.setState({
      isLogin: true,
      userName: 'nghia',
      pass: '123456',
    })
  }
  checkLogin = (userName) => {
    
    if(this.state.userName === this.userName){
      return(
        <div>Hello {this.state.userName} <button onClick={this.logout}>Logout</button> </div>
      )
    }
    return (
      this.renderLogin()
    )
    
  }
  logout = () => {
    this.setState({
      isLogin: false,
      userName: '',
      pass: '',
    })
  }
  renderLogin = () => {
    return (
      <form>
        <div className="form-group">
          <label htmlFor>UserName</label>
          <input type="email" className="form-control" name="name" id aria-describedby="emailHelpId" placeholder="Please write email,......" />
        </div>
        <div className="form-group">
          <label htmlFor>Pass</label>
          <input type="password" className="form-control" name="pass" id aria-describedby="emailHelpId" placeholder="Please write password, ........" />
        </div>
        <button type="submit" className="btn btn-dark" onClick={this.checkLogin}>Submit</button>
      </form>
    )
  }
  // let arrayLogin = arrayInfoLogin.map(( Login ) => {

  // });
  render() {
    return (
      <div>
        {this.renderLogin()}
      </div>
    )
  }
}
