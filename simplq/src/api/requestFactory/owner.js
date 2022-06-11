/**
 * Subscribe to backend for notifications
 *
 * @param {String} deviceId - device token that identifies this device
 * @returns {Object} request - partial axios request without baseURL
 */
export const linkDevice = (deviceId) => ({
  method: 'put',
  url: `/owner/link?deviceId=${deviceId}`,
});

/**
 * Unsubscribe to backend for notifications
 *
 * @param {String} deviceId - device token that identifies this device
 * @returns {Object} request - partial axios request without baseURL
 */
export const unlinkDevice = (deviceId) => ({
  method: 'patch',
  url: `/owner/unlink?deviceId=${deviceId}`,
});
