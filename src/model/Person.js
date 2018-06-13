import * as I from 'immutable';

const PersonRecord = I.Record({
  name: null,
  age: null,
  skills: null,
});

class Person extends PersonRecord {
  constructor(name, age, skills) {
    super({
      name,
      age,
      skills,
    });
  }
}

export default Person;
