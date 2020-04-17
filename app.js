// assumption: at this stage random values can be repeating values

const fs = require('fs');

const firstNamesMale = ['Harry', 'Ronald', 'Lucius', 'Draco', 'Severus', 'Remus', 'Syriusz']
const firstNamesFemale = ['Jenny', 'Anna', 'Hermiona', 'Ginny', 'Luna', 'Molly']
const lastNames = ['Potter', 'Weasley', 'Malfoy', 'Dumbledore', 'Granger', 'Snape', 'Lupin', 'Black']
const genders = [ 'M', 'F'];

const getRandomGender = () => {
  return genders[Math.round(Math.random())];
}

const getRandomAge = () => {
  return Math.floor(Math.random() * (78 - 18 + 1)) + 18;
}

const getRandomFirstName = () => {
  const firstNames = [...firstNamesFemale, ...firstNamesMale];
  const index =  Math.floor(Math.random() * (firstNames.length));
  return firstNames[index];
}

const getRandomLastName = () => {
  const index =  Math.floor(Math.random() * (lastNames.length));
  return lastNames[index]; 
}

const createIdentity = () => {
  let identity = {
    firstName: getRandomFirstName(),
    lastName: getRandomLastName(),
    age: getRandomAge(),
    gender: getRandomGender(),
  };
  return identity; 
};

let identitiesArray = [];
const createIdentitiesArray = () => {
  for (let i = 0; i <= 20; i++) {
    identitiesArray.push(createIdentity());
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