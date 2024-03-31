import { useEffect, useState } from "react";

export const useCalculateAge = (birthDate) => {
  const [birthDateDate, setBirthDate] = useState(birthDate);
  const currentDate = new Date();
  const yearDiff = currentDate.getFullYear() - birthDateDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDateDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDateDate.getDate();

  if (monthDiff < 0) {
    yearDiff--;
  }

  if (dayDiff < 0) {
    monthDiff--;
  }

  const [age, setAge] = useState({
    years: yearDiff,
    months: monthDiff,
    days: dayDiff,
  });

  useEffect(() => {
    const updateAge = () => {
      const newYearDiff =
        currentDate.getFullYear() - birthDateDate.getFullYear();
      const newMonthDiff = currentDate.getMonth() - birthDateDate.getMonth();
      const newDayDiff = currentDate.getDate() - birthDateDate.getDate();

      if (newMonthDiff < 0) {
        newYearDiff--;
      }

      if (newDayDiff < 0) {
        newMonthDiff--;
      }

      setAge({
        years: newYearDiff,
        months: newMonthDiff,
        days: newDayDiff,
      });
    };

    updateAge();
  }, [birthDateDate]);

  return { age, setBirthDate };
};
