const todos =[
  {
    text :'Order cat food',
    completed: true
  },
  {
    text :'Clean Kitchen',
    completed: false
  },
  {
    text :'Buy food',
    completed: true
  },
  {
    text :'Do Work',
    completed: false
  },
  {
    text :'Exercise',
    completed: true
  }

]
const filterArray = function (array,query){
return array.filter(function (note,index){
  return note.completed !== query

  
})
}
console.log(filterArray(todos,true));