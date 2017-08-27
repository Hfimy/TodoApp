import React from 'react'
import {view as Todos} from './todos'
import {view as Filter} from './filter'
export default ()=>{
    return (
        <div>
            <Todos/>
            <Filter/>
        </div>
    )
}