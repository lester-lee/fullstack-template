/** @file Exports JWT sign and verify functions */

const jsonwebtoken = require("jsonwebtoken");
const JWT = process.env.JWT;

// Ensure JWT is set in .env
if (!JWT) {
  console.error("JWT not set in .env");
  process.exit(1);
}

/** @returns token from payload */
const sign = (payload) => {
  return jsonwebtoken.sign(payload, JWT);
};

/** @returns payload from token */
const verify = (token) => {
  return jsonwebtoken.verify(token, JWT);
};

module.exports = { sign, verify };
