const rooms = [];

class RoomService {
  static getAll() {
    return Promise.resolve(rooms);
  }

  static setRoomStatus(roomId, status) {
    const room = rooms.find(r => r.id === roomId);
    if (room) room.currentStatus = status;
    return Promise.resolve(room);
  }
}
export default RoomService;
