/**
* @file the script contains all json-type details for the CV and 
        includes functions to create html id selectors for each key value pair in json, 
        as well as functions to perform various style changes to keywords in an automated way
* @author Sydney Hillen <sydney.hillen@outlook.com>
* @version v1.1
*/


/**@constant {json} */
const cv_obj = {
  summarybanner: {
    name: "Sydney Hillen",
    image: "../pycv/img/cv_img.jpg",
    summary:
      "Data-driven risk professional with experience in Python, F#, R, SQL, Oracle Databases and expertise in developing " +
      "advanced credit risk models. Motivated to explore the constantly evolving universe of tech-tools and eager to " +
      "join a team of critical thinkers, who are equally passionate. " 
  },
  personalscontainer: {
    address: "address: Obere Belchenstr 17, 5012 Schoenenwerd",
    mail: "mail: sydney.hillen@outlook.com",
    mobile: "mobile: +41 76 565 3714",
    nationality: "nationality: German",
    linkedin: "linkedin: /sydney-hillen",
    github: "github: /Bollinez",
    birth: "birth: 1990-07-29",
    status: "status: married",
  },
  workxp: [
    {
      "institution":
        "Credit Suisse AG, Zurich (Quantitative Analysis & Technology - QAT)",
      "title": "Senior Quantitative Analyst",
      "time": "since 02/23",
      "description": [
        "development and implementation of processes for the monitoring and backtesting of credit risk models using R and Python",
        "report automation for senior management and FINMA using Angular and Python",
      ],
      "description-sub": [],
    },
    {
      "institution":
      "Credit Suisse AG, Zurich (Quantitative Analysis & Technology - QAT)",
      "title": "Senior Model Developer",
      "time": "08/20-02/23",
      "description": [
        "development of credit risk models using advanced statistical methods, including machine learning models in R",
        "application of standards for code versioning and documentation, as well as issue management using git and Odyssey Bitbucket",
        "project plan and workflow management using Jira and Kanban",
        "development of a model prototype using F# and Angular as a proof of concept to move from a waterfall delivery model to a continuous integration and continuous delivery (CI/CD) practice",
        "automation of the economic downturn analysis for internal-rating-based (IRB) modelling using R Markdown, including: ",
      ],
      "description-sub": [
        "collection, processing and aggregation of macroeconomic data from external sources using R and PL/SQL",
        "application of regulatory standards for the estimation of economic downturns on portfolio-level",
      ],
    },
    {
      "institution":
        "Credit Suisse AG, Zurich (Basel Measurement & Reporting - BMR)",
      "title": "Line Management – Regulatory Reporting (IB)",
      "time": "10/19-08/20",
      "description": [
        "improvement of data quality for Basel III regulatory reporting purposes, by supporting the implementation and testing of change requests from the business side",
        "reduction of dependencies from multiple web-based BI tools with limited third-party application compatibility and shifting the team's data sourcing towards SQL- and Python-based queries",
        "review of Compliance- and MIS reports for credit risk- and balance sheet figures for the Swiss Investment Banking business",
      ],
      "description-sub": [],
    },
    {
      "institution":
      "Credit Suisse AG, Zurich (Basel Measurement and Reporting - BMR)",
      "title": "Regulatory Reporting (PB)",
      "time": "01/17-10/19",
      "description": [
        "preparation and presentation of main drivers for credit risk movements to the CFO of Credit Suisse (Switzerland) Ltd.",
        "performance of test cases and validations for the decommissioning and replacement of legacy applications",
        "participation in the working group targeting shorter reporting cycles as the SME for data flows within PB-related regulatory reporting processes",
      ],
      "description-sub": [],
    },
  ],
  "student-workxp": [
    {
      "title": "Asset Liability Management",
      "institution": "Sparkasse KölnBonn, Cologne",
      "time": "01/15-03/15",
      "description": [
        "support of financial engineers, primarily responsible for the management of interest rate risks and asset-/ liability mismatches",
        "assistance during the collaboration with BlackRock for the preparation of the bank's role as a custodian for umbrella funds"
      ]
    },
    {
      "title": "Controlling",
      "institution": "Bosch Rexroth AG, Witten",
      "time": "02/14-08/14",
      "description": [
        "development and improvement of budget planning processes and standardized management control systems"
      ]
    },
    {
      "title": "Consulting",
      "institution": "amx consulting, Hagen",
      "time": "01/11-02/11",
      "description": [
        "research and analyses on candidate profiles for management positions in the fields of search engine optimization and online media"
      ]
    },
  ],
  education: [
    {
      institution: "FernUniversität Hagen (Remote University)",
      title: "Master of Science (Applied Computer Science)",
      time: "since 2022",
      details: {},
      description: [
        "architecture and implementation of databases",
        "parallel programming",
        "data engineering for data science",
      ],
    },
    {
      institution: "International School of Management Dortmund",
      title: "Master of Science (Finance)",
      time: "09/14-12/16",
      details: {
        grade: "Excellent with 1.39",
        semesterabroad: {
          institution: "Oxford Brookes University, Oxford",
          grade: "Excellent with 1.0",
          time: "09/15-12/15",
        },
      },
      description: ["portfolio modelling (C# based)", "asset management"],
    },
    {
      institution: "International School of Management Dortmund",
      title: "Bachelor of Arts (International Management)",
      time: "09/10-08/14",
      details: {
        grade: "Good with 2.1",
        semesterabroad: {
          institution: "European Business School, Dublin",
          grade: "Excellent with 1.0",
          time: "01/12-04/12",
        },
      },
      description: ["project management", "finance"],
    },
  ],
  certificates: [
    {
      name: "Financial Risk Manager",
      date: "2019",
      issuer: "Global Association of Risk Professionals",
      image: "../pycv/img/frm_badge.png",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      date: "2023",
      issuer: "Microsoft",
      image: "../pycv/img/azure_badge.png",
    },
  ],
  skills: {
    verygood: ["Python", "SQL", "git", "R", "JSON", "Markdown", "VBA"],
    good: ["JavaScript", "HTML", "CSS", "Angular", "C#", "F#", "SAS"],
    fundamentals: ["Java", "Docker", "Tableau", "Azure", "PowerShell", "Maven"],
  },
  languages: {
    native: "German",
    fluent: "English",
    good: "Spanish",
  },
  interests: [
    "expanding my coding skills",
    "physical cosmology",
    "astronomy",
    "my dog",
    "hiking",
    "basketball",
    "shooting range",
  ],
  references: [
    {
      name: "Dorothee Bill",
      company: "Credit Suisse AG",
      relationship: "Former manager (QAT)",
      title: "Head of IRB Swiss Bank",
      department: "Quantitative Analysis and Technology (QAT)",
      contact: "+41 78 883 20 47",
    },
    {
      name: "Dr. Massimo Cutaia",
      company: "Credit Suisse AG",
      relationship: "Former hiring manager (QAT)",
      title: "Global Head of Core Credit Modelling (QAT)",
      department: "Quantitative Analysis and Technology",
      contact: "+41 44 334 28 68",
    },
    {
      name: "André Rebmann",
      company: "Credit Suisse AG",
      relationship: "Former manager (BMR)",
      title: "Director",
      department: "Basel Measurement and Reporting",
      contact: "+41 44 333 01 59"
    },
    {
      name: "Sandro Cathomen",
      company: "Credit Suisse AG",
      relationship: "Former colleague (BMR)",
      title: "Investment Reporting Analyst",
      department: "Basel Measurement and Reporting",
      contact: "+41 78 659 16 71"
    },
  ],
  projects_clubs: [ { area: "CS Finance Innovation Circle  (2018 - 2020)",
  topics: "Representative of Swiss department in global working group " +
    "bringing rather legacy-focussing areas closer to BI tools and process automation techniques."},
    { area: "CS Valuation in Resolution Data Sourcing (2019)",
    topics: "Proof of Concept for the implementation of big data tools (Hadoop) to prepare for " +
    "shorter reporting cycles and daily batch runs. "},
    { area: "CS BMR Innovation Circle (2018)",
    topics: "Co-Project lead for Python- & R-based process automation."}]
};

// initialize html string and concat it later on
var listItem = "";
var listHTML = "";

// create array containing items that should not be considered when forming html string later on
var sideArrays = cv_obj.interests.concat(
  cv_obj.projects_clubs,
  cv_obj.education[0].topics,
  cv_obj.education[1].topics,
  cv_obj.education[2].topics
);

var skillsArray = 
cv_obj.skills.fundamentals.concat(
cv_obj.skills.good,
cv_obj.skills.verygood);

// create list with keywords that should be highlighted in cv
var keyWordCV = [
  "F#",
  "CI/CD",
  "Python",
  " R",
  "git",
  "Markdown",
  "Angular",
  "Bitbucket",
  "Odyssey",
  "Kanban",
  "Jira",
  "PL/SQL",
  "SQL",
];


/**
* containsAny checks whether any string is found in a list of substrings
* @param {string} str - string to be checked for in list
* @param {Array} substrings - list of strings to search in
* @return {null | Array} returns either null or the list of strings leading to a match
*/
function containsAny(str, substrings) {
  var matchesFound = [];
  for (var i = 0; i != substrings.length; i++) {
    var substring = substrings[i];
    if (str.indexOf(substring) != -1) {
      matchesFound.push(substring);
    }
  }
  if (matchesFound.length > 0) return matchesFound;
  else return null;
}

/**
* iterateList iterate list and pass to createHTMLList function
* @param {Object} object - key value pair from json file as an object
* @param {string} arrayname - placeholder (optional)
*/
function iterateList(object, arrayname) {
  let objarr = object;
  listHTML = "";
  listItem = "";
  objarr.forEach(createHTMLList);
  listHTML += listItem;
}

/**
* createHTMLList creates the html string of list items
* @param {string} value - string to be concat to html string
*/
function createHTMLList(value) {
  var highlightWords = containsAny(value, keyWordCV);
  var listItemSingle = "<li>" + value + "</li>";
  if (highlightWords != null && (!sideArrays.includes(value) && !skillsArray.includes(value))) {
    highlightWords.forEach(function(vle) {
      var pattern = new RegExp(vle, 'g');
      listItemSingle = listItemSingle.replace(pattern, "<highl>".concat(vle,"</highl>"));
    } );
    listItem += listItemSingle;
  } else {
    listItem += listItemSingle;
  }
}

/**
* buildID recursively scans the json object to decide whether to create a html id selector 
  from json key value pair or not (depending on depth of object)
* @param {any} input - can be Array, string or object (comes from json object)
* @return {Map} returns key-value map that can be used to pass to function creating html string
*/
var buildID = (input, output = {}, key = []) => {
  if (Array.isArray(input) && typeof input[0] != "string")
    input.forEach((v, i) => buildID(v, output, [...key, `${i}`]));
  else if (
    Array.isArray(input) &&
    typeof input[0] == "string" &&
    input[0] != undefined
  ) {
    iterateList(input);
    output[key.join("-")] = listHTML;
  } else if (typeof input === "object")
    Object.entries(input).forEach(([k, v]) => buildID(v, output, [...key, k]));
  else output[key.join("-")] = input;
  return output;
};

// trigger id selector creator function and save result
var result = buildID(cv_obj);

// iterate through every map item returned by buildID function and create id selector for html use
Object.entries(result).forEach(([key, value]) => {
  var idkey = key.toString();
  var hash = "#";
  var idKeyHash = hash.concat(idkey);
  $(idKeyHash).html(value);
});
