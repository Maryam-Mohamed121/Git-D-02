class HelloITI {
  constructor() {
    this.message = "Hello ITI";
  }

  printHelloITI() {
    return this.message;
  }
  printHelloGit() {
    return "Hello Git";
  }
}
const helloITI = new HelloITI();
console.log(helloITI.printHelloITI());
console.log(helloITI.printHelloGit());
