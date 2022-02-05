import * as _ from 'lodash'
import * as array from 'lodash/array'

function getZipFromFull() {
  return _.zip(['a', 'b'], [1, 2], [true, false])
}

function getZipFromArray() {
  return array.zip(['a', 'b'], [1, 2], [true, false])
}

console.log(getZipFromFull(), getZipFromArray())
