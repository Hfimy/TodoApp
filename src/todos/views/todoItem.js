import React from 'react'
import PropTypes from 'prop-types'
//此处应为一个无状态组件
const TodoItem=({completed,text,onToggle,onRemove})=>{
    return (
        <li>
            <input type='checkbox' checked={completed} onClick={onToggle}/>
            <span>{text}</span>
            <button onClick={onRemove}>Delete</button>
        </li>
    )
}
TodoItem.propTypes={
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired,
    onToggle:PropTypes.func.isRequired,
    onRemove:PropTypes.func.isRequired
}
export default TodoItem
