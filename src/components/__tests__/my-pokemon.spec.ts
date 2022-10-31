import {render, screen, fireEvent} from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "../my-pokemon.vue";

describe("my-pokemon", ()=>{

  
    it.only("API works perfectly", async ()=>{   
        render(MyPokemon)
        const pokemon = await screen.findByText("Get Pokemon");
        await fireEvent.click(pokemon);
        const value = await screen.findByText("bulbasaur")
        expect(value.innerHTML).toBe("bulbasaur");
    })

});