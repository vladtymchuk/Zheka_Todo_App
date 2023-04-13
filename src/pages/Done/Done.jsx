import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import { useTodoStore } from '../../store/todoStore'
import { CardTask } from '../../components/CardTask'

export const Done = () => {
  const {todos} = useTodoStore();

  return (
    <>
        <Header title="Done"/>
        <div>
                <h2>DONE TASKS</h2>
                <ul>
                    {todos ? todos.filter((todo) => todo.done).map((todo, index) => {
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
