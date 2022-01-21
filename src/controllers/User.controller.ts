import { User } from '@models/User'

export class UsersController {
  test () {
    const user = new User()
    console.log(user)
  }
}
