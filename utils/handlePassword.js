const bcryptjs = require('bcryptjs');



const encrypt = async (passwordplain) => {
    const hash = await bcryptjs.hash(passwordplain, 10);
    return hash
};


const compare = async (passwordplain, hashPassword) => {

    return await bcryptjs.compare(passwordplain, hashPassword)
}



module.exports = { encrypt, compare };