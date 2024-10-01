const getCountry = (alphacode, displayCountry) => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v2/all");

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState == 4 && e.target.status == 200) {
      const countryArray = JSON.parse(e.target.responseText);
      JSON.parse(e.target.responseText);
      let foundCountry = countryArray.find(
        (country) => country.alpha2Code == alphacode
      );
      displayCountry(foundCountry.name);
    } else if (e.target.readyState == 4) {
      console.log("an error has occured");
    }
  });

  request.send();
};

const getPuzzle = () => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.status == 200 && request.readyState == 4) {
      let data = JSON.parse(request.responseText);
      displayCountry(data.puzzle);
    } else if (request.readyState == 4) {
      console.log("error has occured");
    }
  });
  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3");
  request.send();
};
