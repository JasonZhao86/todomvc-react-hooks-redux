import { FILTERTYPE_CHANGETYPE } from '../action-types'

/**
 * 修改过滤类名
 * @param {string} typename
 * @returns
 */
export const change_type = (typename) => {
  return {
    type: FILTERTYPE_CHANGETYPE,
    payload: typename,
  }
}
