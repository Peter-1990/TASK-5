let myResume={
    "basics": {
      "name": "HARI PRASAD W",
      "email": "harip3279@gmail.com",
      "phone": 9381065658,
      "degree": "B.E",
      "location": {
        "address": "35/15 tondiar nagar 3rd street tondiarpet",
        "postalCode": 600081,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "",
          "github": ""
        }
      ]
    },
    "work": [
      {
        "company": "ADANI PORTS",
        "position": "RTG OPERATOR (OPERATION DEPARTMENT)",
        "startDate": "25-09-2018",
        "endDate": "31-01-2024",
        "summary": "I WORKS AS A CRANE OPEATOR HANDLES CONTAINERS FOR SHIP (BOTH IMPORT AND EXPORT",
      },
    ],
    "education": [
      {
        "institution": "VEL TECH ENGINEERING COLLEGE",
        "department": "ELECTRICAL AND ELECTRONIC ENGINEERING",
        "studyType": "fulltime",
        "batch start year": 2014,
        "batch end year": 2018,
        "gpa": 6.9,
      }
    ],
    "skills": [
      {
        "name": "python,javascript",
        "level": "beginer",
        "project": [
          "automatic attendance maintaing system using python language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "script writter,youtuber,",
      }
    ]
  }
  console.log(myResume);
 

  var json = [{
    "id" : "HARI PRASAD W", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "harip3279@gmail.com"
},
{
    "id" : "HARI PRASAD W 2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "harip3279@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

