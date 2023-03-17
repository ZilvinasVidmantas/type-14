declare global {
  namespace Express {

    export interface Request {
      authUser?: UserEntity
    }
  }
}

export { };
