// calculate saving throw based on whether save is proficient or not
const getSaveorSkill = (saveSkill, prof, stat) => {
    if (saveSkill.isProficient) {
        return stat + prof;
    } else {
        return stat;
    }
}