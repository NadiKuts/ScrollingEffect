import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import '../App.css';
import Header from './header/Header';
import Entree from './entree/Entree';
import MainDish from './main/MainDish';
import Dessert from './dessert/Dessert';

class Board extends Component {
  constructor(props) {
		super(props);
		this.state = {
			wasLoaded: false
		};
    this.width = 0;
	}
  
  componentDidMount = () => {
     	this.setState({wasLoaded: !this.state.wasLoaded});
      const winWidth = window.innerWidth;
      this.width = winWidth > 950 ? 50 : (winWidth > 550 ? 60 : 70);
	}
  
  render() {
    return (
      <Motion style={{ 
          width: spring(this.state.wasLoaded ? this.width : 40),
         }}>
         {({width}) =>
         <div className="Board" style={{
                width: `${width}%`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease',
                transitionTimingFunction: 'ease',
                WebkitTransitionDelay: '1s',
                transitionDelay: '1s',
              }}>
           <Header></Header>
           <Entree></Entree>
           <MainDish></MainDish>
           <Dessert></Dessert>
         </div>
       }
      </Motion>
    );
  }
}

export default Board;
