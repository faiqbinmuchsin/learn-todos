import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import { todoActions } from '../redux/todo'
import TodoList from '../component/todo-list'
// import { VisibilityFilters } from '../redux/visibility-filter'
import { visibilityFilterType } from '../redux/visibility-filter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilterType.VisibilityFilters.SHOW_ALL:
      return todos
    case visibilityFilterType.VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case visibilityFilterType.VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(todoActions.toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
