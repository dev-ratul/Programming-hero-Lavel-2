type userRole= "Admin" | "User" | "Singer"
const test= (user: userRole)=>{
    if(user === 'Admin' || user === "User"){
        return true
    }return false
}


console.log(test('Admin'))