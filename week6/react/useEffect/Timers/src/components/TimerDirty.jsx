import { useState, useEffect } from "react";

export default function TimerDirty() {
  console.log("TimerDirty is now TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerDirty now Timer clean component useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

return() => {
    clearInterval(interval)
};

  }, []);

  return <div>
        TimerDirty now clean: {count}
    </div>;
  
}