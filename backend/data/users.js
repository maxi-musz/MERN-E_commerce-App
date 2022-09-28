import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Oluwaremi Mayowa Bernard',
    email: 'omayowagold@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Micheal Danny',
    email: 'mike01@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users