import jwt from 'jsonwebtoken';

export var checkTokenExpire = () => {
    var sessioninfo = JSON.parse(sessionStorage.getItem('sessionUserSga'));
    var token = sessioninfo ? sessioninfo.user.token : null;
    var decodedToken = token ? jwt.decode(token, { complete: true }) : null;
    var dateNow = new Date();

    if (decodedToken) {
        if (decodedToken.payload.exp < dateNow.getTime())
            return true
        else {
            return false
        }


    } else {
        return false
    }
}