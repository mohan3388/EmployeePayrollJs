//Uc1 check employee
const Is_present=1;
let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==Is_present)
{
    console.log("employee is present");
}else{
    console.log("employee is absent");
}


//Uc2 switch case
const Is_Fulltime=2;
const Is_Parttime=1;
const Parttime_Hours=4;
const Fulltime_Hours=8;
const Wage_Per_Hours=20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random()*10)%2;
    switch(empCheck){
        case Is_Parttime:
            empHrs=Parttime_Hours;
            break;
        case Is_Fulltime:
           empHrs=Fulltime_Hours;
        default:
            empHrs=0;
    }
    let empWage = empHrs*Wage_Per_Hours;
    console.log("calculate empwage: "+empWage);
}


//UC3 Calculate EmployeeWage Using Function
function getWorkingHours(empCheck){
    switch(empCheck)
    {
        case Is_Parttime:
            return Parttime_Hours;
            
        case Is_Fulltime:
            return Fulltime_Hours;
        default:
            return 0;
    }
}
   
    
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs*Wage_Per_Hours;
    console.log("Total Hrs: "+empHrs+"calculate empwage: "+empWage);

      //Uc4 using for loop calculate empwage
{
let TotalEmpHrs=0;
var Number_Of_WorkingDay=20;
for(let day=0; day<Number_Of_WorkingDay; day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    TotalEmpHrs+=getWorkingHours(empCheck);
}
let empWage = TotalEmpHrs*Wage_Per_Hours;
console.log("Hour: "+TotalEmpHrs+" EmpWage: "+empWage);
}