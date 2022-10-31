<script setup lang="ts">
import {ref} from "vue";

const pokemons = ref([]);

async function getPokemon(){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemon = await data.json();
    console.log(pokemon)
    pokemons.value = pokemon.results;
}

</script>

<template>
<button @click="getPokemon">Get Pokemon
</button>
<div v-for="pokemon, index in pokemons" :key="index">
    <h4>{{pokemon.name}}</h4>
   <br/>
</div>
</template>