class HelloJavaScript {
  constructor() {
    this.message = "Hello JavaScript";
  }

  printHelloJavaScript() {
    return this.message;
  }
}
const helloJavaScript = new HelloJavaScript();
console.log(helloJavaScript.printHelloJavaScript());
