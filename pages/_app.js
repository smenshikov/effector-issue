import {fork, serialize} from 'effector'
import { Provider as EffectorProvider } from 'effector-react/ssr';

import {Layout} from "../components/layout";

import '../model/init'
import {coreDomain} from "../model/todo";

let clientScope

function MyApp({ Component, pageProps }) {
    const { store = {}, ...restProps } = pageProps;

    const scope = fork(coreDomain, {
        values: {
            ...(clientScope ? serialize(clientScope, { onlyChanges: true }) : {}),
            ...store,
        },
    });

    if (typeof window !== 'undefined') {
        clientScope = scope;
    }

    return <EffectorProvider value={scope}>
        <Layout>
            <Component {...restProps} />
        </Layout>
    </EffectorProvider>
}

export default MyApp