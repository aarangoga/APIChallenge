// updateUser.spec.js

describe('Actualizar el usuario creado', () => {
  let createdUser = 'LinaMaestre'; // Set the created user's username here

  it('Successfully updates the created user', () => {
    // Perform the PUT request to update the user
    cy.request({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/user/${createdUser}`,
      body: {
        id: 16, // Replace with the user's ID
        username: 'updatedLina',
        email: 'updated@example.com',
        phone: '9876543210',
        userStatus: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq('updatedLina');
      expect(response.body.email).to.eq('updated@example.com');
      expect(response.body.phone).to.eq('9876543210');
      expect(response.body.userStatus).to.eq(1);
    });
  });
});
