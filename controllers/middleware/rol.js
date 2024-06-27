const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        // console.log({ user });
        const rolesByUser = user.role;

        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle))
        if (!checkValueRol) {
            res.status(400).send("USER_NOT_PERMISSIONS")
        }
        next()
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = checkRol;