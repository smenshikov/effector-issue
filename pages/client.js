import {Fragment} from 'react'
import {useEvent, useStore} from "effector-react/ssr";
import Link from "next/link";

import {Layout} from "../components/layout";

import {ssrScopeHandling} from "../helpers";
import {$todos, getTodoFx, getTodosFx} from "../model/todo";

const Client = () => {
    const todos = useStore($todos)
    const boundGetTodo = useEvent(getTodoFx)

    return <>
        <h1>Client</h1>
        <Link href='/client2'>
            client2 page
        </Link>

        <button onClick={() => boundGetTodo(1)}>Fill $notification store</button>

        <hr/>

        {todos.map((todo) => {
            return <Fragment key={todo.id}>
                <div>{todo.id}</div>
                <div>{todo.title}</div>
                <hr/>
            </Fragment>
        })}
    </>
}

export const getServerSideProps = async () => {
    const { store } = await ssrScopeHandling([{fx: getTodosFx}]);

    return { props: { store } };
}

export default Client