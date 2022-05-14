// use proficiency and stat modifiers to determine skill bonus
const getSkill = (prof, stat) => {
    return prof + stat;
}

// calculate saving throw based on whether save is proficient or not
const getSave = (save, prof, stat) => {
    if (save.isProficient) {
        return stat + prof;
    } else {
        return stat;
    }
}