var jsonfile = {
  "workxp-list": [
    {
      department:
        "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
      "workxp-title": "Senior Quantitative Analyst",
      "workxp-time": "02/23-present",
      subtasks: ["sdf"],
      references: [
        {
          name: "Dorothee Bill",
          contact: "0123456789",
        },
        {
          name: "Dr. Massimo Cutaia",
          contact: "0123456789",
        },
      ],
    },
    {
      department:
        "(Quantitative Analysis and Technology – Credit Suisse AG, Zurich)",
      "workxp-title": "Senior Model Developer",
      "workxp-time": "08/20-02/23",
    },
    {
      department:
        "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
      "workxp-title": "Line Management – Regulatory Reporting (IB)",
      "workxp-time": "10/19-08/20",
      subtasks: ["55"],
      references: [
        {
          name: "Dordothee Bill",
          contact: "012345s6789",
        },
        {
          name: "Dr. Massksimo Cutaia",
          contact: "01234s56789",
        },
      ],
    },
    {
      department:
        "(Basel Measurement and Reporting – Credit Suisse AG, Zurich)",
      "workxp-title": "Regulatory Reporting (PB)",
      "workxp-time": "01/17-10/19",
      subtasks: ["ss55"],
      references: [
        {
          name: "Dordodthee Bill",
          contact: "012345s6d789",
        },
        {
          name: "Dr. Massssimo Cutkdaia",
          contact: "01234sd56789",
        },
      ],
    },
  ],

  education: [
    {
      institution: "FernUniversität Hagen",
      "student-workxp": [
        {
          department:
            "Asset Liability Management – Sparkasse KölnBonn, Cologne",
          "student-workxp-time": "01/15-03/15",
          tasks: " funds.",
        },
        {
          department: "Consultiddng – amx consulting, Hagen",
          "student-workxp-time": "01/1f1-02/11",
          tasks: " online mffedia.",
        },
      ],
    },
    {
      institution: "International School of Management Dortmund",
      "student-workxp": [
        {
          department: "Controlling – Bosch Rexroth AG, Witten",
          "student-workxp-time": "02/14-08/14",
          tasks: "control systems.",
        },
        {
          department: "Consulting – amx consulting, Hagen",
          "student-workxp-time": "01/11-02/11",
          tasks: " online media.",
        },
      ],
    },
  ],
}

function f(data, prev = '') {
  return Object.entries(data).reduce((r, [k, v]) => {
    const key = prev + (prev ? '-' : '') + k

    if (typeof v === 'object') {
      if (Array.isArray(v)) {
        v.forEach((o, i) => Object.assign(r, f(o, key + `-${i}`)))
        console.log("Array job" + key + " and " + v);
      } else {
        Object.assign(r, f(v, key))
        console.log("Assign job" + key + " and " + v);
      }
    } else {
      r[key] = v
      console.log("Else no object: " + key + " and " + v);
    }
    
    return r
  }, {})
}

var buildRecursion = (input, output = {}, key = []) => {
    if (Array.isArray(input))
        input.forEach((v, i) =>
            buildRecursion(v, output, [...key, `A${i}`]));
    else if (typeof input === 'object')
        Object.entries(input).forEach(([k, v]) =>
            buildRecursion(v, output, [...key, k]));
    else
        output[key.join('::')] = input;
    return output;
};

let result = buildRecursion(jsonfile);
console.log(result);
/*
const result = f(jsonfile);
console.log(result)*/