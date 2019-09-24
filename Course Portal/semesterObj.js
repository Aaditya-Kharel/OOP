class semester{
	
	constructor(name,year,courses){
		this.name=name;
		this.year=year;
		this.courses=[];
		this.courses=courses;
		
	}

	getCourses(){
		return this.courses;
	}

	addCourse(obj){
		this.courses.push(obj);
	}

	hwPerCourse(hw,key){
		for(let i=0;i<this.courses.length;i++){
			if(this.courses[i].getCode()===key){
				this.courses[i].addHomework(hw);
			}
		}
	}

	allHomeworksSubmitted(){
		let homeworkList=[];
		for (let i=0;i<this.courses.lenght;i++){
			for (let j=0; j<this.courses[i].homeworks.length;j++){
				if(this.courses[i].homeworks[j].isSubmitted)
					homeworkList.push(this.courses[i].code,this.courses[i].homeworks[j]);
			}
		}
		return homeworkList;
	}




}

function calculateDays(date1,date2){
	let one_day=1000*60*60*24;    
	let date1_ms = date1.getTime();   
	let date2_ms = date2.getTime();    
	let difference_ms = date2_ms - date1_ms;        
	return Math.round(difference_ms/one_day);
}

module.exports=semester