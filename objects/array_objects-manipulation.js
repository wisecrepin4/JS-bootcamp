const todos = [{
  name :" actions",
  description: "building a portfolio"
},
{
  name :"completions",
  description: "customers demand"
},
{
  name: "redo actions",
  description:"Tutorial learning"
}]
const deletetodo= function  (todos,text){
  let index = todos.findIndex (function (todo,){
    return  todo.description.toLowerCase()=== text.toLowerCase();
   })
  todos.splice(index,1);
}
deletetodo (todos,"Tutorial learning");
console.log(todos);
