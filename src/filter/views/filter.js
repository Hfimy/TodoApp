import React from 'react'
import Link from './link'
import './style.css'

const Filter=()=>{
    return (
        <p className='filters'>
            <Link filter='all'>All</Link>
            <Link filter='completed'>Completed</Link>
            <Link filter='uncompleted'>Uncompleted</Link>
        </p>
    )
}

export default Filter