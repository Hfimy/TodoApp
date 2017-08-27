import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }
            ]
        }
        case TOGGLE_TODO: {
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter(item => {
                return item.id !== action.id
            })
        }
        //3.reducer要有对不匹配类型的默认返回值
        default: {
            return state
        }
    }
}