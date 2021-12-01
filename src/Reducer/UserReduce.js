import { types } from '../types/types'

export const userReduce = (state, action) => {
  switch (action.types) {
    case types.login:
      return action.payload

    case types.register:
      console.log('me estan llamando')
      return action.payload

    default:
      return state;
  }
};
