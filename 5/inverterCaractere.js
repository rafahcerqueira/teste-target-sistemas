const str = "Exemplo de string"; // string a ser invertida
const arr = str.split("");

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  const temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

const reversedStr = arr.join("");
console.log(reversedStr); 

