import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'test'

  expect(user.name).toBe('test')
})
