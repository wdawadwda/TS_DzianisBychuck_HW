//! HW 1
//!_______________________________________________________________________________________
type Subject = {
  students: number;
  teachers: number;
};

type Subjects = {
  mathematics: Subject;
  biology: Subject;
  geography: Subject;
  chemistry: Subject;
};

const subjects: Subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

// Task 1
//___________________________________________________________________________________

const subjectNames: string = Object.keys(subjects).join(", ");
console.log(subjectNames);


// Task 2
//___________________________________________________________________________________
const studentsAndTeachers: { students: number; teachers: number } = Object.values(subjects).reduce((acc, curr) => {
  acc.students += curr.students;
  acc.teachers += curr.teachers;
  return acc;
}, { students: 0, teachers: 0 });

console.log(studentsAndTeachers);

// Task 3
//___________________________________________________________________________________
const studentCount: number  = Object.values(subjects).reduce((acc, curr) => {
  return acc += curr.students;
}, 0);

const averageStudentCount: number = studentCount / Object.keys(subjects).length;
console.log(averageStudentCount);

// Task 4
//___________________________________________________________________________________
const subjectsArray: { [key: string]: Subject }[] = Object.entries(subjects).map(([subject, data]) => ({
  [subject]: data
}));

console.log(subjectsArray);

// Task 5
//___________________________________________________________________________________
type SortedSubjectsType = Array<{ [key: string]: Subject }>;
const sortedSubjects: SortedSubjectsType = Object.entries(subjects)
  .map(([subject, data]) => ({ [subject]: data }))
  .sort((a, b) => b[Object.keys(b)[0]].teachers - a[Object.keys(a)[0]].teachers);

console.log(sortedSubjects);

//! HW 2
//!_______________________________________________________________________________________
type FacultyMovie = {
  id: number;
  faculty?: string;
  subjects?: Array<string>;
  countStudents?: number;
  title?: string;
  year?: number;
  released?: string;
  runtime?: string;
  genre?: string[];
  director?: string;
  writer?: string;
  actors?: Array<string>;
  plot?: string;
  country?: string;
  poster?: string;
  imdbRating?: number;
  imdbVotes?: number;
  type?: string;
  boxOffice?: string;
  production?: string;
}

const faculties: FacultyMovie[] = [
  {
    id: 1,
    faculty: 'History department',
    subjects: ['The World History', 'History of Rome'],
    countStudents: 44
  },
  { 
    id: 2, 
    faculty: 'Department of Biology', 
    subjects: ['biology', 'chemistry'], 
    countStudents: 50 
  },
  { 
    id: 3, 
    faculty: 'Faculty of Mathematics', 
    subjects: ['mathematics', 'geometry', 'trigonometry'], 
    countStudents: 72 
  }, 
  {
    id: 4, 
    faculty: 'Faculty of Design', 
    subjects: ['ui', 'ux', 'graphic design'], 
    countStudents: 37
  }
];

const movies: FacultyMovie[] = [
  {
    id: 1,
    title: 'Black Widow',
    year: 2021,
    released: '09 Jul 2021',
    runtime: '134 min',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Cate Shortland',
    writer: 'Eric Pearson, Jac Schaeffer, Ned Benson',
    actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
    plot: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
    country: 'United States',
    poster: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: 'movie',
    boxOffice: '$138,027,361',
    production: 'Marvel Studios'
  },
  {
    id: 2,
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    year: 2011,
    released: '15 Jul 2011',
    runtime: '130 min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    director: 'David Yates',
    writer: 'Steve Kloves, J.K. Rowling',
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    plot: 'Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.',
    country: 'United Kingdom, United States',
    poster: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: 'movie',
    boxOffice: '$381,409,310',
    production: 'Heyday Films, Moving Picture Company, Warner Bros.'
  }
];
