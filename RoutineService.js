const routines = [];

class RoutineService {
  static getByUser(userId) {
    return Promise.resolve(routines.filter(r => r.userId === userId));
  }

  static addRoutine(routine) {
    routines.push(routine);
    return Promise.resolve(routine);
  }
}
export default RoutineService;
