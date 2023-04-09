import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const Slider = () => {
  return (
    <>
      <View>
        <View className="px-4">
          <Text className="font-extrabold text-xl">
            Mau olahraga apa hari ini ?
          </Text>
          <Text className="text-xs text-gray-400">
            Booking online, banyak UNTUNG nya
          </Text>
        </View>

        <View className="flex flex-col my-3">
          <ScrollView
            horizontal
            className="flex gap-4 px-4"
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingEnd:40}}
          >
            <Image
              source={require("../../../assets/beranda/banner-sportive.png")}
              className="rounded-3xl h-40 w-[84vw]"
            />
            <Image
              source={require("../../../assets/beranda/banner-sportive.png")}
              className="rounded-3xl h-40 w-[84vw]"
            />
            <Image
              source={require("../../../assets/beranda/banner-sportive.png")}
              className="rounded-3xl h-40 w-[84vw]"
            />
          </ScrollView>
          <View className="py-3 flex flex-row gap-1 px-4">
            <View className="w-2 h-2 rounded-full bg-[#F15162]"></View>
            <View className="w-2 h-2 rounded-full bg-gray-300"></View>
            <View className="w-2 h-2 rounded-full bg-gray-300"></View>
            <View className="w-2 h-2 rounded-full bg-gray-300"></View>
          </View>
        </View>
      </View>
    </>
  );
};
export default Slider;
