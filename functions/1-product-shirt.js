const shirt_best = require('../assets/data');

exports.handler = async (event, handler) => {
  return {
    statusCode: 200,
    body: JSON.stringify(shirt_best),
  };
};
