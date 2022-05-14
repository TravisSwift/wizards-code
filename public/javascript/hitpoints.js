// calculate hp using con & hit die (hit die rolled separately?)
const getHp = (con, hitDieRolls, level) => {
    let sum = con * level;
    sum += hitDieRolls;
    return sum;
}