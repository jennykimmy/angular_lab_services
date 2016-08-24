angular.module('todosApp')
  .controller('TodosController', TodosController)

function TodosController($scope) {
  $scope.add = addTodo
  $scope.newTodo = {task:"", completed: false}
  $scope.ids = 4

  $scope.all = [
    {id: 1, task:"Wash my new awesome Honda Crz", completed: false},
    {id: 2, task:"Learn more about Angular", completed: true},
    {id: 3, task:"Feed my amazing Shiba Inu", completed: false},
    {id: 4, task:"Get a dog and a car", completed: true}
  ]

  function addTodo() {
    $scope.all.push({
      id: $scope.ids,
      task: $scope.newTodo.task,
      completed: false
    }

    )
    $scope.ids++;
    $scope.newTodo.task = ''
  }


}
