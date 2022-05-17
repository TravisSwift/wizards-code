const router = require("express").Router();
const { User, Character } = require("../../models");

router.get("/", (req, res) => {
    Character.findAll({
        attributes: ["id", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "class", "name", "str", "dex", "con", "int", "wis", "cha", "proficiency", "str_save", "dex_save", "con_save", "int_save", "wis_save", "cha_save", "acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "persuasion", "religion", "sleight_of_hand", "stealth", "survival", "passive_perception", "armor_class", "initiative", "speed", "hit_points", "hit_dice", "languages"],
        include: [
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
        .then(dbCharacterData => res.json(dbCharacterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/:id", (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "class", "name", "str", "dex", "con", "int", "wis", "cha", "proficiency", "str_save", "dex_save", "con_save", "int_save", "wis_save", "cha_save", "acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "persuasion", "religion", "sleight_of_hand", "stealth", "survival", "passive_perception", "armor_class", "initiative", "speed", "hit_points", "hit_dice", "languages"],
        include: [
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
        .then(dbCharacterData => {
            if (!dbCharacterData) {
                res.status(404).json({ messgae: "No character found with this id" });
                return;
            }
            res.json(dbCharacterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/", (req, res) => {
    Character.create({
        user_id: req.session.user_id,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        intelligence: req.body.intelligence,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
        class: req.body.class,
        name: req.body.name,
        str: req.body.str,
        dex: req.body.dex,
        con: req.body.con,
        int: req.body.int,
        wis: req.body.wis,
        cha: req.body.cha,
        proficiency: req.body.proficiency,
        str_save: req.body.str_save,
        dex_save: req.body.dex_save,
        con_save: req.body.con_save,
        int_save: req.body.int_save,
        wis_save: req.body.wis_save,
        cha_save: req.body.cha_save,
        acrobatics: req.body.acrobatics,
        animal_handling: req.body.animal_handling,
        arcana: req.body.arcana,
        athletics: req.body.athletics,
        deception: req.body.deception,
        history: req.body.history,
        insight: req.body.insight,
        intimidation: req.body.intimidation,
        investigation: req.body.investigation,
        medicine: req.body.medicine,
        nature: req.body.nature,
        perception: req.body.perception,
        persuasion: req.body.persuasion,
        religion: req.body.religion,
        sleight_of_hand: req.body.sleight_of_hand,
        stealth: req.body.stealth,
        survival: req.body.survival,
        passive_perception: req.body.passive_perception,
        armor_class: req.body.armor_class,
        initiative: req.body.initiative,
        speed: req.body.speed,
        hit_points: req.body.hit_points,
        hit_dice: req.body.hit_dice,
        languages: req.body.languages
    })
        .then(dbCharacterData => res.json(dbCharacterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put("/:id", (req, res) => {
    Character.update(
        {
            strength: req.body.strength,
            dexterity: req.body.dexterity,
            constitution: req.body.constitution,
            intelligence: req.body.intelligence,
            wisdom: req.body.wisdom,
            charisma: req.body.charisma,
            class: req.body.class,
            name: req.body.name,
            str: req.body.str,
            dex: req.body.dex,
            con: req.body.con,
            int: req.body.int,
            wis: req.body.wis,
            cha: req.body.cha,
            proficiency: req.body.proficiency,
            str_save: req.body.str_save,
            dex_save: req.body.dex_save,
            con_save: req.body.con_save,
            int_save: req.body.int_save,
            wis_save: req.body.wis_save,
            cha_save: req.body.cha_save,
            acrobatics: req.body.acrobatics,
            animal_handling: req.body.animal_handling,
            arcana: req.body.arcana,
            athletics: req.body.athletics,
            deception: req.body.deception,
            history: req.body.history,
            insight: req.body.insight,
            intimidation: req.body.intimidation,
            investigation: req.body.investigation,
            medicine: req.body.medicine,
            nature: req.body.nature,
            perception: req.body.perception,
            persuasion: req.body.persuasion,
            religion: req.body.religion,
            sleight_of_hand: req.body.sleight_of_hand,
            stealth: req.body.stealth,
            survival: req.body.survival,
            passive_perception: req.body.passive_perception,
            armor_class: req.body.armor_class,
            initiative: req.body.initiative,
            speed: req.body.speed,
            hit_points: req.body.hit_points,
            hit_dice: req.body.hit_dice,
            languages: req.body.languages
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbCharacterData => {
            if (!dbCharacterData) {
                res.status(404).json({ message: "No character found with this id" });
                return;
            }
            res.json(dbCharacterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete("/:id", (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCharacterData => {
            if (!dbCharacterData) {
                res.status(404).json({ messgae: "No character found with this id " });
                return;
            }
            res.json(dbCharacterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;