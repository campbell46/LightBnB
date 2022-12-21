# LightBnB Project

A simple multi-page AirBnB clone that uses a server-side Javascript to display the information from queries to web page via SQL queries. Create an account, search listings, view your listings and reservations, create new listings and log out.

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Final Product

Properties searched with minimum $815: !['Screenshot of properties page'](https://github.com/campbell46/LightBnB/blob/main/docs/properties_screenshot.png)

Create listing page: !['Screenshot of new listing page'](https://github.com/campbell46/LightBnB/blob/main/docs/listing_screenshot.png)


## Project ERD

['ERD for LightBnB'](https://github.com/campbell46/LightBnB/blob/main/docs/ERDs/lightBnB_ERD_Stretch.png)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Create database and tables using node-postgres:
  - Create and connect to database
  ```
  CREATE DATABASE lightbnb;
  \c lightbnb
  ```
  - cd into root folder and create tables with the following psql commands:
  ```
  \i migrations/01_schema.sql
  \i migrations/02_schema.sql
  ```
  - Add data to database with the following psql commands:
  ```
  \i seeds/01_seeds.sql
  \i seeds/02_seeds.sql
  ```
5. cd into LightBnB_WebApp-master, start the web server using the `npm run local` command.
6. Go to <http://localhost:3000/> in your browser.

## Dependencies

- express
- node
- bcrypt
- body-parser
- pg
- cookie-session

## Dev Dependencies
- nodemon