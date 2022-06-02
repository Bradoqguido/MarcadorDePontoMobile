import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Localization from 'expo-localization';

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
      <Text>{dtaClock.toLocaleDateString(Localization.locale)} - {dtaClock.toLocaleTimeString(Localization.locale)}</Text>
    </View>
  );
};

export default RealTimeClockComponent;
