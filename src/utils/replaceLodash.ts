// Imported ALL lodash, to check tree shaking in client app
import * as _ from 'lodash-es'

const replaceLodash = (
  str: string,
  subString: string,
  newString: string
): string => {
  console.log('replaceLodash called')
  return _.replace(str, subString, newString)
}

export default replaceLodash
