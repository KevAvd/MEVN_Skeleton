type HttpStatusCode = | 200 | 201 | 204 | 207 | 400 | 401 | 404 | 500

const OK : HttpStatusCode = 200
const OK_CREATED : HttpStatusCode = 201
const OK_NOCONTENT : HttpStatusCode = 204
const MULTI_STATUS : HttpStatusCode = 207
const BAD_REQUEST : HttpStatusCode = 400
const UNAUTHORIZED : HttpStatusCode = 401
const NOTFOUND : HttpStatusCode = 404
const INTERNALERR : HttpStatusCode = 500

function multistatusCode<T, U> (passed: T[], failed: U[], ok: HttpStatusCode, bad: HttpStatusCode) {
    return passed.length > 0 ? failed.length > 0 ? MULTI_STATUS : ok : bad
}

export type {
    HttpStatusCode
}

export default {
    OK,
    OK_CREATED,
    OK_NOCONTENT,
    MULTI_STATUS,
    BAD_REQUEST,
    UNAUTHORIZED,
    NOTFOUND,
    INTERNALERR,
    multistatusCode
}
