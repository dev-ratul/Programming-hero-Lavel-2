// typeAssersion
let message: any;

message = "hello";
// (message as string)

// example-2

const kgToGMConverter = (
  input: string | number
): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return Number(value) * 1000;
  }
};

const result1 = kgToGMConverter(10) as number;
console.log(result1);

const result2 = kgToGMConverter("9 kg") as string;
console.log(result2)
