import {verify} from "jsonwebtoken";

export default function profileHandler(req,res){
    const {myCookie} = res.cookies

const user = verify(myCookie,'1234')
console.log(user);

    return req.json('')
}