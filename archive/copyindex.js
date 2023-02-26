const origobj = {
    "summarybanner": {
      "name": "Sydney Hillen",
      "image": "../pycv/img/cv_img.jpg",
      "summary": "A summary of Bolli… (the Bol)"
    },
    "workxp-list": [
      {
        "department": "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
        "workxp-title": "Senior Quantitative Analyst",
        "workxp-time": "02/23-present",
        "workxp-description": [
          "development ",
          "application "
        ],
        "workxp-description-sub": [
          "collection",
          "application"
        ]
      },
      {
        "department": "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
        "workxp-title": "Senior Model Developer",
        "workxp-time": "08/20-02/23",
        "workxp-description": [
          "development ",
          "automation "
        ],
        "workxp-description-sub": []
      },
      {
        "department": "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
        "workxp-title": "Line Management – Regulatory Reporting (IB)",
        "workxp-time": "10/19-08/20",
        "workxp-description": [
          "improvement",
          "reduction"
        ],
        "workxp-description-sub": []
      },
      {
        "department": "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
        "workxp-title": "Regulatory Reporting (PB)",
        "workxp-time": "01/17-10/19",
        "workxp-description": [
          "preparation ",
          "performance "
        ],
        "workxp-description-sub": []
      }
    ],
    "student-workxp": [
      {
        "department": "Asset Liability Management – Sparkasse KölnBonn, Cologne",
        "student-workxp-time": "01/15-03/15",
        "tasks": " funds."
      },
      {
        "department": "Controlling – Bosch Rexroth AG, Witten",
        "student-workxp-time": "02/14-08/14",
        "tasks": "control systems."
      },
      {
        "department": "Consulting – amx consulting, Hagen",
        "student-workxp-time": "01/11-02/11",
        "tasks": " online media."
      }
    ],
  
    "education": [
      {
        "institution": "FernUniversität Hagen",
        "area": "Applied Computer Science",
        "studyType": "Master of Science",
        "education-time": "2022-2025 (approx.)",
        "details": {},
        "topics": [
          "Architecture and Implementation of Databases",
          "Parallel Programming",
          "Data Engineering for Data Science"
        ]
      },
      {
        "institution": "International School of Management Dortmund",
        "area": "Finance",
        "studyType": "Master of Science",
        "education-time": "09/14-12/16",
        "details": {
          "grade": "Excellent with 1.39",
          "semesterabroad": {
            "institution": "Oxford Brookes University, Oxford",
            "grade": "Excellent with 1.0",
            "education-time": "09/15-12/15"
          }
        },
        "topics": ["Portfolio Modelling (C# based)", "Asset Management"]
      }
    ],
  
    "skills": {
      "verygood": ["PL/SQL", "R", "Markdown", "git", "Python", "VBA", "JSON"],
      "good": ["FSharp", "SAS", "Anaconda", "Kanban", "HTML", "CSS"],
      "fundamentals": [
        "Java",
        "jQuery",
        "JavaScript",
        "Azure",
        "C#",
        "Docker",
        "Angular",
        "Tableau"
      ]
    },  
    "references": [
      {
        "name": "Dorothee Bill",
        "company": "Credit Suisse",
        "relationship": "Former manager",
        "title": "Head of IRB Swiss Bank",
        "department": "Quantitative Analysis and Technology",
        "contact": "0123456789"
      },
      {
        "name": "Dr. Massimo Cutaia",
        "company": "Credit Suisse",
        "relationship": "Hiring manager",
        "title": "Global Head of Core Credit Modelling",
        "department": "Quantitative Analysis and Technology",
        "contact": "0123456789"
      }
    ],
   
    "projects_clubs": [
      "CS Group Finance Innovation Circle (2018-2020)",
      "CS Valuation in Resolution Data Sourcing (2019)",
      "CS BMR Innovation Circle & Co-Project lead for Python & R process automation (2018)"
    ]
  };
  
  
  const testobj2 = {
    projects_clubs: [
      "CS Group Finance Innovation Circle (2018-2020)",
      "CS Valuation in Resolution Data Sourcing (2019)",
      "CS BMR Innovation Circle & Co-Project lead for Python & R process automation (2018)",
    ],
  };
  
  const testobj4 = {
    references: [
      {
        name: "Dorothee Bill",
        title: "Head of IRB Swiss Bank",
        relationship: "Former manager",
        department: "QAT",
        contact: "0123456789",
      },
      {
        name: "Dr. Massimo Cutaia",
        title: "Global Head of Core Credit Modelling",
        relationship: "Hiring manager",
        department: "QAT",
        contact: "0123456789",
      },
    ],
  };

  const testobj = {
    projects_clubs: [
      "CS Group Finance Innovation Circle (2018-2020)",
      "CS Valuation in Resolution Data Sourcing (2019)",
      "CS BMR Innovation Circle & Co-Project lead for Python & R process automation (2018)",
    ],
  };
  
  var listItem = "";
  var listHTML = "";
  
  
  console.log(findPath(origobj));
  const findPath = (parentObj, valueToFind) => {
    for (const [key, value] of Object.entries(parentObj)) {
      if (value === valueToFind) return '.' + key;
      if (typeof value === 'object' && value !== null) {
        const possibleResult = findPath(value, valueToFind);
        if (possibleResult) return '.' + key + possibleResult;
      }
    }
  };
  console.log('obj' + findPath(obj, 'red'));
  console.log(nestedLoop(origobj));
  
  function nestedLoop(obj) {
    const res = {};
    var parentkey = [];
    var newdepth = 0;
    var depthobj = 0;
    var delta = 0;
    var dataKeys = Object.keys(obj);
    var firstKey = dataKeys[0];

    console.log("_______");
    console.log('allKeys ' + dataKeys);
    console.log("depth: " + getDepth(obj));
    console.log("_______");

    function recurse(obj, current) {
      
      var objKeys = Object.keys(obj);
      console.log("_______");
      console.log("recurse");
      console.log('objKeys ' + objKeys);
      console.log("depth: " + getDepth(obj));
      console.log("_______");
  
      var firstObjKey = objKeys[0];
  
      for (const key in obj) {
        
        let value = obj[key];
      
        console.log("_______");
      console.log("for loop");
      console.log('current key ' + key);
      console.log('keys obj' + Object.keys(obj));
      console.log('keys key' + Object.keys(key));
      console.log('keys value' + Object.keys(value));
      console.log("depth obj: " + getDepth(obj));
      console.log("depth key: " + getDepth(key));
      console.log("depth value: " + getDepth(value));
      console.log("_______");
        if(firstKey != key && dataKeys.includes(key)) {
          parentkey = [];
          //console.log('firstKey ' + firstKey);
        } else if (firstObjKey != key && objKeys.includes(key)) {
          //console.log('Key changed from ' + firstKey);
        } else {
          //console.log("else")
        }
        //let i = 0;
        if (value != undefined) {
          if (value && typeof value === "object") {
            if (
              Array.isArray(value) &&
              typeof value[0] === "string" &&
              value.length > 0
            ) {
              //console.log(key.toString() + '_' +  value);
              /*console.log("_______");
              console.log("depth " + newdepth);
              console.log("olddepth " + depthobj);
              console.log(parentkey);
              console.log("push empty");*/
              parentkey.push(key.toString());
              //console.log(parentkey);
              //console.log("_______");
              iterateList(value, key);
              //console.log(key.toString() + listHTML);
              // } else if (Array.isArray(value) && typeof value[0] === 'object') {
            } else if (Object.keys(value).length > 0) {
              if (key.toString().length == 1 && Number.parseInt(key) > 0) {
                if (newdepth == 0) {
                  depthobj = getDepth(value);
                } else {
                  depthobj = newdepth;
                }
                newdepth = getDepth(value);
                delta = Math.max(0, newdepth - depthobj + 1);
                /*console.log("_______");
                console.log("depth " + newdepth);
                console.log("olddepth " + depthobj);
                console.log(parentkey);*/
                for (let i = 0; i < delta; i++) {
                  //console.log("pop");
                  parentkey.pop();
                }
                if(
                  parentkey.slice(-1).length == key.toString().length == 1 
                  && Number.parseInt(key) > 0 
                  && Number.parseInt(parentkey.slice(-1)) + 1 == Number.parseInt(key)) {
                    
                  //console.log("additional pop");
                  parentkey.pop();
                }
                //console.log("pop");
                //parentkey.pop();
                //console.log(parentkey);
                //console.log("push");
                parentkey.push(key.toString());
                //console.log(parentkey);
                //console.log("_______");
              } else {
                if (newdepth == 0) {
                  depthobj = getDepth(value);
                } else {
                  depthobj = newdepth;
                }
                newdepth = getDepth(value);
                delta = Math.max(0, newdepth - depthobj + 1);
                /*console.log("_______");
                console.log("depth " + newdepth);
                console.log("olddepth " + depthobj);
                console.log(parentkey);
                console.log("push only");*/
                parentkey.push(key.toString());
                //console.log(parentkey);
                //console.log("_______");
              }
              //console.log(key);
              // console.log('typeof value[0]: ' + typeof value[0] +' ... typeof value: ' + typeof value + ' .... ' + value);
              // console.log('typeof key[0]: ' + typeof key[0] +' ... typeof key: ' + typeof key + ' .... ' + key);
            }
            recurse(value, key);
          } else if (
            key.toString().length > 1 &&
            typeof key === "string" &&
            value &&
            typeof value === "string"
          ) {
            // Do your stuff here to var value
            console.log(parentkey.join("_") + "_" + key + ": " + value);
  
            //console.log('depth ' + depthobj);
            //var parentkey = [];
          } else {
            res[key] = value;
          }
        }
      }
    }
    recurse(obj);
    return res;
  }
  
  function getDepth(obj) {
    if (!obj || obj.length === 0 || typeof obj !== "object") return 0;
    const keys = Object.keys(obj);
    let depth = 0;
    keys.forEach((key) => {
      let tmpDepth = getDepth(obj[key]);
      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
    return depth + 1;
  }
  
  function iterateList(object, arrayname) {
    let objarr = object;
    listHTML = "";
    listItem = "";
    objarr.forEach(createHTMLList);
    listHTML += listItem;
    //console.log(listHTML);
    // document.getElementById(arrayname).innerHTML = listHTML;
  }
  
  function createHTMLList(value) {
    listItem += "<li>" + value + "</li>";
  }
  