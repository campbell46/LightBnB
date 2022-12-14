///Users
const { getUserWithEmail, getUserWithId, addUser } = require('./queries/users');
exports.getUserWithEmail = getUserWithEmail;
exports.getUserWithId = getUserWithId;
exports.addUser = addUser;

/// Reservations
const { getAllReservations} = require('./queries/reservations');
exports.getAllReservations = getAllReservations;

/// Properties
const { getAllProperties, addProperty } = require('./queries/properties');
exports.getAllProperties = getAllProperties;
exports.addProperty = addProperty;