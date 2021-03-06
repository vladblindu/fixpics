import {toKey} from "./obj.helpers";

const toVal = v => v[0] !== '/' ? '/' + v : v

export const flatten = (o, uk = '', uv = '', tmp = {}) => Object.keys(o)
    .reduce((acc, k) => {
        if (k === '_base') return acc
        const nk = toKey(k, uk)
        if (typeof o[k] !== 'string')
            return {...acc, ...flatten(o[k], nk, uv + o[k]['_base'], acc)}
        acc[nk] = uv ? uv + toVal(o[k]) : toVal(o[k])
        return acc
    }, tmp)

const baseEndpoints = endpoints => Object.keys(endpoints)
    .reduce((acc, k) => {
        if (typeof endpoints[k] !== "string")
            acc[toKey(k)] = endpoints[k]['_base']
        else acc[toKey(k)] = endpoints[k]
        return acc
    }, {})


export const controllerEndpoints = endpoints => {
    const be = baseEndpoints(endpoints)
    return {
        ...be,
        ...Object.keys(endpoints).reduce((acc, k) => {
            if (typeof endpoints[k] !== 'string')
                return {...acc, ...flatten(endpoints[k], toKey(k))}
            return acc
        }, {})
    }
}