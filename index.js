const saturdayFun = function(activity="roller-skate", activity2="bathe my dog") {
  if (activity){
    return ( `This Saturday, I want to ${activity}!`)
  }
  else if (activity2) {
    return ( `This Saturday, I want to ${activity2}!`)
  }
  
}
let mondayWork = function(activity="go to the office" , activity2= "work from home") {
  if (activity) {
    return (`This Monday, I will ${activity}.`)
  }
  else if (activity2) {

    return (`This Monday, I will ${activity2}.`)
  }
}

let wrapAdjective = function(style="*") {
  return function (adjective ="special") {
return `You are ${style}${adjective}${style}!`
  }
} 