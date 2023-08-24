import * as R from 'ramda'

export const isEmpty = R.either(R.isEmpty, R.isNil)
