
export const removeTask = (text: string) => ({
    type: 'TASK_REMOVE',
    payload: text
  })

export const addTask = (newData: any, id: number) => ({
  type: 'TASK_ADD',
  payload: newData,
  id
})

export const setChecked = (id: number) => ({
  type: 'TASK_CHECK',
  payload: { id }
})
