angular.module('pokedexController', [])

    .controller('mainController', ['$scope', '$http', 'pokedex', function ($scope, $http, pokedex) {
        $scope.selectedPokemon = {
            name: "Select the pokemon",
            attack: "Select the pokemon",
            height: "Select the pokemon",
            defense: "Select the pokemon",
            happiness: "Select the pokemon",
            hp: "Select the pokemon"
        }

        //use the service
        pokedex.get()
            .success(function (data) {
                $scope.pokemons = data;

            });


        $scope.getPokemon = function (id) {
            $http.get('http://pokeapi.co/' + id)
                .success(function (data) {
                    $scope.selectedPokemon = data;
                    if (data.sprites.length !=0) {
                        getImage(data.sprites[0].resource_uri)
                    }
                    else {
                        $scope.imageURL = ""
                    }
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };


        function getImage(spriteURL) {
            $http.get('http://pokeapi.co' + spriteURL)
                .success(function (data) {
                    $scope.imageURL = 'http://pokeapi.co' + data.image;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }

    }])


