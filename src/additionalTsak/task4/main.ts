/*
Intro:
    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.
Exercise:
    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.
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
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person): boolean {
  return person.type === 'admin';
}

export function isUser(person: Person): boolean {
  return person.type === 'user';
}

export function logPerson(person: Person): string {
  let additionalInformation = '';
  if (isAdmin(person) && 'role' in person) {
    additionalInformation = person.role;
  }
  if (isUser(person) && 'occupation' in person) {
    additionalInformation = person.occupation;
  }
  return ` - ${person.name}, ${person.age}, ${additionalInformation}`;
}

console.debug('Admins:');
console.debug(persons.filter(isAdmin).map(logPerson));

console.debug('Users:');
console.debug(persons.filter(isUser).map(logPerson));

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
