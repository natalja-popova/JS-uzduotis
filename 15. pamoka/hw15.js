//+ 1. Naudojantis coin api dokumentacija parfetchint kriptovaliutas. Jų kainos turi būt atvaizduotos "usd"; (veiksmą atlikt per thunder client);
//+ 2. Tą patį veiksmą atlikt naudojant JS, gautus duomenis išvest consolėj;

// // https://api.coincap.io/v2/assets
// // https://api.spacexdata.com/v4/launches
// +3. Turimas valiutas atvaizduoti į puslapį, kiekvienai kriptovaliutai sukurti kortelę kurioje turi būt:
//+ - Kriptovaliutos pavadinimas;
//+ - Dabartinė kainą;
//+ 4. Paspaudus ant kriptovaliutos kortelės - consolėj turi būt atvaizduotas tos kriptovaliutos pavadinimas;
//+ 5. Jeigu kriptovaliutos vieneto kaina yra didesnė uz 100eur - kriptovaliutos border turi būt auksinės spalvos, jei pigenė už 100, sidabrinės spalvos;
//+ 6. Prieš atvaizduojant kriptovaliutas - jas išrikiuot abecelės tvarka;

const cryptosWrapper = document.getElementById("cryptosWrapper");
const cryptoCards = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );
  const cryptosDataUnsorter = await response.json();
  const cryptosData = [...cryptosDataUnsorter].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log(cryptosData);
  cryptosData.forEach((e) => {
    const cryptoCard = document.createElement("div");
    cryptoCard.classList.add("cryptoCard");

    const cName = document.createElement("h1");
    cName.innerText = e.name;

    const cPrice = document.createElement("p");
    cPrice.innerText = `$ ${e.current_price} `;
    e.current_price >= 100
      ? cryptoCard.classList.add("borderHighPrice")
      : cryptoCard.classList.add("borderLowPrice");
    /*
    e.current_price >= 100
      ? (cryptoCard.classList.add("borderHighPrice"),
        cName.classList.add("highPriceText"))
      : (cryptoCard.classList.add("borderLowPrice"),
        cName.classList.add("lowPriceText"));
*/
    const cImg = document.createElement("img");
    cImg.src = e.image;

    cryptoCard.addEventListener("click", () => {
      const idx = cryptosData.findIndex((el) => el.name === e.name);
      console.log(cryptosData[idx].name);
    });

    cryptoCard.append(cImg, cName, cPrice);
    cryptosWrapper.append(cryptoCard);

    //   console.log(e.current_price, e.name, e.image);
  });
  console.log(cryptosDataUnsorter);
};
cryptoCards();
