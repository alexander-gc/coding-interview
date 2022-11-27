function findLongestWord(str = "") {
  const words = str.split(" "); // ["Hola", "que", "tal", "como", "estaaaaas"]
  let longest = "";

  for (const word of words) if (word.length > longest.length) longest = word;

  return longest;
}

//console.log(findLongestWord("Hola que tal como estas amigoooo"));

const findLongestWord2 = (str = "") =>
  str.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(findLongestWord2("Hola que tal como estas amigoooo"));
