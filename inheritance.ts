// How Do You Implement Inheritance In Typescript?
export { }
class main {
    name: string;
    constructor(value: string) {
        this.name = value;
    }
    mainfn() {
        console.log(`This is main method and the name is ${this.name}`);
    }

}
class sub extends main {
    constructor(value: string) {
        super(value);
    }
    subfn() {
        console.log(`This is sub class and name is ${this.name}`);
    }
}
let subcls = new sub("myname");
subcls.subfn();
subcls.mainfn();