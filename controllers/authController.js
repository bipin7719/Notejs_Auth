import User from "../models/User.js";

export const registerUser = async(req, res)=>{
    const {name, email, password} = req.body;
    try {
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message: "user already exists"})
        }
        const user = await User.create({name, email, password});
    } catch (error) {
        res.status(500).json({message: "error occured"});
    }
}

export const loginUser = async(req, res)=>{
    const {email, password} = res.body;
    try {
        const user = await User.findOne({email})

        if(user && user.password === password){
            res.status(200).json({
                _id: user._id, 
                name:user.name,
                email: user.email,

            })
        }
        else{res.status(400).json({message: "invalied email or password"})}
        
    } catch (error) {
        res.status(401).json({message: "invalied login"})
    }

}
