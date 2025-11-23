// interface

// onject-1
interface user {
  name: string;
  address: string;
}

const userI: user = {
  name: "ratul",
  address: "tangail",
};

console.log(userI);


// array

interface arr {
    [index: number] : string;
}

const array:arr= ['r','a', 't']

// function

interface func{
    (num1: number, num2: number): number;
}

const funct :func = (num1, num2)=> num1+num2

console.log(funct(1,3))
