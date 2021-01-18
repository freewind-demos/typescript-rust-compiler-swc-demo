class User {
  constructor(private name: string) {
  }

  hello = () => {
    console.log(`### Hello, ${this.name}`)
  }
}

const user = new User('swc');
user.hello()
