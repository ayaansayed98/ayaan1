function add() {
    let a = 8,b = 2;
    console.log(`The addition using normal function without parameter is ${a +
    b}`);
    }
    add();
    function add2(a, b) {
    console.log(`The addition using normal function with parameter is ${a + b}`);
    }
    add2(45, 67);
    const arrowAdd = () => {
    let a = 100,b = 25;
    console.log(`The addition using arrow function without parameter is ${a +
    b}`);
    };
    arrowAdd();
    const arrowAdd2 = (a, b) => {
        console.log(`The addition using arrow function with parameter is ${a + b}`);
        };
        arrowAdd2(90, 35);
        const anonymousAdd = function () {
        let a = 52, b = 78 ;
        return `The addition using anonymous function without parameter is ${a +
        b}`;
        };
        let x = anonymousAdd();
        console.log(x);
        const anonymousAdd2 = function (a, b) {
        return `The addition using anonymous function with parameter is ${a + b}`;
        };
        let y = anonymousAdd2(42, 8);
        console.log(y);

        function* generator(x) {
            yield x;
            yield x * 5;
            yield x * 3;
            yield x + 2;
            yield x - 8;
            }
            const gen = generator(39);
            console.log("Output for each yield is:")
            console.log(gen.next().value);
            console.log(gen.next().value);
            console.log(gen.next().value);
            console.log(gen.next().value);
            console.log(gen.next().value);