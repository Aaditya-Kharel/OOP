


function homework(name,description,dueDate,maxScore,myScore,isSubmitted){
	this.name=name;
	this.description=description;
	this.dueDate=dueDate;
	this.isSubmitted=isSubmitted; 
	this.myScore=myScore;
	this.maxScore=maxScore;

	return{
		name:name,
		description:description,
		dueDate:dueDate,
		isSubmitted:isSubmitted,
		myScore:myScore,
		maxScore:maxScore,

		setName:function(name){
			this.name=name;
		},

		setDescription:function(description){
			this.description=description;
		},

		setDueDate:function(dueDate){
			this.dueDate=dueDate;
		},

		setIsSubmitted:function(isSubmitted){
			this.isSubmitted=isSubmitted;
		},

		setMyScore:function(myScore){
			this.myScore=myScore;
		},

		setMaxScore:function(maxScore){
			this.maxScore=maxScore;
		},

		getName:function(){
			return this.name;
		},

		getDescription:function(){
			return this.description;
		},

		getDueDate:function(){
			return this.dueDate;
		},

		getIsSubmitted:function(){
			return this.isSubmitted;
		},

		getMyScore:function(){
			return this.myScore;
		},

		getMaxScore:function(){
			return this.maxScore;
		},

		hwRemainingDays:function(){
			if(!(this.isSubmitted))
				return calculateDays(new Date(),this.dueDate);
			else
				return "Assignment Submitted!";
		}
	}
}

function calculateDays(date1,date2){
	let one_day=1000*60*60*24;    
	let date1_ms = date1.getTime();   
	let date2_ms = date2.getTime();    
	let difference_ms = date2_ms - date1_ms;        
	return Math.round(difference_ms/one_day);
}

module.exports=homework