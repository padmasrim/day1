function numbersThenCharacters(arr) {
    const numbers = [];
    const characters = [];
    
    for (let i = 0; i < arr.length; i++) {
      const subArr = arr[i];
      const numbersSubArr = [];
      const charactersSubArr = [];
      
      for (let j = 0; j < subArr.length; j++) {
        if (typeof subArr[j] === "number") {
          numbersSubArr.push(subArr[j]);
        } else {
          charactersSubArr.push(subArr[j]);
        }
      }
      
      numbers.push(numbersSubArr);
      characters.push(charactersSubArr);
    }
    
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].sort((a, b) => a - b);
    }
    for (let i = 0; i < characters.length; i++) {
      characters[i].sort();
    }
    const result = [];
    
    for (let i = 0; i < Math.max(numbers.length, characters.length); i++) {
      const subArr = [];
      
      if (numbers[i]) {
        subArr.push(...numbers[i]);
      }
      
      if (characters[i]) {
        subArr.push(...characters[i]);
      }
      
      result.push(subArr);
    }
    
    return result;
  }
  const input = [
    [11, 12, 24, 23, "a", "b"],
    [56, "c", 45],
    [67, "d"],
    ["f", "e", 78]
  ];
  
  const output = numbersThenCharacters(input);
  console.log(output);
  