const allUsers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "password123",
    type: "customer",
    createdAt: "2023-03-16T08:10:12.000Z",
  },
  {
    id: 2,
    firstName: "Cameron",
    lastName: "Reed",
    email: "cameron.reed@example.com",
    password: "myPassw0rd",
    type: "admin",
    createdAt: "2023-03-16T08:10:12.000Z",
  },
  {
    id: 3,
    firstName: "Alex",
    lastName: "Turner",
    email: "alex.turner@example.com",
    password: "passw0rd123",
    type: "owner",
    createdAt: "2023-03-15T16:23:45.000Z",
    updatedBy: 2,
    updatedAt: "2023-03-15T16:23:45.000Z",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@example.com",
    password: "1234abcd",
    type: "owner",
    createdAt: "2023-03-14T09:08:07.000Z",
  },
  {
    id: 5,
    firstName: "Avery",
    lastName: "Wilson",
    email: "avery.wilson@example.com",
    password: "PaSsw0rd",
    type: "customer",
    createdAt: "2023-03-13T20:15:30.000Z",
  },
];

class UserService {
  getAllUsers = async () => {
    return allUsers;
  };

  getUserById = (id) => {
    return allUsers.find((user) => user.id === id);
  };
}

export default new UserService();
