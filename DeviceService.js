const devices = [];

class DeviceService {
  static getAll() {
    return Promise.resolve(devices);
  }

  static updateStatus(deviceId, status) {
    const device = devices.find(d => d.id === deviceId);
    if (device) device.status = status;
    return Promise.resolve(device);
  }
}
export default DeviceService;
