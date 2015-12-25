angular.module('toggles.controller', [])
  .controller('TogglesController', TogglesController);

TogglesController.$inject = ['colorClasses'];

function TogglesController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}
