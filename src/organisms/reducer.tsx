export default function reducer(state = [], action: any) {
    let newArray
    switch(action.type) {
        case 'TASK_REMOVE':
            newArray = state.filter((item: any) => item.id !== action.payload)
            return newArray

        case 'TASK_ADD':
           return [...state, { data: action.payload, id: action.id, isChecked: false }]

        case 'TASK_CHECK':
            newArray = state.filter((item: any) => {
                if (item.id === action.payload.id) {
                    item.isChecked = !item.isChecked
                }
                return item
            })
            return newArray

        default: 
        return state
    }
}