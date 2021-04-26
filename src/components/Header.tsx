import React, { useEffect, useState } from "react";
import moment from "moment";

interface Props {
  currentQuestion: number;
  totalQuestionNumber: number;
  timer: number;
}
const Header: React.FC<Props> = ({
  currentQuestion,
  totalQuestionNumber,
  timer,
}) => {
  const [timerOut, setTimeOut] = useState<string | null>(null);
  const [endTime] = useState(moment().add({ minute: timer }));

  useEffect(() => {
    setInterval(() => {
      const startTime = moment(new Date());
      const duration = moment.duration(endTime.diff(startTime));
      const hours =
        Math.round(duration.asHours()) > 1 ? Math.round(duration.asHours()) : 0;
      const minutes =
        Math.round(duration.asMinutes()) - hours * 60
          ? Math.round(duration.asMinutes())
          : 0;
      const seconds =
        Math.round(duration.asSeconds()) - minutes * 60
          ? Math.round(duration.asSeconds())
          : 0;

      const timeShowOut = seconds > 0 ? `${minutes}m ${seconds}s` : null;
      setTimeOut(timeShowOut);
    }, 1000);
  }, [timerOut]);

  const progressBar = (currentQuestion * 100) / totalQuestionNumber;
  return (
    <div>
      <div>
        <div>
          <h1>Minerals Quiz</h1>
        </div>
        <div>
          <span>
            {timerOut ? `Remaining Time : ${timerOut}` : "Time is over!"}
          </span>
        </div>
      </div>
      <div>
        <progress value={progressBar} max="100">
          {" "}
          {progressBar}{" "}
        </progress>
      </div>
    </div>
  );
};

export default Header;
