import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for datepicker
import "./TaskDetails.css";

function TaskDetails() {
  const [steps, setSteps] = useState([]);
  const [reminder, setReminder] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [notes, setNotes] = useState("");
  const [isDatePickerVisible, setDatePickerVisible] = useState(false); // State for showing date picker
  const [selectedDate, setSelectedDate] = useState(null); // State to hold selected date

  // Function to add a step
  const handleAddStep = () => {
    const step = prompt("Enter step:");
    if (step) {
      setSteps([...steps, step]);
    }
  };

  // Function to set a reminder
  const handleSetReminder = () => {
    const reminderDate = prompt(
      "Enter reminder date and time (e.g., 2024-09-01 09:00):"
    );
    if (reminderDate) {
      setReminder(reminderDate);
    }
  };

  // Function to toggle the visibility of the date picker
  const handleToggleDatePicker = () => {
    setDatePickerVisible((prev) => !prev);
  };

  // Function to handle the date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDueDate(date.toISOString().split("T")[0]); // Format the date as YYYY-MM-DD
    setDatePickerVisible(false); // Hide the date picker after selecting
  };

  // Function to toggle repeat
  const handleToggleRepeat = () => {
    setRepeat(!repeat);
  };

  // Function to add notes
  const handleAddNotes = () => {
    const note = prompt("Enter notes:");
    if (note) {
      setNotes(note);
    }
  };

  return (
    <div className="task-details">
      <ul className="details-options">
        <li onClick={handleAddStep}>Add Step</li>
        <li onClick={handleSetReminder}>Set Reminder</li>
        <li onClick={handleToggleDatePicker}>
          {dueDate ? `Due Date: ${dueDate}` : "Add Due Date"}
        </li>
        {isDatePickerVisible && (
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline // Display the calendar inline
            dateFormat="yyyy/MM/dd" // Format the displayed date
          />
        )}
        <li onClick={handleToggleRepeat}>
          {repeat ? "Repeat: On" : "Repeat: Off"}
        </li>
        <li onClick={handleAddNotes}>Add Notes</li>
      </ul>

      {/* Displaying the added details */}
      <div className="task-detail-info">
        {steps.length > 0 && (
          <div>
            <h4>Steps:</h4>
            <ul>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
        {reminder && (
          <div>
            <h4>Reminder:</h4>
            <p>{reminder}</p>
          </div>
        )}
        {dueDate && (
          <div>
            <h4>Due Date:</h4>
            <p>{dueDate}</p>
          </div>
        )}
        <div>
          <h4>Repeat:</h4>
          <p>{repeat ? "Yes" : "No"}</p>
        </div>
        {notes && (
          <div>
            <h4>Notes:</h4>
            <p>{notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskDetails;
