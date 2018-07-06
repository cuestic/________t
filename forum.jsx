// ~~~~~~~~~~~~~+
// * pluralize  *
// * lodash.*   *
// * mongoose   *
// * minimist   *
// * nanoid     *
// ~~~~~~~~~~~~~+

// ~~~~~~~~~~~~~~~~~~~~~+
// * express            *
// * express-limiter    *
// * express-request-id *
// ~~~~~~~~~~~~~~~~~~~~~+

// ~~~~~~~~~~~~~~+
// * body-parser *
// * helmet      *
// * morgan      *
// * cors        *
// ~~~~~~~~~~~~~~+

// ~~~~~~~~~~~~~+
// * dotenv     *
// * bleach     *
// * fs-extra   *
// * validator  *
// * superagent *
// ~~~~~~~~~~~~~+

import { configure, property } from '@sakura/mongoose'
import { string, number, array, enum } from '@sakura/mongoose/types'

@configure({ nanoid: true })
export default class User {
  @string({ required: true })
  @property name
  
  @number({ min: 1000, max: 9999 })
  @property code

  @enum({})
  @property status = 'opening'
  
  @before.create()
  async beforeCreate() {
  }
}
