import React, {FC, useEffect, useState, Suspense} from 'react';
import {IDevelopers} from "../types/type";
import Test from "../assets/resource/image.svg"
import Icon from "./Icon";
import './test.sass'
const Modal = React.lazy(() => import('./Modal'));

interface IProps {
    text: string;
}

type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function log() {
    console.log('Tomatos')
}

// @ts-ignore
@log
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

    const [isOpen, setIsOpen] = useState(false);

    const [todos, setTodos] = useState<Todos>(null)

    const getTodos = async () => {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
        console.log(todos)
        setTodos(todos)
    }

    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        getTodos()
        User.staticMethod(); // true
    }, [])

    return (
        <div>
            <Icon/>
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


            <Test />
            <a href='lk/example.html'>Go to LK</a>
            <button onClick={isOpenHandler}>Open Modal</button>
            <Suspense fallback={<div>Loading...</div>}>
                {isOpen && <Modal
                    isVisible={isOpen}
                    title="Modal Title"
                    content={<p>Add your content here</p>}
                    footer={<button>Cancel</button>}
                    onClose={() => setIsOpen(false)}
                />}
            </Suspense>
        </div>
    );
};

export default HelloWorld;