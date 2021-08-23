import {sample} from 'effector'

import {$notification, $todos, getTodoFx, getTodosFx, setNotification, startRequest,} from "./index";
import {getTodo, getTodos} from "../../api";

$todos.on(getTodosFx.doneData, (state, payload) => payload.data)
getTodosFx.use(getTodos)

getTodoFx.use(getTodo)

$notification.on(setNotification, (state, payload) => payload)

sample({
    source: getTodoFx.done,
    fn: ({params}) => {
        return {
            type: `getTodo ${params}`
        }
    },
    target: setNotification
})

