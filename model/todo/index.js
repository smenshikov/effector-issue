import {createDomain} from "effector";

export const coreDomain = createDomain('core')

export const $notification = coreDomain.createStore(null)

export const $todos = coreDomain.createStore([])

export const getTodosFx = coreDomain.createEffect()

export const getTodoFx = coreDomain.createEffect()

export const setNotification = coreDomain.createEvent()

export const startRequest = coreDomain.createEvent()



