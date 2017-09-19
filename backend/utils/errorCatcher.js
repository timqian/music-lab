const errorCatcher = fn =>
    (req, res, next) => {
        return Promise.resolve(fn(req, res, next))
            .catch(err => {
                console.log('Un handled err: ', err);
                res.status(500).json('internal err')
            });
    };

module.exports = errorCatcher;