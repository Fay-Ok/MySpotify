var moduleName = "artistsController.module";

angular.module(moduleName, []);

(function () {

    function ArtistsController($scope, $http) {
    }

    ArtistsController.prototype.displayAlbumInfo = function ($scope) {

        $scope.displayAlbumInfo = function () {
            console.log("hello");
        };
    };

    angular.module(moduleName).controller('artistsController',ArtistsController);

})();


