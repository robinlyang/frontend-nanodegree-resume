var bio = {
    "name" : "Robin Yang",
    "role" : "IT Professional",
    "contacts" : {
        "mobile" : "403-615-4762",
        "email": "RobinY@Gmail.com",
        "github": "robinlyang",
        "location": "Calgary, AB"
    },
    "welcomeMessage" : "I'm a highly goal and objective oriented person who takes pride in adding value to any project or team I work on. \
        I have multiple years of experience in both the public and private sector. During which I have learned how IT enables and strives to improve the \"business\" functions of an organization. \
        I'm currently broadening my scope of work and attending SAIT Polytechnic with a focus on Software Development. It's my intent to supplement my real world experience of the Software Development Life Cycle with the hands on technical learning that SAIT is so famous for.\
        If you'd like to sit down and have a chat about how I can help add value to your organization, contact me at RobinY@Gmail.com",
    "skills" : [
        "Business Analysis", "Application Development", "Detail Oriented", "Dedicated", "Fun"
    ],
    "biopic" : "images/robin.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

var work = {
    "jobs" : [
        {
            "employer": "ATB Financial",
            "title": "Analyst",
            "dates": "Summer of 2015",
            "location": "3699 63 Ave NE, Calgary, AB T3J 0G7",
            "description": "Documented Business Analyst Requirements for BI Reporting.  Customized Microsoft Access system with SharePoint integration."
        },
        {
            "employer": "Alberta Health Services",
            "title": "Analylst to Team Lead",
            "dates": "2011-2014",
            "location": "109 Quarry Park Boulevard SE, Calgary, AB T2C 5E7",
            "description": "Began and progressed IT career path as Analyst, Business Analyst, and Team Lead within Security and Compliance-Access team."
        }
    ]
}

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
}

var projects = {
    "projects" : [
        {
            "title": "Flashcard Study Aid",
            "date": "2014",
            "description": "Custom Java application to aid studying.",
            "images": [
                "images/flashcard1.jpg",
                "images/flashcard2.jpg"
            ]
        },
        {
            "title": "Project Tracking System",
            "date": "2015",
            "description": "Miscrosoft Access application with SharePoint integration.  Custom VBA forms, reports, and scripts.",
            "images": [
                "images/ptsystem1.jpg",
                "images/ptsystem2.jpg"
            ]
        }
    ]
}

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.date);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};

var education = {
    "schools" : [
        {
            "name": "SAIT",
            "location": "Calgary, AB",
            "degree": "Information Technology Diploma",
            "major": ["Software Development"],
            "date": 2016,
            "url": "www.sait.ca"
        },
        {
            "name": "Mount Royal University",
            "location": "Calgary, AB",
            "degree": "Business Analysis Extention Certificate",
            "major": ["Business Analysis"],
            "date": 2015,
            "url": "www.mtroyal.ca" 
        }
    ],
    "onlineCourses" : [
        {
            "title": "Front-End Developer",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com" 
        }
    ]
}

education.display = function() {
        
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }

 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
             
              $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

work.display();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);