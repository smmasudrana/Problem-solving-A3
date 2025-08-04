/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var currentSalary = startingSalary;
for (var year= 1; year <= experience; year++){
    currentSalary= currentSalary*1.05;
}
console.log(currentSalary.toFixed(2));