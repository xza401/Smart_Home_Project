const users = [
  { id: 1, name: "Admin", role: "admin", status: "active" },
];

class UserService {
  static getAll() {
    return Promise.resolve(users);
  }
  static add(user) {
    users.push(user);
    return Promise.resolve(user);
  }
}
export default UserService;
