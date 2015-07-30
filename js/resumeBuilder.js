var bio = {
  "name" : "Soheil Norouzi",
  "role" : "Technical Account Manager",
  "contacts" : {
    "mobile": "650-555-5555",
    "email": "soheil@example.com",
    "github": "github.com/soheiln",
    "twitter": "@soheiln",
    "location": "San Francisco"
  },
  "welcomeMessage": "Welcome to my resume page!",
  "skills": [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ],
  "biopic": "images/pro-pic.png",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkill;
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for(var skill in bio.skills){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#header").append(formattedSkill);
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Stanford University",
      "location": "Stanford, CA",
      "degree": "M.S.",
      "majors": ["Electrical Eng."],
      "dates": 2012,
      "url": "www.stanford.edu"
    },
    {
      "name": "Sharif University",
      "location": "Tehran, Iran",
      "degree": "B.S.",
      "majors": ["Electrical Eng."],
      "dates": 2010,
      "url": "www.sharif.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display": function addEducationInfo() {
    //adding schools
    for (var school = 0; school < education.schools.length; school++) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

      $("#education").append(HTMLschoolStart);
      var educationEntry = $(".education-entry").last(); //selecting the current education-entry div
      educationEntry.append(formattedSchoolName + formattedSchoolDegree);
      educationEntry.append(formattedSchoolDates);
      educationEntry.append(formattedSchoolLocation);

      for (var major in education.schools[school].majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        educationEntry.append(formattedSchoolMajor);
      }
    }

    //adding online courses
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
    };
    for (var course in education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

      $("#education").append(HTMLschoolStart);
      var educationEntry = $(".education-entry").last(); //selecting the current education-entry div
      educationEntry.append(formattedOnlineTitle + formattedOnlineSchool);
      educationEntry.append(formattedOnlineDates);
      educationEntry.append(formattedOnlineURL);
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "TAM",
      "location": "Mountain View",
      "dates": "2014-2015",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "employer": "ZS Associates",
      "title": "Business Technology Associate",
      "location": "San Mateo",
      "dates": "2012-2014",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
  "display": function() {
    for (var job in work.jobs) {
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $("#workExperience").append(HTMLworkStart);
      var workEntry = $(".work-entry").last(); //selecting the current work-entry div
      workEntry.append(formattedWorkEmployer + formattedWorkTitle);
      workEntry.append(formattedWorkDate);
      workEntry.append(formattedWorkLocation);
      workEntry.append(formattedWorkDescription);
    }
  }
};

var project = {
  "projects": [
    {
      "title": "Sample project 1",
      "dates": "2015",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [
        "images/puppies_150.jpg",
        "images/puppies_150.jpg"
      ]
    }
  ],
  "display": function() {
    for (var proj in project.projects) {
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
      $("#projects").append(HTMLprojectStart);
      var projectEntry = $(".project-entry").last(); //selecting the current project-entry div
      projectEntry.append(formattedProjectTitle);
      projectEntry.append(formattedProjectDates);
      projectEntry.append(formattedProjectDescription);

      for (var image in project.projects[proj].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[proj].images[image]);
        projectEntry.append(formattedProjectImage);
      }
    }
  }
};



var internationalizeButton = '<button>Internationalize</button>';

//Adding googleMap div
var googleMap = '<div id="map"></div>';
$('#mapDiv').append(googleMap);

//Adding resume information to the page
bio.display();
work.display();
education.display();
project.display();