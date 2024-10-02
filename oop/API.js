const getCountry = (alphacode) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState == 4 && e.target.status == 200) {
        const countryArray = JSON.parse(e.target.responseText);
        JSON.parse(e.target.responseText);
        let foundCountry = countryArray.find(
          (country) => country.alpha2Code == alphacode
        );
        resolve(foundCountry.name);
      } else if (e.target.readyState == 4) {
        reject("an error has occured");
      }
    });

    request.open("GET", "https://restcountries.com/v2/all");
    request.send();
  });

const getPuzzle = (wordcount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.status == 200 && request.readyState == 4) {
        let data = JSON.parse(request.responseText);
        resolve(data.puzzle);
      } else if (request.readyState == 4) {
        reject("error has occured");
      }
    });
    request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordcount}`);
    request.send();
  });
