//import { useState } from "react";
import { router } from "expo-router";
import { Image, Pressable, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.split("/").filter(Boolean).at(-1);

  const PokemonImageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png";
  //split() Separa partes de una array en partes dependiendo del " "
  //filter() Retorna los valores que cumplen una condicion
  // at() Obtiene un elemento del array

  return (
    <Pressable
      style={{
        padding: 10,
        borderWidth: 1,
        alignItems: "center",
        borderColor: "green",
      }}
      onPress={() => router.push(`/pokemon/${props.name}`)}
    >
      <Image
        source={{ uri: PokemonImageUrl }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}
