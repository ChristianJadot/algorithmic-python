function numberToDay(x){
    var daysOfWeek = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];        
    return daysOfWeek[x-1];
}

// exemple pour print lundi dans la console
console.log(numberToDay(1));