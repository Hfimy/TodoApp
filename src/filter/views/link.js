import React from 'react'
import PropTypes from 'prop-types'
import {set_filter} from '../actions'
import { connect } from 'react-redux'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return (
            <b className='filter selected'>{children}</b>
        )
    } else {
        return (
            <a  className='filter not_selected' href='#' onClick={(e) => {
                e.preventDefault();
                onClick()
            }}>{children}</a>
        )
    }
}
Link.propTypes={
    active:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
}

const mapStateToProps=(state,ownProps)=>{
    return {
        active:state.filter===ownProps.filter
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        onClick:()=>{dispatch(set_filter(ownProps.filter))}
    }
}
/*const mapDispatchToProps={
    onClick:set_filter
}*/
export default connect(mapStateToProps,mapDispatchToProps)(Link)