// Intro

export const intro = [
  "For this practice, we will start off with choosing the color of your quilt pattern. The make-up of your family unit will determine the color of your digital artifact. You can think about your “family unit” as the people living in your family household. To better help you answer this question, think of the people living in your most recent family household. If you are a grandparent, what type of household did you raise your children in? If you are a college student, what was your childhood household like?",
  "In today’s society, several variations of family types exist the six listed below being the most prominent:",
];

// Family Type

const youth = {
  colorA: "#B7230F",
  colorB: "#164E08",
  colorC: "#FFB800",
  colorBackground: "#F9EED3",
};
const twelveAge = {
  colorA: "#1B427B",
  colorB: "#73CDFF",
  colorC: "#C9FCB8",
  colorBackground: "#FFFD83",
};
const eighteenAge = {
  colorA: "#1B427B",
  colorB: "#73CDFF",
  colorC: "#FFB36D",
  colorBackground: "#FBFAD2",
};
const twentyfiveAge = {
  colorA: "#371265",
  colorB: "#C1ABCF",
  colorC: "#C03750",
  colorBackground: "#A4CFE8",
};
const thirtyfiveAge = {
  colorA: "#4F6D7A",
  colorB: "#DD6E42",
  colorC: "#C0D6DF",
  colorBackground: "#E8DAB2",
};
const fortyfiveAge = {
  colorA: "#BA1632",
  colorB: "#73CDFF",
  colorC: "#D0FD35",
  colorBackground: "#C9FCB8",
};
const fiftyfiveAge = {
  colorA: "#73CDFF",
  colorB: "#164E08",
  colorC: "#D0FD35",
  colorBackground: "#F9EED3",
};
const sixtyfiveAge = {
  colorA: "#73CDFF",
  colorB: "#DD6E42",
  colorC: "#D0FD35",
  colorBackground: "#F9EED3",
};
const seventyfiveAge = {
  colorA: "#73CDFF",
  colorB: "#DD6E42",
  colorC: "#D0FD35",
  colorBackground: "#C1ABCF",
};


export const ageType = {
  id: "age_type",
  label: "What is your age?",
  heading: "Color Palette",
  subHeading: "sub-heading",
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
  subLabel: "For parents, what family type did you raise your family in?",
  value: undefined,
  options: [
    { value: { shapeList: "triangleSet", shape: 0 }, label: "Nuclear" },
    { value: { shapeList: "halfSet", shape: 3 }, label: "Single-Parent" },
    { value: { shapeList: "triangleSet", shape: 1 }, label: "Blended/ Step" },
    { value: { shapeList: "triangleSet", shape: 2 }, label: "Childless" },
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
    { value: { shapeList: "halfSet", shape: 2 }, label: "1" },
    { value: { shapeList: "halfSet", shape: 0 }, label: "2" },
    { value: { shapeList: "triangleSet", shape: 3 }, label: "3" },
    { value: { shapeList: "triangleSet", shape: 0 }, label: "4-6" },
    { value: { shapeList: "steepleSet", shape: 2 }, label: "7-9" },
    { value: { shapeList: "hourglassSet", shape: 0 }, label: "10+" },
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
  subHeading: "sub-heading",
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
      value: { shapeList: "halfSet", shape: 3 },
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
      label: "Oppurtunity",
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
  label: "WHow many family generations have lived in your current country?",
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
  subHeading: "sub-heading",
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
  subHeading: "sub-heading",
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
      value: { shapeList: "triangleSet", shape: 1 },
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
  subHeading: "sub-heading",
  layers: [timeSpent, trustLevel, closeness],
};
