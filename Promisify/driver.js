const Promise = require("bluebird");
const fetch = require("node-fetch");
const fs = Promise.promisifyAll(require("fs"));
const timers = require('timers');

//From Science and Tech Webpage
const ScienceTechURL = 
[ 
'http://www.usm.edu/biological-sciences',
'http://www.usm.edu/chemistry-biochemistry',
'http://www.usm.edu/computing',
'http://www.usm.edu/construction/',
'http://www.usm.edu/criminal-justice',
'http://www.usm.edu/csme/',
'http://www.usm.edu/geography-geology',
'http://www.usm.edu/gulfcoast/human-capital-development/human-capital-development-ms',
'http://www.usm.edu/physics',
'http://www.usm.edu/polymer/',
'http://www.usm.edu/math' ,
'http://www.usm.edu/school-ocean-science-and-technology/',
];


async function copyContent(name,data){
try{
	await fs.writeFileAsync(name, data);
	console.log("Fulfilled Promise");
	console.log("File written successfully!")
	 } 
catch(err){
	console.log(err);
	}
}

function* GeneratorURL() {
for (let i=0;i<ScienceTechURL.length;i++){
	yield ScienceTechURL[i];
}

}

const iterator = GeneratorURL();

function* loadContent(param){
	
while(true)	{
	if(param === undefined ) 
	return
else
	yield fetch(param).then(resolve=> resolve.text())
			
	}	
		
}

async function driver(){	
	let generator;
	let j = 1,content,done,res;
	let arr=[];
	generator=loadContent(iterator.next().value);	
	res = generator.next()
	content = await res.value
	done = res.done
	while(!done){
		arr[j]= content
		copyContent("File"+j+".txt",arr[j])
		j=j+1;
		generator=loadContent(iterator.next().value);
		res=generator.next();
		done=res.done;
		content= await res.value;		
	}
}

driver(); //Call driver program


