class HelloWorld {
  constructor() {
    this.message = "Hello World";
  }

  printHelloWorld() {
    return this.message;
  }
}
const helloWorld = new HelloWorld();
console.log(helloWorld.printHelloWorld());
