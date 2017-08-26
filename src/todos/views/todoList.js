import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import * as actions from '../actions'
import { toggle_todo, remove_todo } from '../actions'
import TodoItem from './todoItem'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul>
            {
                todos.map(item => {
                    return <TodoItem
                        key={item.id}
                        completed={item.completed}
                        text={item.text}
                        onToggle={() => { onToggleTodo(item.id) }}
                        onRemove={() => { onRemoveTodo(item.id) }} />
                })
            }
        </ul>
    )
}

TodoList.propTypes={
    todos:PropTypes.array.isRequired,
    onToggleTodo:PropTypes.func.isRequired,
    onRemoveTodo:PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    onToggleTodo: toggle_todo,
    onRemoveTodo: remove_todo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
// export default TodoList