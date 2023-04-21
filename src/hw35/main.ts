//! HW 35
//!_______________________________________________________________________________________

type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: Array<string>;
  hasChildren: boolean;
  hasEducation: boolean;
};

type Users = User[];

const users: Users = [
  {
    name: 'Harry Felton',
    phone: '(09) 897 33 33',
    email: 'felton@gmail.com',
    animals: ['cat'],
    cars: ['bmw'],
    hasChildren: false,
    hasEducation: true
  },
  {
    name: 'May Sender',
    phone: '(09) 117 33 33',
    email: 'sender22@gmail.com',
    hasChildren: true,
    hasEducation: true
  },
  {
    name: 'Henry Ford',
    phone: '(09) 999 93 23',
    email: 'ford0@gmail.com',
    cars: ['bmw', 'audi'],
    hasChildren: true,
    hasEducation: false
  }
];

// Task 1
//___________________________________________________________________________________

function nameString(users: Users): string {
  return users.reduce((accumulator, user, index) => {
    const separator = index === users.length - 1 ? '' : ', ';
    return accumulator + (user.name ? user.name + separator : '');
  }, '');
}

console.warn(nameString(users));

// Task 2
//___________________________________________________________________________________

function totalCars(users: Users): number {
  return users.reduce((accumulator, user) => {
    return accumulator + (user.cars ? user.cars.length : 0);
  }, 0);
}

console.warn(totalCars(users));

// Task 3
//___________________________________________________________________________________

function isEducation(users: Users): Array<User> {
  return users.filter((user) => {
    return user.hasEducation === true;
  });
}

console.warn(isEducation(users));

// Task 4
//___________________________________________________________________________________

function isanimals(users: Users): User[] {
  return users.filter((user) => {
    return user.animals !== undefined;
  });
}

console.warn(isanimals(users));

// Task 5
//___________________________________________________________________________________

function carBrand(users: Users): string {
  return users.flatMap((user) => user.cars ?? []).join(', ');
}

console.warn(carBrand(users));
