const users = require('../model/UserSchema')
const moment=require("moment")


exports.userpost = async (req, res) => {
    const { firstName, email, mobile, gender, status } = req.body;
    if (!firstName || !email || !mobile || !gender || !status) {
        res.status(400).json({error: "All inputs are required!"})
    }

    try {
        const preUser = await users.findOne({ email: email })
        if (preUser) {
            res.status(400).json({error:"This user is already exist!"})
        } else {
            const createdAt = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            
            const userData = new users({
                firstName,email,mobile,gender,status,createdAt
            })

            await userData.save()
            res.status(200).json(userData)
        }
    } catch (error) {
        res.status(400).json(error)
        console.log("catch block error")
    }
}