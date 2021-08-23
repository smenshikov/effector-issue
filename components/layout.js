import {useStore} from "effector-react/ssr";

import {$notification} from "../model/todo";

export const Layout = ({children}) => {
    const notification = useStore($notification)

    return <>
        <pre>
            <code>
                Value of notification store: {JSON.stringify(notification, null, 2)}
            </code>
        </pre>
        <div style={{backgroundColor: '#ccc'}}>{children}</div>
    </>
}