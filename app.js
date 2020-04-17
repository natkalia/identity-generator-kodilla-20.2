// TODO: check for repeating values (e.g. too identical identities or two identitcal first/last names)
// TODO: connect male names with male gender and female names with female gender

const fs = require('fs');

const firstNamesMale = ['Harry', 'Ronald', 'Lucius', 'Draco', 'Severus', 'Remus', 'Syriusz']
const firstNamesFemale = ['Jenny', 'Anna', 'Hermiona', 'Ginny', 'Luna', 'Molly']
const lastNames = ['Potter', 'Weasley', 'Malfoy', 'Dumbledore', 'Granger', 'Snape', 'Lupin', 'Black']
const genders = [ 'M', 'F'];

const getRandomIndex = arr => Math.floor(Math.random() * (arr.length));

let identitiesArray = [];
const createIdentitiesArray = () => {

  for (let i = 0; i <= 20; i++) {
    let identity = {};
    identity.gender = genders[getRandomIndex(genders)];

    identity.firstName = (identity.gender === 'M') ?
      firstNamesMale[getRandomIndex(firstNamesMale)] :
      firstNamesFemale[getRandomIndex(firstNamesFemale)];

    identity.lastName = lastNames[getRandomIndex(lastNames)];
    identity.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    
    identitiesArray.push(identity);
  }
  return identitiesArray;
};

let data = createIdentitiesArray();
data = JSON.stringify(data);

fs.writeFile('people.json', data, (err) => {
  if (err) {
    console.log('Something went wrong');   
    throw err;
  }
  console.log('File has been successfully generated! Check people.json');
});