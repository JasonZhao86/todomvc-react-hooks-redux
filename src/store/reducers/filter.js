import { FILTERTYPE_CHANGETYPE } from '../action-types'

const filter_type = (state = 'All', action) => {
  switch (action.type) {
    case FILTERTYPE_CHANGETYPE:
      return action.payload
    default:
      return state
  }
}

export default filter_type
