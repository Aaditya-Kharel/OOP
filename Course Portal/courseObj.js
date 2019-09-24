


function course(title,code,prereqs,prereqFor,homeworks){
	this.title=title;
	this.code=code;
	this.prereqs=prereqs;
	this.prereqFor=prereqFor;
	this.homeworks=[];
	this.homeworks=homeworks;
}

course.prototype.setTitle=function(title){
	this.title=title;
}

course.prototype.setCode=function(code){
	this.code=code;
}

course.prototype.setHomeworks=function(homeworks){
	this.homeworks=homeworks;
}

course.prototype.getTitle=function(){
	return this.title;
}

course.prototype.getCode=function(){
	return this.code;
}

course.prototype.getHomeworks=function(){
	return this.getHomeworks;
}

course.prototype.submitted=function(){
	let count=0;
	for(let i=0;i<this.homeworks.length;i++){
		if(this.homeworks[i].getIsSubmitted()){
			count++
		}
	}
	return count;
}

course.prototype.pending=function(){
	totalHW=this.homeworks.length;
	sumbittedHW=this.sumbitted;
	pendingHW=totalHW-submittedHW;
	return pendingHW;
}

course.prototype.nextPending=function(){
	let closestDueDateHW=this.homeworks;
	closestDueDateHW=this.homeworks.sort(compare);

	return{
		Name:closestDueDateHW[0].getName(),
		Description:closestDueDateHW[0].getDescription(),
		DueDate:closestDueDateHW[0].getDueDate(),
		RemainingDays:calculateDays(new Date(),closestDueDateHW[0].getDueDate())
	}

}

course.prototype.addHomework=function(homeworkObject){
	this.homeworks.push(homeworkObject);
}


function calculateDays(date1,date2){
	let one_day=1000*60*60*24;    
	let date1_ms = date1.getTime();   
	let date2_ms = date2.getTime();    
	let difference_ms = date2_ms - date1_ms;        
	return Math.round(difference_ms/one_day);
}

function compare(a,b){
	if(calculateDays(new Date(),a.getDueDate())>calculateDays(new Date(),b.getDueDate()))
		return -1;
	else
		return 1;
}


module.exports=course










