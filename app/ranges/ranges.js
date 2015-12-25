angular.module('ranges.controller', [])
  .controller('RangesController', RangesController);

RangesController.$inject = ['colorClasses'];

function RangesController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}
