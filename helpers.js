import {fork, allSettled, serialize} from 'effector'

import {coreDomain} from "./model/todo";

export async function ssrScopeHandling(params) {
    const scope = fork(coreDomain);

    const responses = await Promise.all(
        params.map((param) => allSettled(param.fx, { scope, params: param.params })),
    );

    return {
        responses,
        store: serialize(scope, { onlyChanges: true }),
    };
}
