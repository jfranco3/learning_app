import React, {Component} from 'react';
import ChildComponent from './../components/Footer/index';
// // import MyFirstComponent from '../MyFirstComponent';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: 'it is a frog',
      describe: 'chicken'
    };    
  }


    render() {
      return (
        <div>
          <ChildComponent frog={this.state.food} chicken={this.state.describe}/>
        </div>
      );
    }
  }
  

export default Layout;
