//Queries for Properties

//require database adapter file
const db = require('../db/index.js');

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {result.rows}  A promise to the properties.
 */
const getAllProperties = (options, limit = 10) => {
  
  const queryParams = [];

  //Add function to check if query already has a WHERE statement, use AND if so.
  const paramAND = params => params.length > 1 ? ' AND' : 'WHERE';

  //Add function to turn price from cents to dollars
  const dollarsToCents = dollars => dollars * 100;

  let queryString =   `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  /** if statement to check which options have been inputed **/

  //Add to query if a city is passed in
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length}`;
  }

  //Add to query if user is checking their properties
  if (options.owner_id) {
    queryParams.push(options.owner_id);
    queryString += `${paramAND(queryParams)} owner_id = $${queryParams.length}`;
  }

  //Add to query if minimum price is passed in
  if (options.minimum_price_per_night) {
    queryParams.push(dollarsToCents(options.minimum_price_per_night));
    queryString += `${paramAND(queryParams)} cost_per_night >= $${queryParams.length}`;
  }

  //Add to query if maximum price is passed in(Checks if min is passed in too)
  if (options.maximum_price_per_night) {
    queryParams.push(dollarsToCents(options.maximum_price_per_night));
    if (options.minimum_price_per_night) {
      queryString += `${paramAND(queryParams)} cost_per_night BETWEEN $${queryParams.length - 1} AND $${queryParams.length}`;
    } else {
      queryString += `${paramAND(queryParams)} cost_per_night <= $${queryParams.length}`;
    }
  }

  //Add to query if minimum rating is passed in
  if (options.minimum_rating) {
    queryParams.push(options.minimum_rating);
    queryString += `${paramAND(queryParams)} rating >= $${queryParams.length}`;
  }

  //Add to query to group and order by, allow limit to be changed
  queryParams.push(limit);
  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  return db.
    query(queryString, queryParams)
    .then((result) => result.rows)
    .catch((err) => console.log(err.message));
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {results.rows[0]} A promise to the property.
 */
const addProperty = function(property) {

  const queryString = `INSERT INTO properties(
    owner_id, 
    title, 
    description, 
    thumbnail_photo_url, 
    cover_photo_url, 
    cost_per_night, 
    street, 
    city, 
    province, 
    post_code, 
    country, 
    parking_spaces, 
    number_of_bathrooms,
    number_of_bedrooms
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
    `;

  const queryParams = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night,
    property.street,
    property.city,
    property.province,
    property.post_code,
    property.country,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms];

  return db
    .query(queryString, queryParams)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};
exports.addProperty = addProperty;
