import React, {FC, useEffect, useState} from 'react';
import {IDevelopers} from "../types/type";
import Icon from "./Icon";
import './test.sass'

interface IProps {
    text: string;
}

type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

class User {
    static staticMethod() {
        alert(this === User);
    }
}

const HelloWorld: FC<IProps> = ({text}) => {
    const developers: IDevelopers = {
        name: 'Text',
        age: 17
    }

    const [todos, setTodos] = useState<Todos>(null)

    const getTodos = async () => {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
        console.log(todos)
        setTodos(todos)
    }

    useEffect(() => {
        getTodos()
        User.staticMethod(); // true
    }, [])

    return (
        <div>
            <Icon />
            <h1>{text}</h1>
            <div className='logoTest'>

            </div>
            {developers.name}, {developers.age}
            <div>
                <h1>Todos</h1>
                {todos && (
                    <div className='testDiv'>
                        <div>{todos.userId}</div>
                        <div>{todos.id}</div>
                        <div>{todos.title}</div>
                        <div>{todos.completed}</div>
                    </div>
                )}
            </div>
            <a href='lk/example.html'>Go to LK</a>
        </div>
    );
};

export default HelloWorld;