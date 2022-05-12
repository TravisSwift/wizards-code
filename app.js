const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


console.log(`
=================
Create a New Character!
=================
`);

const promptUser = () => {
  return inquirer.prompt([
      
    {
      type: 'input',
      name: 'name',
      message: 'Character name?',
 }
  ]);
};

const promptProject = portfolioData => {
 

  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
        {
            type: 'checkbox',
            name: 'charClass',
            message: 'What is your class? (Check all that apply)',
            choices: ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
          },
          {
            type: 'checkbox',
            name: 'alignment',
            message: 'What is your alignment?',
            choices: ['Lawful Good', 'Neutral Good', 'Chaotic Good', ' Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil', 'Rogue']
          },
          {
            type: 'checkbox',
            name: 'race',
            message: 'What is your Race? (Check all that apply)',
            choices: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling', 'Changeling', 'Kalashtar', 'Shifter', 'Warforged', 'Aarakocra', 'Genasi', 'Goliath', 'Centaur', 'Loxodon', 'Minotaur', 'Simic Hybrid', 'Vedalken', 'Aetherborn', 'Aven', 'Khenra', 'Kor', 'Merfolk', 'Naga', 'Siren', 'Vampire', 'Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood', 'Gith', 'Locathah', 'Tortle', 'Verdan']
          },
      {
        type: 'checkbox',
        name: 'level',
        message: 'What is your level?',
        choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '19', '20', '21', '22', '23', '24', '15', '']
        },
        {
            type: 'input',
            name: 'hitPoints',
            message: 'Number of Hit Points?',
          },

      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to add additional information about your character?',
        default: false
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide more information about your character:',
        when: ({ confirmAbout }) => confirmAbout
      }

    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
     }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);
    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);
      console.log('Character created! Check out index.html in this directory to see it!');
    });
  });