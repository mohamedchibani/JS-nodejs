
function retirement(retirementAge){
    var a = ' years left until retirement';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge-age) + a);
    }
}


var retirementUS = retirement(60);
retirementUS(1996);
retirement(60)(1996);