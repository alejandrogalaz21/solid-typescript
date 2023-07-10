;(() => {
  type Gender = 'M' | 'F'
  interface UserProps {
    name: String
    lastName: String
    age: Number
    gender: Gender
  }

  class Auth {}

  class User {
    public name: String
    public lastName: String
    public age: Number
    public gender: Gender

    constructor({ name, lastName, age, gender }: UserProps) {
      this.name = name
      this.lastName = lastName
      this.age = age
      this.gender = gender
    }
  }

  const userData: UserProps = {
    name: 'Alex',
    lastName: 'Galaz',
    age: 34,
    gender: 'M'
  }

  const user = new User(userData)

  console.log(user)
})()
