const { faker } = require('@faker-js/faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const zipCode = faker.address.zipCode();

module.exports = {
    firstName,
    lastName,
    zipCode
};

