class EmployeePayrollDemo
{
    id;
    salary;
    constructor(id, name, salary,StartDate)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.StartDate=StartDate;
    }
    get name()
    {
        return this._name;
    }
    set name(name)
    {
    let nameRegex=RegExp('^[A-Z]{1)[a-z]{3,}$')
    if(nameRegex.test(name))
    this._name=name;
    else
    throw 'name is incorrect';
    }
    toString()
    {
        const options={year:'numeric',month:'long',da}
        return "Id="+this.id+", name: "+this.name+", salary: "+this.salary;
    }
}
    let employeePayrollDemo = new EmployeePayrollDemo(1,"mks",3000);
    console.log(employeePayrollDemo.toString());
