angular.module('ionic-flat', [
  'ionic', 
  'bars.controller', 
  'buttons.controller',
  'checkboxes.controller',
  'colors.controller',
  'toggles.controller',
  'ranges.controller',
  'tabs.controller'
]);

angular.module('ionic-flat')
  .constant('colorClasses', {
    'yellow': [
      'cream-can',
      'ripe-lemon',
      'saffron'
    ],
    'red': [
      'chestnut-rose',
      'pomegranate',
      'thunderbird',
      'old-brick',
      'flamingo',
      'valencia',
      'tall-poppy',
      'monza',
      'cinnabar',
    ],
    'pink': [
      'razzmatazz',
      'sunset-orange',
      'wax-flower',
      'cabaret',
      'new-york-pink',
      'radical-red',
      'sunglo'
    ],
    'purple': [
      'snuff',
      'rebecca-purple',
      'honey-flower',
      'wistful',
      'plum',
      'seance',
      'medium-purple',
      'light-wisteria',
      'studio',
      'wisteria'
    ],
    'orange': [
      'confetti',
      'cape-honey',
      'california',
      'fire-bush',
      'tahiti-gold',
      'casablanca',
      'crusta',
      'sea-buckthorn',
      'lightning-yellow',
      'burnt-orange',
      'buttercup',
      'ecstasy',
      'sandstorm',
      'jaffa',
      'zest'
    ],
    'gray': [
      'white-smoke',
      'lynch',
      'pumice',
      'gallery',
      'silver-sand',
      'porcelain',
      'cascade',
      'iron',
      'edward',
      'cararra',
      'silver'
    ],
    'blue': [
      'san-marino',
      'alice-blue',
      'royal-blue',
      'picton-blue',
      'spray',
      'shakespeare',
      'humming-bird',
      'picton-blue-two',
      'curious-blue',
      'madison',
      'dodger-blue',
      'ming',
      'ebony-clay',
      'malibu',
      'summer-sky',
      'chambray',
      'pickled-bluewood',
      'hoki',
      'jelly-bean',
      'jacksons-purple',
      'jordy-blue',
      'steel-blue',
      'fountain-blue'
    ],
    'green': [
      'medium-turquoise',
      'aqua-island',
      'gossip',
      'dark-sea-green',
      'eucalyptus',
      'caribbean-green',
      'silver-tree',
      'downy',
      'mountain-meadow',
      'light-sea-green',
      'medium-aquamarine',
      'turquoise',
      'madang',
      'riptide',
      'shamrock',
      'niagara',
      'esmerald',
      'green-haze',
      'free-speech-aquamarine',
      'ocean-green',
      'niagara-one',
      'jade',
      'salem',
      'observatory',
      'jungle-green'
    ]
  });

angular.module('ionic-flat')
  .config(Routes);

function Routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html'
    })
    .state('bars', {
      url: '/bars',
      templateUrl: 'app/bars/bars.html',
      controller: 'BarsController as vm'
    })
    .state('buttons', {
      url: '/buttons',
      templateUrl: 'app/buttons/buttons.html',
      controller: 'ButtonsController as vm'
    })
    .state('checkboxes', {
      url: '/checkboxes',
      templateUrl: 'app/checkboxes/checkboxes.html',
      controller: 'CheckboxesController as vm'
    })
    .state('colors', {
      url: '/colors',
      templateUrl: 'app/colors/colors.html',
      controller: 'ColorsController as vm'
    })
    .state('toggles', {
      url: '/toggles',
      templateUrl: 'app/toggles/toggles.html',
      controller: 'TogglesController as vm'
    })
    .state('ranges', {
      url: '/ranges',
      templateUrl: 'app/ranges/ranges.html',
      controller: 'RangesController as vm'
    })
    .state('tabs', {
      url: '/tabs',
      templateUrl: 'app/tabs/tabs.html',
      controller: 'TabsController as vm'
    });
  
  $urlRouterProvider.otherwise('/');
} 

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('bars.controller', [])
  .controller('BarsController', BarsController);

BarsController.$inject = ['colorClasses']

function BarsController(colorClasses){
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}

angular.module('buttons.controller', [])
  .controller('ButtonsController', ButtonsController);

ButtonsController.$inject = ['colorClasses'];

function ButtonsController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}

angular.module('checkboxes.controller', [])
  .controller('CheckboxesController', CheckboxesController);

CheckboxesController.$inject = ['colorClasses'];

function CheckboxesController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}

angular.module('colors.controller', [])
  .controller('ColorsController', ColorsController);

ColorsController.$inject = ['colorClasses'];

function ColorsController(colorClasses){
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}

angular.module('ranges.controller', [])
  .controller('RangesController', RangesController);

RangesController.$inject = ['colorClasses'];

function RangesController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}

angular.module('tabs.controller', [])
  .controller('TabsController', TabsController);

TabsController.$inject = ['colorClasses'];

function TabsController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}

angular.module('toggles.controller', [])
  .controller('TogglesController', TogglesController);

TogglesController.$inject = ['colorClasses'];

function TogglesController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}
