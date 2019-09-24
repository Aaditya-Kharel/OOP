const setCredit=require("./creditClass");

const mv1=new //support, male, 2014 (should not appear in query)
setCredit({mvID:"I",actor:"Brad Pitt ",email:"brad.pit@hollywood.com",gender:"Male"},
		  {ID:"10A",title:"Fury    ;  ",year:2014},
		  {type:"ACTOR",char:"Wardaddy",role:"SUPPORT"});

const mv2=new  //lead, female, 2000-2010 (must appear in query)
setCredit({mvID:"II",actor:"Jessica Biel",email:"jessica.biel@hollywood.com ",gender:"FEMALE"},
		  {ID:"20B",title:"The Prestige    ;  ",year:2006},
		  {type:"ACTRESS",char:"Sophie",role:"LEAD"});

const mv3=new   //lead,male, 2000-2010 (should not appear in query)
setCredit({mvID:"III",actor:"Christian Bale",email:"christian.bale@hollywood.com ",gender:"Male"},
		  {ID:"30C",title:"The Dark Knight    ;  ",year:2008},
		  {type:"ACTOR",char:"Batman",role:"LEAD"});

const mv4=new  //lead,female,2000-2010 (must appear in query)
setCredit({mvID:"IV",actor:"Connie Nielsen",email:"Connie@star.com ",gender:"FEMALE"},
		  {ID:"40D",title:"Gladiator    ;  ",year:2000},
		  {type:"ACTRESS",char:"Lucilla",role:"LEAD"});

const mv5=new  //lead, female, 2000-2012 (must appear in query)
setCredit({mvID:"V",actor:"Naomi Watts",email:"Watts@comcast.net ",gender:"FEMALE"},
		  {ID:"50E",title:"The Ring    ;  ",year:2008},
		  {type:"ACTRESS",char:"Racheal Keller",role:"LEAD"});

const mv6=new  //support, female, 2000-2012 (should not appear in query)
setCredit({mvID:"V",actor:"Gwyneth Paltrow",email:"Paltrow@AMB.COM ",gender:"FEMALE"},
		  {ID:"50E",title:"Iron Man    ;  ",year:2008},
		  {type:"ACTOR",char:"Pepper Potts",role:"support"});


const creditArray=[mv1,mv2,mv3,mv4,mv5,mv6];


const pullQuery=function (param){
//DISPLAY
console.log("---------------------------------------------------------")
console.log("***** We are performing the following MOVIE query *****");
console.log("---------------------------------------------------------")
console.log("The list of names of lead female actress from the year 2000-2010 are:")
console.log("------------------------------------------------------------------------")
for(var i=0;i<creditArray.length;i++){

if ( (creditArray[i].getRole()=="LEAD")&&
	 (creditArray[i].getYear()<=2010)&&
	 (creditArray[i].getYear()>=2000)&&
	 (creditArray[i].getGender()=="FEMALE") )
creditArray[i].getInfo()
console.log("-------------------------------------------------------------------------------")

}
}

pullQuery(creditArray)

console.log("QUERY SUCCESSFULLY COMPLETED!");
