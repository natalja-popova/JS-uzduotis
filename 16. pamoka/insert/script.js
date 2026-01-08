const country = document.getElementById("country");
const elevationTotal = document.getElementById("elevationTotal");
const isRadial = document.getElementById("isRadial");
const predictedTime = document.getElementById("predictedTime");
const rootName = document.getElementById("rootName");
const rootLink = document.getElementById("rootLink");
const rootImg = document.getElementById("rootImg");
const rootPhoto1 = document.getElementById("rootPhoto1");
const rootPhoto2 = document.getElementById("rootPhoto2");
const rootPhoto3 = document.getElementById("rootPhoto3");

const btnInsert = document.getElementById("btnInsert");

const insertStatus = document.getElementById("insertStatus");

const formWrapper = document.getElementById("formWrapper");

btnInsert.addEventListener("click", async () => {
  const hike = {
    country: country.value,
    elevationTotal: elevationTotal.value,
    isRadial: isRadial.value === "true",
    predictedTime: predictedTime.value,
    rootName: rootName.value,
    rootLink: rootLink.value,
    rootImg: rootImg.value,
    rootPhoto1: rootPhoto1.value,
    rootPhoto2: rootPhoto2.value,
    rootPhoto3: rootPhoto3.value,
  };
  if (country.value === "") {
    checkInsertStatus(
      "red",
      "Something went wrong, please check API link and added information."
    );
    return;
  }

  const response = await fetch(
    `https://695e17f82556fd22f6774a1f.mockapi.io/hiking`,
    {
      method: "POST",
      body: JSON.stringify(hike),
      headers: { "Content-Type": "application/json" },
    }
  );

  try {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const hikeRes = await response.json();
    console.log("SUCCESS:", hikeRes);
    checkInsertStatus("green", "Hike added succesfull");
    formWrapper.classList.toggle("hidden");

    !insertStatus.classList.contains("red") &&
      !insertStatus.classList.contains("hidden");
    setTimeout(() => {
      if (
        !insertStatus.classList.contains("red") &&
        !insertStatus.classList.contains("hidden")
      ) {
        window.location.replace("../index.html");
      }
    }, 2000);
  } catch (err) {
    console.error("Unsuccess:", err);
    checkInsertStatus(
      "red",
      "Something went wrong, please check API link and added information."
    );
  }
});
const checkInsertStatus = (satusClass, statusText) => {
  insertStatus.classList.remove("hidden", "red", "green");
  insertStatus.innerText = statusText;
  insertStatus.classList.add(satusClass);
};
