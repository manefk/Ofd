var myApp = angular.module('app', []);

 myApp.controller('mainController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
    this.links = [
      {text: "ОФД со скидкой", icon: "ofd.svg", active: "true"},
      {text: "Закупка ККТ и ФН на выгодных условиях", icon: "zak.svg", active: "false"},
      {text: "Электронная подпись", icon: "sign.svg", active: "false"},
      {text: "Маркировка", icon: "mark.svg", active: "true" }
    ]
    this.setActive = l => l.active = true 
  
  });



