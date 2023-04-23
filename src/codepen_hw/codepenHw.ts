interface CodepenHwUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
}

const codepen_hw_users: CodepenHwUser[] = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    age: 23
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    age: 20
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    age: 40
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    age: 36
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    age: 70
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    age: 45
  }
];
type Emails = string[];

type UserShortDetails = Pick<CodepenHwUser, 'id'> & { fullname: string };

type Stats = {
  gt30: number;
  gt40: number;
  gt18: number;
  avgAge: number;
};
type AlphabetFilterStats = {
  [Leter: string]: string[];
};
//Task 1
//____________________________________________

function getUserFullname(user: CodepenHwUser): string {
  return `${user.first_name} ${user.last_name}`;
}

export const fullnames: string = codepen_hw_users
  .map(getUserFullname)
  .join(', ');

//Task 2
//____________________________________________

function getEmail(user: CodepenHwUser): string {
  return user.email;
}
export const emails: Emails = codepen_hw_users.map(getEmail).sort();

//Task 3
//____________________________________________
function getUserId(user: CodepenHwUser): number {
  return user.id;
}

export const shortDetails: UserShortDetails[] = codepen_hw_users.map(
  (user: CodepenHwUser) => ({
    id: getUserId(user),
    fullname: getUserFullname(user)
  })
);

//Task 4
//____________________________________________
function getAge(user: CodepenHwUser): number {
  return user.age;
}

export const youngUsers: CodepenHwUser[] = codepen_hw_users
  .filter((user: CodepenHwUser) => getAge(user) < 40)
  .sort((a: CodepenHwUser, b: CodepenHwUser) => a.age - b.age);

//Task 5
//____________________________________________

export const stats: Stats = codepen_hw_users.reduce(
  (accumulator: Stats, user: CodepenHwUser, index: number) => {
    if (user.age > 40) {
      accumulator.gt40 += 1;
    }
    if (user.age > 30) {
      accumulator.gt30 += 1;
    }
    if (user.age > 18) {
      accumulator.gt18 += 1;
    }
    accumulator.avgAge = (user.age + accumulator.avgAge * index) / (index + 1);
    return accumulator;
  },
  {
    gt30: 0,
    gt40: 0,
    gt18: 0,
    avgAge: 0
  }
);

//Task 6
//____________________________________________

const getFirstLetter = (string_: string) => string_.slice(0, 1);

const reduceAlphabetStats = (users: CodepenHwUser[]) => {
  return users.reduce(
    (accumulator: AlphabetFilterStats, user: CodepenHwUser) => {
      const firstLetter = getFirstLetter(user.last_name);
      if (!accumulator[firstLetter]) {
        accumulator[firstLetter] = [];
      }
      accumulator[firstLetter].push(user.last_name);
      return accumulator;
    },
    {}
  );
};

export const alphabetStats: AlphabetFilterStats =
  reduceAlphabetStats(codepen_hw_users);

/**
 * Пример каррирования
 **/
const getUsersFilter = (age: number) => (user: CodepenHwUser) => user.age > age;

const isPensioner = getUsersFilter(63);
const isAdult = getUsersFilter(21);

export const pensioneers: CodepenHwUser[] =
  codepen_hw_users.filter(isPensioner);
export const adults: CodepenHwUser[] = codepen_hw_users.filter(isAdult);
