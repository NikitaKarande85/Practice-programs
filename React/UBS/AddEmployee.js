import React, { Fragment,useState } from 'react'

const AddEmployee = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const isFormValid = name && position && salary;

  const handleAddClick = () => {
    if (isFormValid) {
      onAddEmployee({ name, position, salary: parseInt(salary) });
      setName('');
      setPosition('');
      setSalary('');
    }
  };

  return (
    <Fragment>
      <td className="pl-30">
        <input
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-salary-input"
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </td>
      <td className="pl-20">
        <button
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
          onClick={handleAddClick}
          disabled={!isFormValid}
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee
