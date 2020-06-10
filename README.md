# Usage/Setup

1. Ensure you have a recent version of PHP (^7.x), and access to database (note: this setup is configured for MySQL).
2. Create a database, e.g. install MySQL, and ensure you have a user (can be root, if just noodling).

```sh
mysql -u {username} -p'{password}'
show databases;
create database {databasename};
```
3. Create a file called `.env` using contents frpm the `.env.example` file in root, then on the CLI run `php artisan key:generate` in the project root, and this should create the APP_KEY cipher in the `.env` file.
4. Add the following key/value pairs referencing the database values from step 2 above:

```sh
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE={databasename}
    DB_USERNAME={username}
    DB_PASSWORD={password}
```
5. install composer packages: `composer install`

6. Then run the following in the project root directory to (1) install node dependencies, (2) create tables and seed mock 'PowerUnits' data into the database, (3) ensure correct permissions for Laravel to write to log files, and (4) ensure that Laravel's mix manifest (i.e. webpack lite) is built:

```sh
npm i
php artisan migrate:fresh --seed
sudo chgrp -R www-data storage
sudo chown -R www-data storage
sudo chmod -R 777 storage/
npm run prod
```

## Development Notes

This repo contains basic Http controller methods for storage and retrieval, and wraps XHR in some middleware to check for existence of a header key, which the axios package is configured to provide by default. It adds a single component, i.e. `Form`, React front-end to provide browser controls to make calls to the registered api endpoints for storage and retrieval. The React component also provides basic output messaging, and conditional rendering of html elements using React component state.
