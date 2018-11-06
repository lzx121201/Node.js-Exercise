var square = (x) => x*x;
console.log(square(9));

var user = {
    name: 'Kyle',
    // sayHi: () => {
    //     console.log(`Hi. I'm ${this.name}`);
    // },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}.`);
    }
};

user.sayHiAlt('a','b');