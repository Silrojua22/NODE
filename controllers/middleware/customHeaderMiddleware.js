const customHeaderMiddleware = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === "silvio-1") {
            next();
        } else {
            res.status(403);
            res.send({ error: "API_KEY_NO_ES_CORRECTA" })
        }
    } catch (error) {
        res.status(403)
        res.send({ error: "ALGO_SUCEDIO_EN_CUSTOM" })
    };

};


module.exports = customHeaderMiddleware;