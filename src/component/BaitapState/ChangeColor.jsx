import React, { Component } from 'react'

export default class ChangeColor extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      img: './products-img/product1.jpg',
    })
  }
  changeColor = (color) => {
    let imgChange = '';
    // eslint-disable-next-line default-case
    switch(color){
      case 'blue':{
        imgChange = './products-img/product1.jpg';
      }; break;
      case 'yellow':{
        imgChange = './products-img/product2.jpg';
      }; break;
      case 'purple':{
        imgChange = './products-img/product3.jpg';
      }
    }
  
    this.setState({
      img : imgChange,
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Please choose your color</h1> 
              <img src={this.state.img} width={300} alt=""/>
            </div>
            <div className="col-md-6">
              <h2>Please Change your color</h2> 
              <button onClick={()=>this.changeColor('blue')} className="btn btn-primary" style={{margin: '5px', color: '#fff', backgroundColor: 'blue'}}>Blue color</button>
              <button onClick={()=>this.changeColor('yellow')} className="btn btn-primary" style={{margin: '5px', color: '#fff', backgroundColor: 'yellow'}}>Yellow color</button>
              <button onClick={()=>this.changeColor('purple')} className="btn btn-primary" style={{margin: '5px', color: '#fff', backgroundColor: 'purple'}}>Purple color</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
