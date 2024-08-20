let object = {
  book: "work hard",
  no: "2",
};

let obj = object.find((ob) => {
  return (ob.book = "work hard");
});

console.log(obj);

(obj = {
  book: "rich dad poor DAD",
  no: "3",
}),
  console.log(obj);
console.log(object);
