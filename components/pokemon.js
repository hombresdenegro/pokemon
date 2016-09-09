 (function(){

 		'use strict';
 		 var pok ={ 			
 			templateUrl : "./components/pokemons.html",
 			controller :pokemonCtrl
 		};

 		angular
	 		.module("pkm")
	 		.component("pok",pok);

	 	pokemonCtrl.$inject=["apiPokemon"];
	 	function pokemonCtrl(apiPokemon){
	 		var pokem=this;
	 		pokem.pok=null;
	 		pokem.apiData=apiPokemon.get({'id':pokem.id})
	 	 		.$promise.then(function(response){

	 	 			// pokem.pok=response.objects;	
	 	 			pokem.pok=response.results;	 	 	
	 	 			console.log(pokem.pok);
	 	 			// console.log(response.objects);
	 	 		})
	 	 	pokem.info=dosearch;

	 	 	function dosearch(url){
	 	 		alert(url);
	 	 		console.log("Holaclick");
	 	 	}
	 	}


 	})();
