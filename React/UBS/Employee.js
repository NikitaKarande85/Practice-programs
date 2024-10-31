import React, { Fragment,useState } from 'react'

const Employee = ({ idx, employee, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [salary, setSalary] = useState(employee.salary);
  const [initialSalary] = useState(employee.salary); 
  const handleSaveClick = () => {
    onSave(idx, salary);
    setIsEditing(false);
  };

  return (
    <Fragment>
      <td>{employee.name}</td>
      <td className="pl-20">{employee.position}</td>
      <td className="pl-20">
        {isEditing ? (
          <input
            data-testid={'employee-salary-input-' + idx}
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        ) : (
          <div
            data-testid={'employee-salary-div-' + idx}
            onClick={() => setIsEditing(true)}
          >
            {salary}
          </div>
        )}
      </td>
      <td className="pl-20">
        <button
          className="x-small w-75 ma-0 px-25"
          data-testid={'employee-save-button-' + idx}
          onClick={handleSaveClick}
          disabled={!isEditing || salary === initialSalary}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};


export default Employee
