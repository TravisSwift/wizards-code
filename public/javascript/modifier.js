const getModifier = (stat) => {
    // stat will be rounded down (so 9 is -1 & 11 is 0)
    let mod = Math.floor((stat - 10) / 2);
    return mod;
}