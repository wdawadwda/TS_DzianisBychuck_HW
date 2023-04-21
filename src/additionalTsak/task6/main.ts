/*
Intro:
    Filtering requirements have grown. We need to be
    able to filter any kind of Persons.
Exercise:
    Fix typing for the filterPersons so that it can filter users
    and return User[] when personType='user' and return Admin[]
    when personType='admin'. Also, filterPersons should accept
    partial User/Admin type according to the personType.
    `criteria` argument should behave according to the
    `personType` argument value. `type` field is not allowed in
    the `criteria` field.
Higher difficulty bonus exercise:
    Implement a function `getObjectKeys()` which returns more
    convenient result for any argument given, so that you don't
    need to cast it.
    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);
*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  return ` - ${person.name}, ${person.age}, ${
    person.type === 'admin' ? person.role : person.occupation
  }`;
}

export function filterPersons(
  persons: Person[],
  personType: Admin['type'],
  criteria: Partial<Admin>
): Admin[];
export function filterPersons(
  persons: Person[],
  personType: User['type'],
  criteria: Partial<User>
): User[];
export function filterPersons(
  persons: Person[],
  personType: Person['type'],
  criteria: Partial<Person>
): Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      const criteriaKeys = Object.keys(criteria) as (keyof Person)[];
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.debug('Users of age 23:');
console.debug(usersOfAge23.map(logPerson));

console.debug('Admins of age 23:');
console.debug(adminsOfAge23.map(logPerson));

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
