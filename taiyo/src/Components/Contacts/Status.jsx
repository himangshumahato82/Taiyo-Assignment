import React, { useState } from 'react';

function Status({ status }) {
    const init=status.completed
  const [isActive, setIsActive] = useState(init);
   console.log(isActive)
  const handleStatusChange = (event) => {
    setIsActive(event.target.value === 'active');
  }
  console.log(status)

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1>Status:</h1>
        <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
          <div>
            <input
              type="radio"
              id="active"
              name="status"
              value="active"
              checked={isActive}
              onChange={handleStatusChange}
            />
            Active
          </div>
          <div className="col-2">
            <input
              type="radio"
              id="inactive"
              name="status"
              value="inactive"
              checked={!isActive}
              onChange={handleStatusChange}
            />
            Inactive
          </div>
        </div>
      </div>
    </div>
  );
}


export default Status;