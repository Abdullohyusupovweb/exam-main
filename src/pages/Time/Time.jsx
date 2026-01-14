import { useEffect, useState } from "react";
import { Center, Heading } from "rsuite";

export default function Time() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();

    // Bugungi sana + 16:00
    const target = new Date();
    target.setHours(16, 0, 0, 0);

    const diff = target - now;

    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, finished: true };
    }

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      finished: false,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.finished) {
    return (
      <Center w={"100%"} h={"100%"}>
        <Heading level={2}>⏳ ⏰ Vaqt tugadi</Heading>
      </Center>
    );
  }

  return (
    <Center w={"100%"} h={"100%"}>
      <Heading level={2}>
        ⏳ Qolgan vaqt: {timeLeft.hours} soat {timeLeft.minutes} daqiqa{" "}
        {timeLeft.seconds} sekund
      </Heading>
    </Center>
  );
}
