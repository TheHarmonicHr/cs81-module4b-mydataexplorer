// Weekly data journal logging sleep, screen time, mood, steps, and focus levels

const weekData = [
  {
    day: "Sunday",
    sleepHours: 6.5,
    screenTime: 5.9,
    mood: "chill",
    stepsMiles: 7.8,
    focusLevel: 6
  },
  {
    day: "Monday",
    sleepHours: 5,
    screenTime: 8.2, // most usage
    mood: "anxious",
    stepsMiles: 8.2,
    focusLevel: 4
  },
  {
    day: "Tuesday",
    sleepHours: 6.2,
    screenTime: 6.5,
    mood: "productive",
    stepsMiles: 8.0,
    focusLevel: 7
  },
  {
    day: "Wednesday",
    sleepHours: 7,
    screenTime: 6.0,
    mood: "focused",
    stepsMiles: 8.1,
    focusLevel: 8
  },
  {
    day: "Thursday",
    sleepHours: 5.8,
    screenTime: 6.7,
    mood: "tired",
    stepsMiles: 7.9,
    focusLevel: 5
  },
  {
    day: "Friday",
    sleepHours: 6.5,
    screenTime: 5.3,
    mood: "playful",
    stepsMiles: 8.4,
    focusLevel: 6
  },
  {
    day: "Saturday",
    sleepHours: 7.2,
    screenTime: 6.1,
    mood: "rested",
    stepsMiles: 9.0,
    focusLevel: 7
  }
];

// 1. Find the day with the highest screen time
function findHighestScreenTime(data) {
  let maxDay = data[0];
  for (let day of data) {
    if (day.screenTime > maxDay.screenTime) {
      maxDay = day;
    }
  }
  return `${maxDay.day} had the highest screen time at ${maxDay.screenTime} hours.`;
}

// 2. Calculate average sleep across the week
function averageSleep(data) {
  let total = 0;
  for (let day of data) {
    total += day.sleepHours;
  }
  return `Average sleep: ${(total / data.length).toFixed(2)} hours.`;
}

// 3. Find the most frequent mood
function mostFrequentMood(data) {
  const moodCount = {};
  for (let day of data) {
    moodCount[day.mood] = (moodCount[day.mood] || 0) + 1;
  }

  let maxMood = null;
  let maxCount = 0;
  for (let mood in moodCount) {
    if (moodCount[mood] > maxCount) {
      maxMood = mood;
      maxCount = moodCount[mood];
    }
  }

  return `Most frequent mood: "${maxMood}"`;
}

// 4. Find average focus level
function findAverageFocus(data) {
  let total = 0;
  for (let day of data) {
    total += day.focusLevel;
  }
  return `Average focus level: ${(total / data.length).toFixed(1)} (out of 10)`;
}

console.log(findHighestScreenTime(weekData));
console.log(averageSleep(weekData));
console.log(mostFrequentMood(weekData));
console.log(findAverageFocus(weekData));
