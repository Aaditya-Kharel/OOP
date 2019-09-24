let homework=require('./hwObj');
let course=require('./courseObj');
let semester=require('./semesterObj');


//TESTING MY FUNCTIONS
console.log("---My Fall Semester Homework Diary----------")
let hw1=new homework("hw1","solve Ax=b",new Date(2019,1,1),100,100,true);
let hw2=new homework("hw2","Prove x.'Ax>0",new Date(2019,2,1),100,100,true);
let hw3=new homework("hw3","solve ut=uxx",new Date(2019,3,1),100,0,false);
let hw4=new homework("hw4","wirte a code in c++",new Date(2019,4,1),100,100,true);
let hw5=new homework("hw5","compile the program",new Date(2019,5,1),100,100,true);


let CSC=new course("OOP","CSC317","CSC307","...",[hw4,hw5]);
let MAT=new course("PDE","MAT417","MAT285"," ",[hw1,hw2,hw3]);
let FallSemester=new semester("harris","2019",[CSC,MAT]);
console.log(FallSemester.getCourses());

console.log("-----My next Pending Assignment is:---------")
console.log(FallSemester.getCourses()[0].nextPending());

console.log("-----Adding a HW in CSC317------------------")
let addHW=new homework("hw6","b-trees ",new Date(2020,2,1),100,0,true);
FallSemester.hwPerCourse(addHW,"CSC317");
console.log(FallSemester.getCourses());

