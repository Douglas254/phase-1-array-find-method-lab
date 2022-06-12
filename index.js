// code your solution here
/*
    returns a year the Denver Broncos won the superbowl
    returns undefined if the record has no win objects
*/
const superbowlWin = (record) => {
  let WinYear;
  for (let i = 0; i < record.length; i++) {
    const data = record[i];
    if (data.result == "W") {
      WinYear = data.year;
      break;
    }
  }
  return WinYear;
};
