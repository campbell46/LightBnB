# LightBnB Project

A simple multi-page AirBnB clone that uses a server-side Javascript to display the information from queries to web page via SQL queries.

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Final Product

LightBnB App: !['Screenshot of App'](https://github.com/campbell46/LightBnB/blob/main/docs/Screenshot_App.png)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Create tables with the following psql commands:
  - `\i migrations/01_schema.sql`
  - `\i migrations/02_schema.sql`
5. Add data to database with the following psql commands:
  - `\i seeds/01_seeds.sql`
  - `\i seeds/02_seeds.sql`
6. Start the web server using the `npm run local` command. The app will be served at <http://localhost:3000/>.
7. Go to <http://localhost:3000/> in your browser.

## Dependencies

- Express
- Node
- Bcrypt
- Body-parser
- pg
- Cookie-session

## Dev Dependencies

- Nodemon