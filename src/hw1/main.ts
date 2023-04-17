export {}
//! HW 1
//!_______________________________________________________________________________________
type Subject<T extends number> = {
  students: T;
  teachers: T;
};
type SubjectKey = 'mathematics' | 'biology' | 'geography' | 'chemistry' | 'english' | 'russian language' | 'belarusian language' | 'history';

type Subjects = {
  [key in SubjectKey]?: Subject<number>;
};

type getSubjectNames = string | never;
type getStudentsAndTeachers = { students: number; teachers: number } | never;
type getStudentCount = number;
type getSubjectsArray = { [key: string]: Subject<number> }[];;
type SortedSubjectsType = Array<{ [key: string]: Subject<number> }>;

interface SchoolInterface {
  getSubjectNames: () => getSubjectNames;
  getStudentsAndTeachers: () => getStudentsAndTeachers;
  getStudentCount: () => getStudentCount;
  getSubjectsArray: () => getSubjectsArray;
  getSortedSubjects: () => SortedSubjectsType;
}

class School implements SchoolInterface {

  private subjectsArray: getSubjectsArray;

  constructor(private subjects: Subjects) {

    this.subjects = subjects;
    this.subjectsArray = this.getSubjectsArray();
  }

  private isSubjectsValid = (subject: any): subject is Subjects => {
    return (
      subject !== null &&
      typeof subject === 'object'
    );
  };

  public getSubjectNames = () => {
    if (this.isSubjectsValid(this.subjects)) {
      return Object.keys(this.subjects).join(", ");
    }else{
      throw new Error('Недопустимый тип');
    }
  };

  public getStudentsAndTeachers = () => {
    if (this.isSubjectsValid(this.subjects)) {
      return Object.values(this.subjects).reduce((acc, curr) => {
        acc.students += curr.students;
        acc.teachers += curr.teachers;
        return acc;
      }, { students: 0, teachers: 0 });
    }else{
      throw new Error('Недопустимый тип');
    }
  }

  public getStudentCount = () => {
    return Object.values(this.subjects).reduce((acc, curr) => {
      return acc += curr.students / Object.keys(this.subjects).length;;
    }, 0);
  }

  public getSubjectsArray = () => {
    return Object.entries(this.subjects).map(([subject, data]) => ({
      [subject]: data
    }));
  }

  public getSortedSubjects = () => {
    return this.subjectsArray
      .sort((a, b) => b[Object.keys(b)[0]].teachers - a[Object.keys(a)[0]].teachers);
  }

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
};

const subjects2: Subjects = {
  english: {
      students: 150,
      teachers: 5
  },
  'russian language': {
      students: 30,
      teachers: 2
  },
  'belarusian language': {
      students: 500,
      teachers: 35
  },
  history: {
      students: 200,
      teachers: 15
  }
};
const school = new School(subjects)
const school2 = new School(subjects2)

// Task 1
//___________________________________________________________________________________
const taskOne = school.getSubjectNames()
const taskOneSubj2 = school2.getSubjectNames()
console.log(`Объект 1: %s\nОбъект 2: %s`,taskOne, taskOneSubj2)

// Task 2
//___________________________________________________________________________________
const taskTwo = school.getStudentsAndTeachers()
const taskTwoSubj2 = school2.getStudentsAndTeachers()
console.log(`Объект 1: %o\nОбъект 2: %o`,taskTwo, taskTwoSubj2)

// Task 3
//___________________________________________________________________________________
const taskThree = school.getStudentCount()
const taskThreeSubj2 = school2.getStudentCount()
console.log(`Объект 1: %d\nОбъект 2: %d`,taskThree, taskThreeSubj2)
// Task 4
//___________________________________________________________________________________
const taskFour = school.getSubjectsArray()
const taskFourSubj2 = school2.getSubjectsArray()
console.log(`Объект 1: %o\nОбъект 2: %o`,taskFour, taskFourSubj2)

// Task 5
//___________________________________________________________________________________
const taskFive = school.getSortedSubjects()
const taskFiveSubj2 = school2.getSortedSubjects()
console.log(`Объект 1: %o\nОбъект 2: %o`,taskFive, taskFiveSubj2)
