# Just-tech-news

## Description
In this application, I have recreated some functionality that Hacker News implements.

This application able enables the creation and manipulation of comments on post data. It also enables users to vote on posts, create and manipulate posts, create, read, update, and delete a profile in the database, all with added security and authentication.

When we retrive post data from the API, we also see how many people voted on the post, who created the post, and who commented on the post.

![alt text](https://github.com/jdeschat/just-tech-news/blob/main/assets/img/just-tech-news.png)

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## User Story
```
AS A software developer
I WANT to be able to sharpen my API building skills
SO THAT I can keep up-to-date with modern practices and tools
```
## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Install express by entering ```npm i express```into the command line. Finally, the program can then be run by entering ```node develop/index.js``` into the command line, and answering each question appropriately.

To launch the MySQL command-line client, enter the flowing command in a Command Prompt window: ```mysql -u root -p ```. The ```-p```option is needed only if a root password is defined for MySQL. Enter the password when prompted.

Create and populate a table with MySQL, for example:
1.	mysql> show databases;
2.	mysql> CREATE DATABASE animals_db;
3.	mysql> use animals_db;
4.	mysql> Create TABLE dogs(
a.	-> id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
b.	-> petName VARCHAR(100),
c.	-> petAge INTEGER(11)
d.	-> );
5.	mysql> show tables;
6.	mysql> INSERT INTO dogs(petName, petAge) VALUES (‘Sam’, 6)
a.	-> ;
7.	mysql> INSERT INTO dogs(petName, petAge) VALUES (‘Ginger’, 8)
a.	-> ;
8.	mysql> SELECT * FROM dogs;

## Usage
1. Install npm: npm init -y
2. Install express: npm i express
3. Go to deployed link via Heroku (found below)
4. Test the API endpoints with Insomnia Core. For example:
o	Replace: http://localhost:3001 with the name of your Heroku app
o	For example: https://just-tech-news.herokuapp.com/api/posts
5. Ofcourse, all of your GET requests will return empty data sets, because you're connected to a brand new database. You'll need to make a few POST requests first to frill up the JawsDB database.

## Contributors
To contribute to Professional-README-generator, clone this repo locally and commit your code on a separate branch.
  
Contributors:

<a href="https://github.com/jdeschat/just-tech-news/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jdeschat/just-tech-news" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
- Node.js
- bcryt
- dotenv
- express
- mysql2
- sequelize
- Heroku
- JawsDB Database

## Questions
My Github username is jdeschat, which can be accessed here https://github.com/jdeschat/just-tech-news.

The Github page for this project can be accessed using the following link: https://jdeschat.github.io/Team_profile_generator/. This application is deployed on Heroku: https://just-tech-news-12.herokuapp.com/

You can reach me at jdeschat@gmail.com with additional questions.

