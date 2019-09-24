//MOVIE TABLE
class Movie{
constructor(obj){
this.movie_id=obj.id;
this.title=obj.title;
this.year=obj.year

this.getMovie_id=function(){
return this.movieid
}
this.setMovie_id=function(param){
this.movie_id=param
}
this.getTitle=function(){
return this.title
}
this.setTitle=function(param){
this.title=param
}
this.getYear=function(){
return this.year
}
this.setYear=function(param){
this.year=param;
}

}

getInfo()
{
console.log("Movie: ",this.title , "Year : ",this.year);
}}

module.exports=Movie;
