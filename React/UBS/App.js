import React, { Fragment,useState } from 'react'
import 'h8k-components'

import { AddEmployee, Employee } from './components'

const title = 'Editable Table'

const App = () => {
  const [employeesList, setEmployeesList] = useState([
    { id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 },
    { id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
    { id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
  ]);

  const addEmployee=(newEmployee)=>{
    const updatedEmployees = [
      ...employeesList,
      { id: employeesList.length, ...newEmployee },
    ];
    setEmployeesList(updatedEmployees);
  }

  const handleSaveSalary = (idx, newSalary) => {
    const updatedEmployees = employeesList.map((employee, i) =>
      i === idx ? { ...employee, salary: newSalary } : employee
    );
    setEmployeesList(updatedEmployees);
  };
  
  return (
    <Fragment>
      <h8k-navbar header={ title }></h8k-navbar>
      <div className="card w-45 mx-auto mt-75 pb-5">
        <table data-testid='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { employeesList.map((employee, idx) => (
                <tr key={ employee.id } data-testid={ `row-${idx}` }>
                  <Employee 
                    idx={ idx } 
                    employee={employee}
                  onSave={handleSaveSalary}
                  />
                </tr>
              ))}
              <tr>
                <AddEmployee onAddEmployee={addEmployee} />
              </tr>
            </tbody>
          </table>
      </div>
    </Fragment>
  )
}

export default App
