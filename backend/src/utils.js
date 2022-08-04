/**
 * determines if a request has the expected authorization is its headers to allow write privileges
 * @param req http or https request
 * @returns boolean
 */
function hasWriteAccess(req, res, next){
    console.log(req.headers);
    console.log("key in env", process.env.WRITE_ACCESS_KEY);
    return req.headers.authorization && atob(req.headers.authorization) ==
        process.env.WRITE_ACCESS_KEY;
}

/**
 * blocks request and responds appopriate error code if req doesn't have write access. 
 * otherwise, allows request to go through
 */
function verifyWriteAccess (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    if(hasWriteAccess(req)){
        next();
    }else{
        res.setStatus(504); //no auth code
        res.send({ error: "not authorized" });
    }
  }

//   function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }

module.exports = {verifyWriteAccess}