const createArrWithGen = <T>(value: T) => {
  return [value];
};

const exm1 = createArrWithGen("ratul");
console.log(exm1);
const exm2 = createArrWithGen(2);
console.log(exm2);

const createfuncWithGen = <T>(value: T) => {
  return {
    course: "programming hero",
    ...value
  };
};

const exm3 = createfuncWithGen({
    name : "MH Ratul",
    roll: 923092,
    isMarrid: false
})
console.log(exm3)