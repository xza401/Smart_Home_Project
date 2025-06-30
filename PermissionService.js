const permissions = [];

class PermissionService {
  static getUserPermissions(userId) {
    return Promise.resolve(permissions.filter(p => p.userId === userId));
  }

  static setPermission(userId, type, value) {
    const perm = permissions.find(p => p.userId === userId && p.permissionType === type);
    if (perm) {
      perm.value = value;
    } else {
      permissions.push({ id: permissions.length + 1, userId, permissionType: type, value });
    }
    return Promise.resolve();
  }
}
export default PermissionService;
