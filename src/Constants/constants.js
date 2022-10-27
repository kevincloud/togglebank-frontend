const API_MESSAGES = {
  USER_CREATION_SUCCESS: "User created successfully!",
  USER_LOGIN_SUCCESS: "User login successful!",
  PROFILE_UPDATE_SUCCESS: "Profile details successfully saved!",
  DEV_LOGS_STARTED: "Dev Logs Started. Logs can be found at localhost:9001/logs"
}

const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
}

module.exports = {
  ...API_MESSAGES,
  ...ALERT_TYPES
}
