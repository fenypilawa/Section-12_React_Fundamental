import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "To Do List",
      todo: [
        <div className='Isi'>
            <p className='satu'><span style = {{textDecoration: "line-through"}}> Membuat Komponen </span></p>
            <p className='dua'> Unit Testing </p>
            <p className='tiga'><span style = {{textDecoration: "line-through"}}> Setup Development Environment </span></p>
            <p className='empat'> Membuat Komponen </p>
        </div>
      ],
      todoInput: "",
    };
  }

  handleTodoInput(event){
    this.setState({
        todoInput: event.target.value,
    });
  }

  handleNew(){
    const newTodo = this.state.todo.concat(this.state.todoInput);
    this.setState({
        todo: newTodo,
        todoInput: "",
    });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <hr/>
        <input type="text" value={this.state.todoInput}
        onChange={(event) => this.handleTodoInput(event)}/>
        <button onClick={() => this.handleNew()}> New </button>
        {
          this.state.todo.map (todo => {
            return <p>{todo}</p>
          })
        }
    </div>
    );
  }

}

export default App;
