// TASKS
//+ 1. Susikonfiguruot mockAPI, susikurt duomenų modelį recipes;
//+ 2. recipes turi turėt properties: title, description, instructions, ingredients(naudot string, ne array), recipe_img;
//+ 3. Thunder client pagalba įdėt 2-3 receptus;
// 4. Susikurti savo projekto wireframe;
// 5. Susikurti pagrindinį puslapį kur visi item'ai yra atvaizduojami kortelėse.
// 6. Receptus atvaizduoti kortelėse;
const getHikes = async () => {
  const response = await fetch(
    "https://695e17f82556fd22f6774a1f.mockapi.io/hiking"
  );
  hikes = await response.json();
  const hikesWrapper = document.getElementById("hikesWrapper");
  hikes.forEach((hike) => {
    const card = document.createElement("a");
    const link = `./hike/index.html?id=${hike.id}`;
    card.href = link;

    const hCountry = document.createElement("p");
    hCountry.innerText = hike.country;

    const hTitle = document.createElement("h2");
    hTitle.innerText = hike.rootName;

    /* root details */
    const hDetailsWrapper = document.createElement("div");
    hDetailsWrapper.classList.add("rootDetailsWrapper");

    const hDetails = document.createElement("div");
    hDetails.classList.add("textWrapper");
    hDetails.append(hCountry);

    /* root images */
    const hImages = document.createElement("div");
    hImages.classList.add("rootImages");

    const img1 = document.createElement("img");
    img1.src = hike.rootPhoto1;

    const img2 = document.createElement("img");
    img2.src = hike.rootPhoto2;

    const img3 = document.createElement("img");
    img3.src = hike.rootPhoto3;

    hImages.append(img1, img2, img3);
    /* root images */
    card.append(hTitle, hDetails, hImages);
    hikesWrapper.append(card);
  });
  console.log(hikes);
};

getHikes();
