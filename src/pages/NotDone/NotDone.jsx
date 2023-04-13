import React from 'react'
import Header from '../../components/Header'
import { useTodoStore } from '../../store/todoStore'
import { CardTask } from '../../components/CardTask'

export const NotDone = () => {
  const {todos} = useTodoStore();

  return (
    <>
        <Header title="Not DONE"/>
        <div>
                <h2>Not DONE TASKS</h2>
                <ul>
                    {todos ? todos.filter((todo) => !todo.done).map((todo, index) => {
                        return (
                            <CardTask 
                                key={todo.id} 
                                todo={todo}
                                id={todo.id}/>
                        )
                    }) : null}
                </ul>
            </div>
    </>
  )
}
