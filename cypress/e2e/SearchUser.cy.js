// searchUser.spec.js

describe('Searches created user ', () => {
  let createdUser;

  before(() => {
    // Assume you have already created a user using the POST request in another file
    // Set the created user's username here
    createdUser = 'LinaMaestre'; // Replace this with the username of the created user
  });

  it('Successfully searches for the created user', () => {
    // Use the created user's username for the search
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/${createdUser}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(createdUser);
      expect(response.body.email).to.eq('LinaMaestre@example.com'); // Replace with the expected email
    });
  });
});
