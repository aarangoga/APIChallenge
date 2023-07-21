describe('Create a user', () => {

  it('Successfully creates a new user', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: {
        id: 3,
        username: 'LinaMaestre',
        email: 'LinaMaestre@example.com',
        phone: '1234567890',
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
      expect(response.body.username).to.eq('LinaMaestre');
      expect(response.body.email).to.eq('LinaMaestre@example.com');
    });
  });
});
