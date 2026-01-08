const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const getHike = async () => {
  const response = await fetch(
    `https://695e17f82556fd22f6774a1f.mockapi.io/hiking/${id}`
  );
  hike = await response.json();
  console.log(hike);
  const hikesWrapper = document.getElementById("hikesWrapper");
  const hikeName = document.getElementById("hikeName");
  const hTitle = document.createElement("h1");
  hTitle.innerText = hike.rootName;
  hikeName.append(hTitle);
  const card = document.createElement("div");

  const hCountry = document.createElement("p");
  hCountry.innerText = hike.country;

  /* root details */
  const hDetailsWrapper = document.createElement("div");
  hDetailsWrapper.classList.add("rootDetailsWrapper");

  const hDetails = document.createElement("div");
  hDetails.classList.add("textWrapper");

  const hTime = document.createElement("p");
  hTime.innerText = `Predicated time: ${hike.predictedTime} h`;

  const hDistance = document.createElement("p");
  hDistance.innerText = `Distance: ${hike.distance}`;

  const isRadial = document.createElement("p");
  isRadial.innerText = `Radial: ${hike.isRadial}`;

  const elevationTotal = document.createElement("p");
  elevationTotal.innerText = `Total elevation ${hike.elevationTotal} m`;

  hDetails.append(hCountry, hTime, hDistance, isRadial, elevationTotal);
  /* roote schema */
  const hDetailsImg = document.createElement("div");
  hDetailsImg.classList.add("imgWrapper");
  const hRootUrl = document.createElement("a");
  hRootUrl.href = hike.rootLink;
  hRootUrl.target = "_blank";
  hRootUrl.innerText = "Click see to view full root";

  const hRootSchema = document.createElement("img");
  hRootSchema.classList.add("rootSchema");
  hRootSchema.src = `.${hike.rootImg}`;
  hDetailsImg.append(hRootUrl, hRootSchema);
  /*end roote schema */
  hDetailsWrapper.append(hDetails, hDetailsImg);
  /* end root details */

  /* root images */
  const hImages = document.createElement("div");
  hImages.classList.add("rootImages");

  const img1 = document.createElement("img");
  img1.src = `.${hike.rootPhoto1}`;

  const img2 = document.createElement("img");
  img2.src = `.${hike.rootPhoto3}`;

  const img3 = document.createElement("img");
  img3.src = `.${hike.rootPhoto3}`;

  hImages.append(img1, img2, img3);
  /* root images */
  card.append(hDetailsWrapper, hImages);
  hikesWrapper.append(card);

  console.log(hike);
};

getHike();

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", async () => {
  btnDelete.disabled = true;
  const response = await fetch(
    `https://695e17f82556fd22f6774a1f.mockapi.io/hiking/${id}`,
    {
      method: "DELETE",
    }
  );

  const hike = await response.json();

  setTimeout(() => {
    if (hike) {
      window.location.replace("../index.html");
    }
  }, 2000);

  console.log(hike);
});
