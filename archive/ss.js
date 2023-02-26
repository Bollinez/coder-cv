var findPath = (ob, key, value) => {
    const path = [];
    const keyExists = (obj) => {
      if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
        return false;
      }
      else if (obj.hasOwnProperty(key) && obj[key] === value) {
        return true;
      }
      else if (Array.isArray(obj)) {
        let parentKey = path.length ? path.pop() : "";
  
        for (let i = 0; i < obj.length; i++) {
            console.log("path bf push: " + path);
          path.push(`${parentKey}[${i}]`);
          console.log("path after push: " + path);
          const result = keyExists(obj[i], key);
          if (result) {
            return result;
          }
          console.log("path bf pop: " + path);
          path.pop();
          console.log("path after pop: " + path);
        }
      }
      else {
        for (const k in obj) {
            console.log(k + " is k; path bf push: " + path);
          path.push(k);
          console.log("path after push: " + path);
          const result = keyExists(obj[k], key);
          console.log("else keyExists: " + result);
          if (result) {
            return result;
          }
          console.log("path bf pop: " + path);
          path.pop();
          console.log("path after pop: " + path);
        }
      }
  
      return false;
    };
  
    keyExists(ob);
  
    return path.join(".");
  }
  
  var deeplyNestedFamilyTree = [ // starts with array
    {
      name: "John",
      children: [{
        name: "Dsora",
        children: [{
          name: "Sara"
        }, {
          name: "James"
        }]
      }]
    },
    {
      name: "Scsott",
      children: [{
        name: "Smith",
        children: [{
          name: "Brad"
        }, {
          name: "David"
        }]
      }]
    }
  ]
  
  var deeplyNestedOrgChart = { // starts with object
    position: "CEO",
    subordinates: [
      {
        position: "CFO",
        test: [
          {
            bla: "Enginesering Lead"
          }
        ]
      },
      {
        position: "CTO",
        test: [
          {
            bla: "Engineering Leassd"
          }
        ]
      },
      {
        position: "COO",
        test: [
          {
            bla: "Engineering Lead"
          }
        ]
      }
    ]
  }


  var jsonfile = {

    "workxp-list": [
      {
        "department": "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
        "workxp-title": "Senior Quantitative Analyst",
        "workxp-time": "02/23-present",
        "subtasks": ["sdf"],
        "references": [
          {
            "name": "Dorothee Bill",
            "contact": "0123456789"
          },
          {
            "name": "Dr. Massimo Cutaia",
            "contact": "0123456789"
          }
        ]
      },
      {
        "department": "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
        "workxp-title": "Senior Model Developer",
        "workxp-time": "08/20-02/23"
      },
      {
        "department": "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
        "workxp-title": "Line Management – Regulatory Reporting (IB)",
        "workxp-time": "10/19-08/20",
        "subtasks": ["55"],
        "references": [
          {
            "name": "Dordothee Bill",
            "contact": "012345s6789"
          },
          {
            "name": "Dr. Massksimo Cutaia",
            "contact": "01234s56789"
          }
        ]
      },
      {
        "department": "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
        "workxp-title": "Regulatory Reporting (PB)",
        "workxp-time": "01/17-10/19",
        "subtasks": ["ss55"],
        "references": [
          {
            "name": "Dordodthee Bill",
            "contact": "012345s6d789"
          },
          {
            "name": "Dr. Massssimo Cutkdaia",
            "contact": "01234sd56789"
          }
        ]
      }
    ],
  
    "education": [
      {
        "institution": "FernUniversität Hagen",
        "student-workxp": [
          {
            "department": "Asset Liability Management – Sparkasse KölnBonn, Cologne",
            "student-workxp-time": "01/15-03/15",
            "tasks": " funds."
          },
          {
            "department": "Consultiddng – amx consulting, Hagen",
            "student-workxp-time": "01/1f1-02/11",
            "tasks": " online mffedia."
          }
        ]
      },
      {
        "institution": "International School of Management Dortmund",
        "student-workxp": [
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
        ]
      }
    ]
  
  }

  var jsonfile2 = {

    "workxp-list": [
      {
        "department": "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
        "workxp-title": "Senior Quantitative Analyst",
        "workxp-time": "02/23-present",
        "references": [
          {
            "name": "Dorothee Bill",
            "contact": "0123456789"
          },
          {
            "name": "Dr. Massimo Cutaia",
            "contact": "0123456789"
          }
        ]
      },
      {
        "department": "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
        "workxp-title": "Senior Model Developer",
        "workxp-time": "08/20-02/23"
      },
      {
        "department": "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
        "workxp-title": "Line Management – Regulatory Reporting (IB)",
        "workxp-time": "10/19-08/20",
        "references": [
          {
            "name": "Dordothee Bill",
            "contact": "012345s6789"
          },
          {
            "name": "Dr. Massksimo Cutaia",
            "contact": "01234s56789"
          }
        ]
      },
      {
        "department": "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
        "workxp-title": "Regulatory Reporting (PB)",
        "workxp-time": "01/17-10/19",
        "references": [
          {
            "name": "Dordodthee Bill",
            "contact": "012345s6d789"
          },
          {
            "name": "Dr. Massssimo Cutkdaia",
            "contact": "01234sd56789"
          }
        ]
      }
    ],
  
    "education": [
      {
        "institution": "FernUniversität Hagen",
        "student-workxp": [
          {
            "department": "Asset Liability Management – Sparkasse KölnBonn, Cologne",
            "student-workxp-time": "01/15-03/15",
            "tasks": " funds."
          },
          {
            "department": "Consultiddng – amx consulting, Hagen",
            "student-workxp-time": "01/1f1-02/11",
            "tasks": " online mffedia."
          }
        ]
      },
      {
        "institution": "International School of Management Dortmund",
        "student-workxp": [
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
        ]
      }
    ]
  
  }

  /*
  console.log(findPath(deeplyNestedFamilyTree, "name", "John")); 
  // => [0]
  
  console.log(findPath(deeplyNestedFamilyTree, "name", "James")); 
  // => [0].children[0].children[1]
  
  console.log(findPath(deeplyNestedFamilyTree, "name", "Scsott")); 
  // => [1]
  
console.log(findPath(deeplyNestedOrgChart, "bla", "Engineering Lead"));
console.log(findPath(jsonfile, "tasks", " online media."));*/
console.log(findPath(jsonfile, "name", "Dorothee Bill"));
console.log("____________next______________");
console.log(findPath(jsonfile2, "name", "Dorothee Bill"));

// => subordinates[1].subordinates[0]