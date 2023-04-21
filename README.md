## Установка

### Установка зависимостей

> Перед началом убедитесь, что используете правильную версию Node (`node -v`).<br/>
> Можете использовать [nvm](https://github.com/nvm-sh/nvm), чтобы изменить версию на указанную в файле `.nvmrc`.<br/> > [Сравнение менеджеров версий Node](https://www.honeybadger.io/blog/node-environment-managers/)

- Run command `npm ci`

## Команды

| Command           | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| `npm run start`   | Запуск приложения в режиме разработки.                                              |
| `npm run build`   | Сборка приложения.                                                                  |
| `npm run preview` | Запуск локального сервера для тестирование собранного приложения.                   |
| `npm run lint`    | Запуск проверок качества кода и форматирования.                                     |
| `npm run format`  | Запуск проверок качества кода и форматирования + автоматическое исправление ошибок. |

## Материалы (Typescript)

- [Шпаргалки](https://www.typescriptlang.org/cheatsheets)
- Enums:
  - Handbook: https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
  - [Перечисления (Enums) в TypeScript | by Sergey Bakaev | Medium](https://medium.com/@sergey.bakaev/%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-enums-%D0%B2-typescript-2c264c6965c2#:~:text=%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BB%D1%8F%D1%8E%D1%82%20%D0%BD%D0%B0%D0%BC%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%82%D1%8C%20%D0%BD%D0%B0%D0%B1%D0%BE%D1%80,%D1%8F%D0%B2%D0%BB%D1%8F%D1%8E%D1%82%D1%81%D1%8F%20%D0%BF%D0%BE%D0%B4%D1%82%D0%B8%D0%BF%D0%B0%D0%BC%D0%B8%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%82%D0%B8%D0%BF%D0%B0%20number%20.)
  - Пример: [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/play?ts=4.5.5#code/KYOwrgtgBAygLgQzmAzgYQPYBNhQN4BQUUAogE5kZmY5QC8UALAAyMA0RsYAxt8Cumy4GAJlYdiMHnwE1gAVQAOWJMCz0oYgIwEAvgQPcMIFHFgAVAILn5MAPpoA8gBESGwsXKVqQgFxNxTilefkEcNDJgVSx-MXYg6VC5JRU4NVjmHV0oBBQoIxM4AG4DAjgAT0VceCRUOUcAIwArDQqqjAAzC2tbBxcSAG0Aa2Byzqg24HGYKxt7J1cAXRLDY1MoU1qUACV+RTXgfxrkMOFYRBO5ADovKjkSgvXNk92UfZNgRqaji7qhL+IDBmPXm-RuFDuQhWky4IQEjhAABtynI8gwSAAPbiIsA4AA8xz+ODY5y211uPhwAD4SjDgjIUAjkajLIizOiMXAyAhuHACb9TiTCacrvSkkIoAAfUmXISixKyIQpaI0gxAA)
- Type Guards:
  - Handbook: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
  - [Сужение типов | Карманная книга по TypeScript](https://typescript-handbook.ru/docs/ts-3/#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D0%B2-%D1%82%D0%B8%D0%BF%D0%B0-type-predicates)
  - [Что такое Type Guards в Typescript | by Nick Trayze | Medium](https://medium.com/@eqbits/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-type-guards-%D0%B2-typescript-24834d2b4f)
  - Пример: [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/play?ts=4.7.0-beta#code/C4TwDgpgBAsglgZwMYEEBOaCGIoF4oAUCwacAdgOZQA+UZArgLYBGEaNUzA9lwDYSYyASgDaAXQDcAKFCQoAZRLkK6LDnzFSlcdKlIuZYlESKtVfAXJh6wAFxR6ZANZkuAd2H2rN4wiiblPAA+KFkILgAzYzJrYDxcfAByAMpE3X1DOMZEVAxse3hkVWw8KBEARgAaKAAmauSuRggAfU1E6pJ6CGqagGZ6rmAACzZWkkTJPQMjFJU8kHtTZWL1KGyi+YA6CLheYDZLBCXKIWkgA)
- Generics:

  - Handbook: [TypeScript: Documentation - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content)
  - [Манипуляции с типами | Карманная книга по TypeScript](https://typescript-handbook.ru/docs/ts-6/)
  - Utility Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
  - [Дженерики в TypeScript / Хабр](https://habr.com/ru/company/tinkoff/blog/588655/)

- Перегрузка функций:
  - [Подробнее о функциях | Карманная книга по TypeScript](https://typescript-handbook.ru/docs/ts-4/#%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-function-overload)
  - Handbook: [TypeScript: Documentation - More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
  - Пример: [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/play?ts=4.7.0-beta#code/GYVwdgxgLglg9mABFATgQzAZ2HFBbAOTTwFMAKMYkgZThBQhIC5FNUYwBzAShbZQ6cA3AChQkWAmTosOfEVIUqteoz7suAbQC6vVhs47R46PCSoM2XISpLSKhs30CuiAD7PBOvf0HvPWtqIAN4iiIgwwIhkUACeAA4kcFGU9nSOiAC82YgARL5cudwhYeGIKCRQ9EipNOmMAHRQcACq8YkoAMJomOTcouEAvqUVVSg1yvUkDXho8WR2JMWZAHyItU2t7SRdPX39IsMiEAhs0pZypAAmCiRZ57LWt2S5AFJwABZgRaInWFCIYAwFBsAAylSgO3uFke+BINyoDUwIAARgVOGQAAwAGkQAEYDsdTgCYVY4QjSJhoTIyTZFJo3p9vrjcgAFSo7XK6IRAA)

## Build tools

### Vite

- [Официальная документация](https://vitejs.dev/guide/)

### Eslint

- [Официальная документация](https://eslint.org/)
- [ESLint. Знакомство](https://medium.com/@catwithapple/eslint-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE-69ffc19edbf8)

### Prettier

- [Официальная документация](https://prettier.io/)

### Lint staged:

- [Официальная документация](https://www.npmjs.com/package/lint-staged)
- [Make linting great again!](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8#.8qepn2b5l)

### Husky:

- [Официальная документация](https://typicode.github.io/husky/#/)

## Функциональное программирование

- Декларативный и императивный подход: [Основные принципы программирования: императивное и декларативное программирование](https://tproger.ru/translations/imperative-declarative-programming-concepts/)
- Функциональное программирование: [Frontend Stuff | Frontend Stuff](https://frontend-stuff.com/blog/tags/functional-programming/)
  - Reduce: https://codepen.io/staevs/pen/xxYzyRM
  - Curry: [Carry](https://codepen.io/staevs/pen/GRQGGpJ?editors=0010)[Curry](https://codepen.io/staevs/pen/KKQeegX)
  - Pure and “dirty” functions: [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChkEzBTpgBycAthAFzKlSgDmA3PgQDZykXV0PM2BZDACuHDiCoQA-PzCMQrXAF9cuUJFiIUAYS7p0UAPbHKOdsil96CwZYRwARqAhg6IUZSfQhBUqIAJhDg6HQY0ADaALpsarhiIAhgwMYg9G4RUABi4pLSABSimFDhJQCUZVh4wsXQAHRiEtYoALzIAAYAJNh1UI3EPNIqyD199Qbkwx1+yFBuolDpfXHqicmp6UyZJQDqwGAAFrnNhX1VUJVoJRbC82CL6TXCBPVvfQA0lsJN+TbdvRKAxIU2oIzGQMmvAgKg6lhUqwSoiSKTSyDggUCAGUHsFwAAVYz6bjoAoIAxGUyUOjEwwmMwfWxBELua7Qcq3AgINKkZCiAAOgTgkECtMpZmQ7WeLze9XJJPplC+L38uJZYWQkVl8rpVPqATxYHQjINLOi8PUtUFwogoopiv1atC9X5xUOBVN4HKbEs90efOtIrFitWQA)
  - Compose: [TypeScript: TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/play?ssl=22&ssc=18&pln=22&pc=39#code/MYewdgzgLgBKC2AHEECmMC8MAU2B0BAZpAJSYB8MAhgE4DmFMxEeNqAJgK7CoBKAlnQAWUXFWDAANHE40aZDJWCya2ccBLTadEgG4AUPtCRYdVFAByVeOizZoNAFwwH-MDuev3AbQC6jAG99GDhwaBhvQn4aaCsbaQAbKljrVH8sBzwIRAT+UQByGHy9YJg2KFkwCKiYy1TE5LqbXwMAX0NjcLMoADFo6AAZcyhUGMwcWicXKBo3Oj8FSiCQ8srqOTx4KkR7GcZMiE4AIy86bAAGaQBGEhL2ozDTcwBVRERRgGFkjnG1OU8ZnMFoxJpttrsaPsZngoCBXu8aF80NhbgYHiYYN14Z9vuwAJJgPL8KgJCDjBDIZGlLFvHFodiSanmPq1IZQEYxRkhbpxVD6Er6GkIpEcbDdFmDYajCBi8y87D5ABWICEVTAICSYGKqI6jxgbiJJLJWCFdI4BMNpIVytVMHVmuKaM6GtQeASIDOBqgxNJJH0QA)
- Big O:
  - [[Big O / Хабр](https://habr.com/ru/post/444594/)
  - [Шпаргалка по Big-O Notation: быстрые ответы на вопросы Big-O](https://bestprogrammer.ru/izuchenie/shpargalka-po-big-o-notation-bystrye-otvety-na-voprosy-big-o)
  - Binary search: [Binary search](https://codepen.io/staevs/pen/WNMyyOE?editors=0010)
