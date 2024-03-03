export function healthIndicatorSort(character) {
  return character.sort((a, b) => b.health - a.health);
};