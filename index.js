// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go to the beach")); // Output: "This Saturday, I want to go to the beach!"

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  