function countChocolates(totalMoney, chocolateCost) {

    const money = Number(totalMoney.replace(/\D/g, ''));
    const cost = Number(chocolateCost.replace(/\D/g, ''));

    if (isNaN(money) || isNaN(cost) || money < 0 || cost <= 0) {
      return "Invalid Input";
    }
  
    let initialChocolates = Math.floor(money / cost);
    let wrappers = initialChocolates;
    let additionalChocolates = 0;
  
    while (wrappers >= 3) {
      const exchangedChocolates = Math.floor(wrappers / 3);
      additionalChocolates += exchangedChocolates;
      wrappers = exchangedChocolates + (wrappers % 3);
    }

    const totalChocolates = initialChocolates + additionalChocolates;
  
    return totalChocolates;
  }

  console.log(countChocolates("4$", "1$"));
  console.log(countChocolates("55 $", "5$")); 
  console.log(countChocolates("I have 68$", "2$"));
  