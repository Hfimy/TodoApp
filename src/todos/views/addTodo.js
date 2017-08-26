import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import * as actions from '../actions'
import {add_todo} from '../actions'
import { connect } from 'react-redux'

class AddTodo extends Component {
    onSubmit(e) {
        //取消表单提交的默认行为
        e.preventDefault();
        const input = this.refs.input
        if (!input.value.trim()) {
            return
        }
        this.props.addTodo(input.value);
        input.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input ref='input' />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
//检验组件的prop类型
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            actions.add_todo(text)
        }
    }
}*/
const mapDispatchToProps = {
    addTodo: add_todo
}

export default connect(null, mapDispatchToProps)(AddTodo);