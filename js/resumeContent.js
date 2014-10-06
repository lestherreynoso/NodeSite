var address = 	"405 E 92 St/Apt 20B<br />
				New York, NY<br />
				(347) 470-8437<br />
				www.lestherreynoso.net<br />
				LHReynos@gmail.com";


var objective = {
	title 		: 	"Objective",
	summary		: 	"Looking to utilize my programming and engineering background in an environment in which I can both contribute to team and 
	 			   	organization success and gain knowledge and experience to further develop my skills."
};
var skills = {
	title		:	"Skills",
	summary		: 	"Time management, intuitive and fast paced learning ability, strong communication skills,  strong desire to learn new 
					skills and apply them, self-motivated, confident working in teams, speak fluent Spanish.",
	subtitle	: 	{
						"Software Experience" 	: 	"Microsoft Office, Windows 7, Windows 8, Ubuntu",
						"Proficient In"			:	"Python, Html, CSS, JavaScript, C++, Assembly",
						"Familiar With"			: 	"Java, SQL, C, MATLAB, Prolog, R, Node.js, PHP"
	}
};


var experience = {
	title		: 	"Experience",
	subtitle	: 	{
						"Help Desk Technician, SUNY Institute of Technology Help Desk" 			: 	{
							location 	: 	"Utica, NY",
							dates 		: 	"January 2014 – May 2014",
							summary		: 	"Developed and maintained professional relationships among students, faculty, and staff, educating them on the 
											general use of on campus or personal technology, performed troubleshooting, and resolved technical issues accordingly.
											<br /> <br />
											Ensured the technology on campus remained functional and available for all members of the campus community."
						},
						"Library assistant, SUNY Institute of Technology Cayan Library"			: 	{
							location 	: 	"Utica, NY",
							dates 		: 	"August 2010 – May 2014",
							summary		: 	"Managed the organization and distribution of resources for all customers in a professional and timely manner; 
											located relevant information that met the customers’ needs."
						},
						"Assistant to Director, A.C.T. Programs at the Cathedral of St. John"	: 	{
							location 	: 	"New York, NY",
							dates 		: 	"June 2011 – August 2013",
							summary		: 	"Reliably established a safe and effective environment for all staff utilization of programs, provided clear and 
											visible notification of equipment and locations; arranged and ensured functionality of all audio-visual equipment."
						}

	}	
var education = {
	title		: 	"SUNY Institute of Technology – Utica, NY",
	subtitle 	: 	"Bachelors of Science in Computer Science<br />
					Bachelors of Science in Computer Engineering<br />
					Minor in mathematics",
	summary 	: 	"Relevant courses: Web Game Programming, Knowledge and Information Management, Software Engineering, Artificial Intelligence, 
					Finite and Discrete Mathematics, Microprocessors, Digital Logic Design, Electronic Circuits, Signals and Systems."
};
var leadership = {
	subtitle	: 	{
						"SUNYIT Student Association Senator" 								: 	{
							dates 		: 	"Fall 2014 – Present",
							summary  	: 	"Chaired both the Student Association Policy Committee and Technology Committee and 
											represented the students of both the junior and senior class."
						},
						"SUNYIT Chair of the Policy Committee"								: 	{
							dates 		: 	"September 2013 – Present",
							summary  	: 	"Led a group in revising and improving all of the governing documents of the Student 
											Association and all student run organizations."
						},
						"SUNYIT Recipient of the Senator of the Year Award"					: 	{
							dates 		: 	"May 2014",
							summary  	: 	"Awarded for outstanding service as a senator for the Fall 2013 – Spring 2014 academic year."
						},
						"SUNYIT Recipient of the SUNY Certificate of Advanced Leadership" 	: 	{
							dates 		: 	"April 2014",
							summary  	: 	"Awarded upon completion of a leadership training program from SUNY Student Leadership Institute."
						},
						"SUNYIT Chair of the Technology Committee" 							: 	{
							dates 		: 	"September 2012 – May 2013",
							summary  	: 	"Successfully bridged communications between students and faculty on campus ensuring students 
											remain aware of any technological changes."
						}
	}


};

var Address = document.getElementById("Address");
var Objective = document.getElementById("Objective");
var Skills = document.getElementById("Skills");
var Education = document.getElementById("Education");
var WorkExperience = document.getElementById("WorkExperience");
var Leadership = document.getElementById("Leadership");

Address.innerHTML = address;

for (key in objective){
	Objective.innerHTML += "<div id='resumeObjective"+key+"'>"+ objective[key] + "</div>";
}

for (key in skills){
	if(skills[key] === Object){
		for (subkey in skills[key]){
			Skills.innerHTML += "<div id='resume"+ key +"'>" + subkey + '<div>' + skills[key][subkey] + "</div></div>";
		}
	}
	else Skills.innerHTML += "<div id='resumeSkills" + key + "'>"+ objective[key] + "</div>";
}
	
Education.innerHTML =
WorkExperience.innerHTML = 
Leadership.innerHTML = 