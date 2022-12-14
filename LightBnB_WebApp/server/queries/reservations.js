//Queries for reservations

const db = require('../db/index');

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {result.rows} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return db
    .query(`SELECT reservations.*, properties.*
    FROM reservations
    JOIN properties ON properties.id = reservations.property_id
    WHERE guest_id = $1
    LIMIT $2;`,
    [guest_id, limit])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllReservations = getAllReservations;
