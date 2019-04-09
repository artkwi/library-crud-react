module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        books: _.times(5, function(n) {
            return {
                id: n,
                name: faker.name.title(),
                author: faker.name.findName() + " " + faker.name.lastName(),
                description: faker.lorem.text()
            }
        })
    }
}
