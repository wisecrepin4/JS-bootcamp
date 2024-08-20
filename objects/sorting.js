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
const sortingArray = function (array){
  array.sort(function (a,b){
    if (a.completed <b.completed){
      return 1
    }
    else if (a.completed > b.completed) {
      return -1
    }
    else {
      return 0
    }
  })
}
sortingArray(todos);
console.log(todos);