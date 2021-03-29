import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    //this.state.input это наш content. В данном случае наш addTodo это не тот самый наш action addTodo. Вот наш add.Todo который реально из actions, это тот метод обернутый уже связью со store (чтобы мы не писали в явном виде store.dispatch). Он уже связан с помощью метода connect, он уже связывается со store и внутри вот этой связи со store, там есть вызов нашего непосредственного addTodo из actions, уже получен action и вызвана store.dispatch и передан наш action.
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
