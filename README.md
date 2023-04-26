# Tech-Blog

## Description

This is a Tech Blog web app designed to create, update and delete posts on any tech field as well as leave comments.<br/>


## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Questions](#questions)
- [License](#license)

## Installation


- Clone application [Tech-Blog](https://github.com/TerryKor/Tech-Blog)<br />

- Create `.env` file in derictory using this sample:<br />
```
DB_NAME='tech_blog_db'(database name)
DB_PASSWORD=''(password)
DB_USER=''(username)
```
- Then in file directory, to install necessary dependencies, run the following command:
```
npm i
```
- To seed the data, run the following command:
```
node ./seeds/index.js
```
- To run the app run the following command:<br />
```
node server.js
```

- Note: please make sure you have installed [MySQL](https://www.mysql.com/downloads/) and created account;<br />

- To create schema run the following commands:<br />
to login to MYSQL and enter password when prompted, run the following command:<br />
```
mysql -u root -p (where "root" is your user name)
```
- then run:
```
source ./db/schema.sql 
```

## Usage

- See deplpoyed page [here](). Otherwise follow Insatallation instructions<br />


## Contribution

Application was created by Terry Kornienko and if you want to contribute send me an email.<br />

## Questions

My Email:
[misterfreemann@gmail.com](mailto:misterfreemann@gmail.com)
My Github:
[TerryKor](https://github.com/TerryKor)

## License

![badge](https://img.shields.io/badge/license-MIT-blue)