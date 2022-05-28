import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const RealTimeClockComponent = () => {
  const [dtaClock, setDtaClock] = useState(new Date(Date.now()));

  useEffect(() => {
    let clockId = setInterval(() => setDtaClock(new Date(Date.now())), 1000);

    return () => {
      clearInterval(clockId);
    };
  }, []);

  return (
    <View>
      <Text>{dtaClock.getUTCDate()}/{dtaClock.getUTCMonth()}/{dtaClock.getFullYear()} - {dtaClock.getHours()}:{dtaClock.getMinutes()}:{dtaClock.getSeconds()}</Text>
    </View>
  );
};

export default RealTimeClockComponent;
