import { type Request as ExpressRequest } from 'express'

export type Request<T, P = unknown> = ExpressRequest<P, unknown, unknown, T>
