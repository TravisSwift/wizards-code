// calculate armor class (10 + dex + armor)
const getAc = (dex, armor) => {
    let ac = 10 + dex + armor;
    return ac;
}