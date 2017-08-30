var bio = {
    "Name": "S Ramya Varshini",
    "Role": "web developer",
    "contacts": {
        "mobile": "+91 9686191918",
        "email": "varshumay@gmail.com",
        "Location": "Bangalore"
    },
    "WelcomeMsg": "Hola",
    "Skills": ["Html", "CSS", "java script", "weblogic", "tomcat", "jboss", "c++"],
    "bioPic": "../images/fry.jpg"
};
var education = {
    "schools": [
        {
            "Name": "SASTRA University",
            "Location": "Thanjavur,TamilNadu",
            "Degree": "Bachelor",
            "Majors": "Information Technology",
            "duration": "June 2011 -may 2015"
        }
    ],
    "online Courses": [
        {
            "Title": "Nanodegree in Front end development",
            "School": "Udacity",
            "dates": "2016-2017"
        }
    ]
};
var work = {
    "job": [
        {
            "Employer": "Tata Consultancy Services",
            "Title": "Systems Engineer",
            "Duration": "2015-current",
            "Description": "Working as a part of a Banking Application platform where we provide the middleware such as weblogic,jboss,java and Tomcat for the application teams to host their applications "
        }
    ]
};
var projects = {
    "Udacity Projects": [
        {
            "Project1": "portfolio page The project was built on Google App Engine with Bootstrap, and the project was focused on using Bootstrap’s grid styling system to style the responsive and organized web page more easily."
        }
    ]
};
$("#main").append(work["Title"]);
$("#main").append(education.name);
/* Functions
bio.display=function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}
};
bio.display();
work.display=function() {

    if(work.job.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

};
work.display();
education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();
projects.display =function () {
    for (projects in projects.projects) {
        $("#projects").append(HTMLprojectStart);
    var formattedTitle =HTMLprojectTitle.replace("%data",projects.projects[project].title);
    $(".projects-entry:last").append(formattedTitle);

    var formattedDates =HTMLprojectDates.replace("%data",projects.projects[project].dates);
    $(".projects-entry:last").append(formattedDates);

    var formattedDescription =HTMLprojectDescription.replace("%data",projects.projects[project].description);
    $(".projects-entry:last").append(formattedDescription);


    }
}
projects.display();
$("#mapDiv").append(googleMap);
*/