class User {
  constructor(id, name, role, status = 'active') {
    this.id = id;
    this.name = name;
    this.role = role;
    this.status = status;
  }

  hasPermission(permission, permissionsTable) {
    return permissionsTable.some(
      (p) => p.user_id === this.id && p.permission_type === permission && p.value === true
    );
  }
}
export default User;
