//CREDIT TABLE
//REQUIRES MOVIE AND PEOPLE
const People=require("./peopleClass")
const Movie=require("./movieClass")

class Credit extends People(Movie){

constructor(People,Movie,Credit){

super(People,Movie);
this.type=Credit.type;
this.char=Credit.char;
this.role=Credit.role;


this.getChar=function(){				//getter for Character
return this.char;
}

this.getType=function(){					//getter for Type
return this.type;
}

this.getRole=function(){					//getter for Role
return this.role;
}


this.setChar=function(param){			//setter for Character
this.char=param;
}

this.setType=function(param){				//setter for Type
this.type=param;
}

this.setRole=function(param){				//setter for Role
this.role=param;
}}

getInfo(){									//getter for Info
super.getInfo();
console.log("Type:",       this.type,
			"Character:",  this.char, 
			"Role:",       this.role);
	}
}
module.exports=Credit
