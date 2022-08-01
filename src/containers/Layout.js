import React, {Component} from 'react';
import ChildComponent from './../components/Footer/index';
// // import MyFirstComponent from '../MyFirstComponent';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: 'it is a frog',
      describe: 'chicken',
      arrayOfTodos: []
    };    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(response => {
      return response.json()
     }).then(arrayOfTodos => this.setState({ arrayOfTodos }))
 }

    render() {
      return (
        <div>
          <ol>{this.state.arrayOfTodos.map((todo, index) => {
          return (
            <li key={index}>
							{todo.title}
						</li>
          )
        })}</ol>
          <ChildComponent frog={this.state.food} chicken={this.state.describe}/>
        </div>
      );
    }
  }
  

export default Layout;
