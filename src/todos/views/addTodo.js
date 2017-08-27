import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import * as actions from '../actions'
import {add_todo} from '../actions'
import { connect } from 'react-redux'

class AddTodo extends Component {
    constructor(){
        super(...arguments)
        this.state={
            value:''
        }
    }
    onSubmit(e) {
        //取消表单提交的默认行为
        e.preventDefault();
        if (!this.state.value.trim()) {
            return
        }
        this.props.addTodo(this.state.value);
        // input.value = ''
        this.setState({value:''})
    }
    onInputChange(e){
        this.setState({value:e.target.value});
    }
    render() {
        return (
            <div className='add_todo'>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input className='add_input' onChange={this.onInputChange.bind(this)} value={this.state.value}/>
                    <button className='add_btn' type='submit'>Add</button>
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