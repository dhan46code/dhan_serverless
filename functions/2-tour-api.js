const touring = require('../assets/tour-api');

exports.handler = async (event, handler) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(touring),
  };
};
