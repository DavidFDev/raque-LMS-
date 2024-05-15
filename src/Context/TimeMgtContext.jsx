import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const DateAndTimeContext = createContext();

export const useDateAndTimeContext = () => useContext(DateAndTimeContext);

const TimeMgtProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [borrowDate, setBorrowDate] = useState(
    localStorage.getItem("borrowDate")
  );
  const [returnDate, setReturnDate] = useState(
    localStorage.getItem("returnDate") || ""
  );
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();

  const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const handleCalculateDates = () => {
    const borrowDateTime = new Date(currentDate);
    const returnDateTime = new Date(borrowDateTime);
    returnDateTime.setHours(borrowDateTime.getHours() + 1);

    const formattedBorrowDate = formatDate(borrowDateTime);
    const formattedReturnDate = formatDate(returnDateTime);

    setBorrowDate(formattedBorrowDate);
    setReturnDate(formattedReturnDate);
    localStorage.setItem("returnDate", formattedReturnDate);
    localStorage.setItem("borrowDate", formattedBorrowDate);

    
    // Check if the current date is after the return date
    const currentDateTime = new Date(); // Get the current date and time
    setIsExpired(currentDateTime > returnDateTime); 

    console.log(returnTimestamp)
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-NG", {
      weekday: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  useEffect(() => {
    // No dependencies here to prevent re-renders on state changes
  }, []); // Empty dependency array ensures this effect runs only once

  const value = {
    handleCalculateDates,
    borrowDate,
    returnDate,
    isExpired,
  };

  return (
    <DateAndTimeContext.Provider value={value}>
      {children}
    </DateAndTimeContext.Provider>
  );
};

export default TimeMgtProvider;
