
# Install node, npm, psql

# create database named golden_harvest
# start sql server on port 5432 (default sql port)

Run the following commands

# ~% cd /backend

# ~% npm install

# ~% knex migrate:latest
# run the query 

insert  into golden_harvest.golden_harvest."plans" (id, number_of_months) values 
(1000000,10)

on the database

# ~% npm run dev-start

hit the API's in the postman collection shared