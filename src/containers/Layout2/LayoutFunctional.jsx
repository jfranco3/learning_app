import React, { useState, useEffect} from 'react';
import ChildComponent from "../../components/Footer/index";
import MyConditionalComponent from "../../components/MyConditionalComponent/index";
import NameForm from "../../components/NameForm";
// // import MyFirstComponent from '../MyFirstComponent';


export function LayoutFunctional() {

    const [food, setFood]= useState('It is a frog');
    const [describe, setDescribe] = useState('chicken');
    const [arrayOfTodos, setArrayOfTodos] = useState([]);
    const [isVerified, setIsVerified] = useState(false);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        return response.json()
        }).then(todos => setArrayOfTodos(todos)) // update state with
                                                    // setArrayOfTodos 
    }, []); //when dependency array empty works like componentDidMount

   const handleSubmitFood = (food) => {
        setFood(food);
      };
    

    return (
        <div>
        <NameForm foodChange={handleSubmitFood} />
        <ChildComponent frog={food} chicken={describe} />
        <MyConditionalComponent isVerified={isVerified} />
        <ol>
          {arrayOfTodos.map((todo, index) => {
            return <li key={index}>{todo.title}</li>;
          })}
        </ol>
      </div>
    );
}

export default LayoutFunctional;