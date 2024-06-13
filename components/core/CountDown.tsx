import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

// Define the prop types
interface CountdownProps {
  targetDate: string;
}

const CountDown = ({ targetDate }: CountdownProps) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDateTime = new Date(targetDate).getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDateTime - now;

      if (distance < 0) {
        // If the target date is in the past, stop the interval and set time to zero
        clearInterval(intervalId);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <View className=" mt-4 mx-6 flex bg-[#32cd32]/[0.85] flex-row justify-center items-center rounded-lg divide-white divide-x-[1px]">
      <View className="flex w-[25%] justify-center items-center px-3 py-[1px]">
        <Text className="text-gray-700 font-extrabold uppercase text-[12px]">
          Days
        </Text>
        <Text className="text-white text-[18px] font-[900]">{time.days}</Text>
      </View>
      <View className="flex w-[24%] justify-center items-center px-3 py-1">
        <Text className="text-gray-700 font-extrabold uppercase text-[12px]">
          Hours
        </Text>
        <Text className=" text-white text-[18px] font-[900]">{time.hours}</Text>
      </View>
      <View className="flex w-[24%] justify-center items-center px-2 py-1">
        <Text className="text-gray-700 font-extrabold uppercase text-[12px]">
          Minutes
        </Text>
        <Text className=" text-white text-[18px] font-[900]">{time.minutes}</Text>
      </View>
      <View className="flex w-[25%] justify-center items-center px-3 py-1">
        <Text className="text-gray-700 font-extrabold uppercase text-[12px]">
          Seconds
        </Text>
        <Text className="text-white text-[18px] font-[900]">{time.seconds}</Text>
      </View>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({});
