class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, ' has just logged in');
        return this;
    }
    logout(){
        console.log(this.email, ' has just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, " score is ", this.score);
        return this;
    }
}
class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}

var userOne = new User('ryu@ninjas.com', "Ryu");
var userTwo = new User('yoshi@gmail.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com','Shaun');

userOne.login().updateScore().updateScore().logout();
users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users)

//the new keyword
//- creates a new empty object{}
// sets the value of this to be the new empty object
// calls the constructor method

