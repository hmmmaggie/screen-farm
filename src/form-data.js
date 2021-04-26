// Intro

export const intro = [
  "Screen–Farm is a generative design tool that uses questions about your family history to output a quilt pattern that uniquely represents your heritage. A new take on the family tree.",
  "During a time when relationships are most valuable, the intention of this project is to create a visual representation of the many different types of family in the world today; celebrating their make-up, community, culture, and heritage.",
];

// Family Type

const youth = {
  colorA: "#4678EE",
  colorB: "#EEEEE5",
  colorC: "#E25672",
  colorBackground: "#5BC680",
};

const twelveAge = {
  colorA: "#3C8871",
  colorB: "#CF5F4F",
  colorC: "#EEE7DD",
  colorBackground: "#FAA2B6",
};
const eighteenAge = {
  colorA: "#CE7B91",
  colorB: "#EEEEE5",
  colorC: "#A1AEA3",
  colorBackground: "#8376BA",
};

//don't love this one yet
const twentyfiveAge = {
  colorA: "#418FB0",
  colorB: "#EEE7DD",
  colorC: "#EACA52",
  colorBackground: "#E08A68",
};
const thirtyfiveAge = {
  colorA: "#E8DAB2",
  colorB: "#4F6D7A",
  colorC: "#C0D6DF",
  colorBackground: "#C74F2A",
};
const fortyfiveAge = {
  colorA: "#247BA0",
  colorB: "#CBD4C2",
  colorC: "#C3B299",
  colorBackground: "#50514F",
};
const fiftyfiveAge = {
  colorA: "#8EAFDE",
  colorB: "#FFE1E6",
  colorC: "#FFBB6C",
  colorBackground: "#C74F2A",
};

//don't love this one
const sixtyfiveAge = {
  colorA: "#5BC6C0",
  colorB: "#EEEEE5",
  colorC: "#BAA9FF",
  colorBackground: "#86EE46",
};
const seventyfiveAge = {
  colorA: "#C1ABCF",
  colorB: "#FEF5EF",
  colorC: "#D6E3F8",
  colorBackground: "#9D5C63",
};

export const ageType = {
  id: "age_type",
  label: "What is your age?",
  heading: "Color Palette",
  subHeading: "For the purpose of this activity, your age determines the color palette of your quilt. This is important because what you know and how you relate to your family can differ depending on what stage of life you are in.",
  subLabel: null,
  value: null,
  options: [
    {
      value: youth,
      label: "Under 12 years old",
    },
    {
      value: twelveAge,
      label: "12-17 years old",
    },
    {
      value: eighteenAge,
      label: "18-24 years old",
    },
    {
      value: twentyfiveAge,
      label: "25-34 years old",
    },
    {
      value: thirtyfiveAge,
      label: "35-44 years old",
    },
    {
      value: fortyfiveAge,
      label: "45-54 years old",
    },
    {
      value: fiftyfiveAge,
      label: "55-64 years old",
    },
    {
      value: sixtyfiveAge,
      label: "65-74 years old",
    },
    {
      value: seventyfiveAge,
      label: "75 years or older",
    },
  ],
};

// Family Make-up

const familyType = {
  id: "familyType",
  label: "What type of family did you grow up in?",
  subLabel: null,
  value: undefined,
  options: [
    { value: { shapeList: "triangleSet", shape: 0 }, label: "Nuclear" },
    { value: { shapeList: "halfSet", shape: 3 }, label: "Single-Parent" },
    { value: { shapeList: "triangleSet", shape: 1 }, label: "Blended/ Step" },
    { value: { shapeList: "halfSet", shape: 1 }, label: "Grandparent" },
    { value: { shapeList: "steepleSet", shape: 1 }, label: "Extended" },
    { value: { shapeList: "hourglassSet", shape: 1 }, label: "Other" },
  ],
};

const familySize = {
  id: "familySize",
  label: "How many people are in your immediate family?",
  subLabel: "This includes: birth, adoptive, half, and step family members.",
  value: undefined,
  options: [
    { value: { shapeList: "halfSet", shape: 0 }, label: "2" },
    { value: { shapeList: "triangleSet", shape: 3 }, label: "3" },
    { value: { shapeList: "triangleSet", shape: 0 }, label: "4" },
    { value: null, label: "5-7" },
    { value: { shapeList: "steepleSet", shape: 2 }, label: "8-10" },
    { value: { shapeList: "hourglassSet", shape: 0 }, label: "11+" },
  ],
};

const community = {
  id: "community",
  label: "What community does your family live in?",
  subLabel: null,
  value: null,
  options: [
    { value: { shapeList: "triangleSet", shape: 1 }, label: "Urban" },
    { value: { shapeList: "halfSet", shape: 3 }, label: "Rural" },
    { value: { shapeList: "halfSet", shape: 1 }, label: "Suburban" },
  ],
};

export const familyMakeup = {
  heading: "Family Makeup",
  subHeading: "Your family make-up is a reflection of the family type, size, and community you were raised in - or for parents - what you raised your children in.",
  layers: [familyType, familySize, null, community],
};

// Family Heritage

const countriesOfOG = {
  id: "origin_countries",
  label: "How many countries does your family identify their heritage with?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: null,
      label: "1",
    },
    {
      value: { shapeList: "triangleSet", shape: 1 },
      label: "2",
    },
    {
      value: { shapeList: "hourglassSet", shape: 1 },
      label: "3",
    },
    {
      value: { shapeList: "triangleSet", shape: 2 },
      label: "4",
    },
    {
      value: { shapeList: "steepleSet", shape: 0 },
      label: "5",
    },
    {
      value: { shapeList: "hourglassSet", shape: 0 },
      label: "6+",
    },
  ],
};

const languageCount = {
  id: "language_count",
  label: "How many languages are spoken in your family?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: null,
      label: "1",
    },
    {
      value: { shapeList: "triangleSet", shape: 3 },
      label: "2",
    },
    {
      value: { shapeList: "halfSet", shape: 3 },
      label: "3+",
    },
  ],
};

const reasonForMigrating = {
  id: "migration",
  label: "Why did your family come to live in your current country?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "steepleSet", shape: 1 },
      label: "N/A, Native",
    },
    {
      value: { shapeList: "triangleSet", shape: 3 },
      label: "Opportunity",
    },
    {
      value: { shapeList: "hourglassSet", shape: 1 },
      label: "Education",
    },
    {
      value: { shapeList: "halfSet", shape: 1 },
      label: "Love",
    },
    {
      value: { shapeList: "halfSet", shape: 3 },
      label: "Religion",
    },
    {
      value: { shapeList: "triangleSet", shape: 1 },
      label: "Political / War",
    },
    {
      value: { shapeList: "steepleSet", shape: 2 },
      label: "Environmental",
    },
    {
      value: { shapeList: "hourglassSet", shape: 0 },
      label: "Other",
    },
  ],
};

const nativeGenCount = {
  id: "generations",
  label: "How many family generations have lived in your current country?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "halfSet", shape: 2 },
      label: "4+",
    },
    {
      value: { shapeList: "triangleSet", shape: 0 },
      label: "3",
    },
    {
      value: null,
      label: "2",
    },
    {
      value: { shapeList: "hourglassSet", shape: 1 },
      label: "1",
    },
  ],
};

export const familyHeritage = {
  heading: "Family Heritage",
  subHeading: "Family heritage is important to many of us. Where we came from and our cultural experiences play a big role in shaping our perspectives on the world.",
  layers: [countriesOfOG, languageCount, reasonForMigrating, nativeGenCount],
};

// Family Attributes

const religiousPreference = {
  id: "religious_preference",
  label: "What are your family's religious beliefs?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "halfSet", shape: 2 },
      label: "Religious/ Traditional",
    },
    {
      value: { shapeList: "triangleSet", shape: 0 },
      label: "Religious/ Non-Traditional",
    },
    {
      value: { shapeList: "triangleSet", shape: 3 },
      label: "Non-Religious/ Traditional",
    },
    {
      value: { shapeList: "hourglassSet", shape: 0 },
      label: "Non-Religious/ Non-Traditional",
    },
  ],
};

const athleticism = {
  id: "athleticism",
  label: "Which of these attributes best describe your family?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "triangleSet", shape: 0 },
      label: "Athletic",
    },
    {
      value: { shapeList: "hourglassSet", shape: 1 },
      label: "Competitive",
    },
    {
      value: null,
      label: "Neither",
    },
    {
      value: { shapeList: "triangleSet", shape: 2 },
      label: "Both",
    },
  ],
};

const creativity = {
  id: "creativity",
  label: "Which of these attributes best describe your family?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "triangleSet", shape: 1 },
      label: "Creative",
    },
    {
      value: { shapeList: "steepleSet", shape: 3 },
      label: "Academic",
    },
    {
      value: null,
      label: "Neither",
    },
    {
      value: { shapeList: "triangleSet", shape: 3 },
      label: "Both",
    },
  ],
};

export const familyAttributes = {
  heading: "Family Attributes",
  subHeading: "Some of the most interesting aspects about our family can be found in how we spend our free time. Does your family pray or meditate? Is your schedule constantly booked with local sports games? Are you a family of artists?",
  layers: [religiousPreference, null, athleticism, creativity],
};

// Family Closeness

const timeSpent = {
  id: "time_spent",
  label: "Do you enjoy spending time with your family?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "triangleSet", shape: 0 },
      label: "Yes",
    },
    {
      value: { shapeList: "halfSet", shape: 3 },
      label: "Sometimes",
    },
    {
      value: null,
      label: "No",
    },
  ],
};

const trustLevel = {
  id: "trust_level",
  label: "Do you have a family member you can confide in?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "halfSet", shape: 0 },
      label: "Yes",
    },
    {
      value: { shapeList: "halfSet", shape: 2 },
      label: "Sometimes",
    },
    {
      value: null,
      label: "No",
    },
  ],
};

const closeness = {
  id: "closeness",
  label: "How close would you consider your family?",
  subLabel: null,
  value: undefined,
  options: [
    {
      value: { shapeList: "hourglassSet", shape: 1 },
      label: "Not Close, Detached",
    },
    {
      value: { shapeList: "halfSet", shape: 0 },
      label: "Somewhat Close",
    },
    {
      value: null,
      label: "Neutral",
    },
    {
      value: { shapeList: "triangleSet", shape: 3 },
      label: "Close",
    },
    {
      value: { shapeList: "steepleSet", shape: 3 },
      label: "Very Close",
    },
  ],
};

export const familyCloseness = {
  heading: "Family Closeness",
  subHeading: "For this final set of questions, reflect on your personal relationship with the people in your family.",
  layers: [timeSpent, trustLevel, closeness],
};
