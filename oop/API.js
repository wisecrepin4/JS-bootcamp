const getCountry = (alphacode) => {
  fetch("https://restcountries.com/v2/all")
    .then((response) => {
      if (response.ok) {
        return response.json;
      } else {
        throw new Error("the url is broken I can't find the Data");
      }
    })
    .then((data) => {
      let country = data.find((count) => {
        count.alphacode = alphacode;
      });
      console.log(country.name);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPuzzle = (wordcount) => {
  fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("the url is broken data can't be found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(`the word is ${data.puzzle}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
// new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.status == 200 && request.readyState == 4) {
//       let data = JSON.parse(request.responseText);
//       resolve(data.puzzle);
//     } else if (request.readyState == 4) {
//       reject("error has occured");
//     }
//   });
//   request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordcount}`);
//   request.send();
// });
