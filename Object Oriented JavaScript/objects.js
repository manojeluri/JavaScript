function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email,"has logged in");
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email,"has logged out");
}

function Admin(...args){
    console.log(args)
}

var userOne = new User('ryu@ninjas.com', "Ryu");
var userTwo = new User('yoshi@gmail.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

console.log(userOne);
userTwo.login();
