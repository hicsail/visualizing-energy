const WRITE_ACCESS_ERROR = "No write access authorization found";
const PAYLOAD_ERROR =
  "Payload is faulty. Expected payload structure is {stringifiedPage:string}";

/**
 * determines if a request has the expected authorization is its headers to allow write privileges
 * @param req http or https request
 * @returns boolean
 */
function hasWriteAccess(req, res, next) {
  return (
    req.headers.authorization &&
    req.headers.authorization == process.env.WRITE_ACCESS_KEY
  );
}

/**
 * determines if a request has the correct write payload.
 * expected payload is {stringifiedPage:string }
 * @param req http or https request
 * @returns boolean
 */
function hasExpectedWritePayload(req) {
  return req.body && req.body.stringifiedPage;
}

/**
 * blocks request and responds with appropriate error code if request doesn't have write access.
 * otherwise, allows request to go through
 */
function verifyWriteAccess(req, res, next) {
  if (hasWriteAccess(req)) {
    next();
  } else {
    res.status(401);
    res.send({ error: WRITE_ACCESS_ERROR });
  }
}

/**
 * blocks request and responds with appropriate error code if request doesn't have the correct write payload.
 * otherwise, allows request to go through
 */
function verifyWritePayload(req, res, next) {
  if (hasExpectedWritePayload(req)) {
    next();
  } else {
    res.status(400);
    res.send({ error: PAYLOAD_ERROR });
  }
}

module.exports = { verifyWriteAccess, verifyWritePayload };
