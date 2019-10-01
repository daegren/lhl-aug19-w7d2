import React, { useState, useEffect } from "react";
import moment from "moment";

const FromNow = ({ date }) => {
  const [fromNow, setFromNow] = useState(moment(date).fromNow());

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer running", date);

      setFromNow(moment(date).fromNow());
    }, 5000);

    return () => {
      console.log("cleaning up timer");
      clearInterval(timer);
    };
  }, [date]);

  return <span>{fromNow}</span>;
};

export default FromNow;
