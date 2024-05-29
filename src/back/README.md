# Organick API

Nest.js RESTful API for Organick grocery store This is a website for Organick, a fictional organic grocery store. Organick is a website that offers a range of organic products, provides users with the ability to browse and purchase products. The website has a modern and user-friendly design that emphasizes the importance of natural and organic living.

## How to run

1. Clone the repository: ```git clone https://github.com/organick-store/api/```
2. Open folder organick-api ```cd organick-api```
3. Install dependecies: ```npm i```
4. Create .env file and put there you data about DB, JWT-tokens and mail
5. Set up your DB using setup/setup.sh script: ```sh setup.sh```
>**Note** You have to have [pgAdmin](https://www.pgadmin.org/) and [PostgreSQL](https://www.postgresql.org/) installed on your machine
6. Now we need to fill products table, run ```npm run migration:run```
7. After you set everything up, you can go to organick-api directory back and run ```npm run start``` to statt the server

## How to test

1. Clone the repository: ```git clone https://github.com/organick-store/api/```
2. Open folder organick-api ```cd organick-api```
3. Install dependecies: ```npm i```
4. Now you can run tests: ```npm run test```

