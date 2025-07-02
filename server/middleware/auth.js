// get user id using jwt
import jwt from 'jsonwebtoken'


export const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    // from this token we will get user id
    if (!token) {
        return res.json({
            success: false,
            message:"not authorized"
        })
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        // if this id is there so we will attach this in req.body
        if (tokenDecode.id) {
          if (!req.body) req.body = {}; // ensures req.body is always defined
          req.body.userId = tokenDecode.id;
        } else {
          return res.json({
            success: false,
            message: "not authorized login again",
          });
        }

        // this will now return to controller and run credit function in controller
        next();
    }
    catch (err) {
        res.json({
            success: false,
            message:err.message
        })
    }
}