const touring = require('../assets/tour-api');

exports.handler = async (event, handler) => {
  return {
    statusCode: 200,
    body: JSON.stringify(touring),
  };
};
