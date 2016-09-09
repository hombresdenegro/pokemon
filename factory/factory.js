 (function()
 	{
 		'use strict';
 		angular
 		.module("pkm")
 		.factory("apiPokemon",apiPokemon);
 		
 		apiPokemon.$inject=["$resource"];
 		function apiPokemon($resource){ 	
 			return $resource("https://pokeapi.co/api/v2/pokemon/:id");
 			// return $resource("https://pokeapi.co/api/v1/pokemon/?limit=60&offset=2"); 	
 			
 		}; 
 	})();