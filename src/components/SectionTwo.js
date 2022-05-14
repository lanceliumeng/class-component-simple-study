import React, { Component } from "react";
import Section from "./style/Section";
import Button from "./style/Button";
import pokes from "./data/pokes.json";

class SectionTwo extends Component {
  constructor() {
    super();
    this.state = {
      pokeName: "pikachu",
      pokeCount: pokes.length,
      imgSrc: null,
      abilities: null,
      show: false,
    };
    /*If we binding event handler methods to an instance, in this case.
     then we don't need to write this.getPokemons.bind(this) in JSX. this.getPokemons is fine then */
    this.getPokemons = this.getPokemons.bind(this);
    this.showAbility = this.showAbility.bind(this);
  }

  getPokemons(poke) {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        typeof poke === "string" ? poke : poke.target.value
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          pokeName: data.name,
          imgSrc: data.sprites.other["official-artwork"].front_default,
          abilities: data.abilities,
          show: !this.state.show,
        })
      ) //data finally will give us pokemons array
      .catch((error) => console.error(error));
  }

  showAbility() {
    this.setState({
      show: !this.state.show,
    });
  }

  /* 
  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
  Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  */
  componentDidMount() {
    this.getPokemons(this.state.pokeName);
  }

  render() {
    const { pokeName, pokeCount, imgSrc, abilities, show } = this.state;
    return (
      <Section>
        <h3>I have {pokeCount} POKEMONS!!!</h3>
        <select onChange={this.getPokemons}>
          {pokes.map((poke) => (
            <option key={poke.id}> {poke.name} </option>
          ))}
        </select>
        <p>{pokeName}</p>
        <img src={imgSrc} alt={pokeName} />

        <h4>Here are my abilities:</h4>
        <ul>
          {show &&
            abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
        </ul>
        <Button onClick={this.showAbility}>Come Out!</Button>
      </Section>
    );
  }
}

export default SectionTwo;
