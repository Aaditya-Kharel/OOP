//People.js
//database has attributes id, name, email and gender

const People = superclass => class extends superclass{
constructor(obj1,obj2){
super(obj2);
this.people_id=obj1.id;
this.name=obj1.name;
this.email=obj1.email;
this.gender=obj1.gender;

this.getPeople_id=function(){
return this.people_id
}

this.setPeople_id=function(param){
this.people_id=param;
}

this.getName=function(){
return this.name
}

this.setName=function(param)
{
this.name=param
}
this.getEmail=function()
{
return this.email
}

this.setEmail=function(param){
this.email=param
}
this.getGender=function(){
return this.gender
}
this.setGender=function(param){
this.gender=param
}


}

getInfo(){
super.getInfo();
console.log("Email : ",this.email,"Gender : ",
this.gender);
}

}

module.exports=People
