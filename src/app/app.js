import React, {Component} from 'react';
import AddTodo from '../container/add-todo';
import Footer from '../component/footer';
import VisibleTodoList from '../container/visible-todo-list';

class App extends Component {
    render(){
        return(
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;