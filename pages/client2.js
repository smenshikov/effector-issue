import {Fragment} from 'react'
import {useEvent, useStore} from "effector-react/ssr";
import Link from "next/link";

import {Layout} from "../components/layout";

import {$todos, getTodoFx} from "../model/todo";
import {ssrScopeHandling} from "../helpers";

const ClientTwo = () => {
    const todos = useStore($todos)
    const boundGetTodo = useEvent(getTodoFx)

    return <>
        <h1>Client Two</h1>
        <Link href='/client'>
            client page
        </Link>

        <button onClick={() => boundGetTodo(3)}>Fill $notification store</button>

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
    const { store } = await ssrScopeHandling([{fx: getTodoFx, params: 2}]);

    return { props: { store } };
}

export default ClientTwo