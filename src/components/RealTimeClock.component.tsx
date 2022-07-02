import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Localization from 'expo-localization';
import Clock from "./Clock.component";

const RealTimeClockComponent = () => {
  const [dtaClock, setDtaClock] = useState(new Date(Date.now()));
  const [numSecondRatio, setSecondRatio] = useState(0);
  const [numMinuteRatio, setMinuteRatio] = useState(0);
  const [numHourRatio, setHourRatio] = useState(0);

  useEffect(() => {
    let clockId = setInterval(() => setDtaClock(new Date(Date.now())), 1000);

    setSecondRatio(dtaClock.getSeconds() / 60);
    setMinuteRatio(dtaClock.getMinutes() / 60);
    setHourRatio(dtaClock.getHours() / 12);

    return () => {
      clearInterval(clockId);
    };
  }, []);

  return (
    <View>
      <Clock secondRatio={numSecondRatio} minuteRatio={numMinuteRatio} hourRatio={numHourRatio} />
      <Text>{dtaClock.toLocaleDateString(Localization.locale)} - {dtaClock.toLocaleTimeString(Localization.locale)}</Text>
    </View>
  );
};

export default RealTimeClockComponent;
