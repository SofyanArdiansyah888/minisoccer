import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import CardList from "../../screen/beranda/components/CardList";
import Slider from "../../screen/beranda/components/Slider";

export default function Beranda() {
  const listLapangan = [
    {
      imageSource: require("../../assets/beranda/Image105.png"),
      text: "Gor Sudiang Makassar",
      shortText: "GR",
    },
    {
      imageSource: require("../../assets/beranda/Image105.png"),
      text: "Gor Sudiang Makassar",
      shortText: "GR",
    },
    {
      imageSource: require("../../assets/beranda/Image105.png"),
      text: "Gor Sudiang Makassar",
      shortText: "GR",
    },
    {
      imageSource: require("../../assets/beranda/Image105.png"),
      text: "Gor Sudiang Makassar",
      shortText: "GR",
    },
  ];
  const listPromo = [
    {
      imageSource: require("../../assets/beranda/Image105.png"),
      text: "Gor Sudiang",
      shortText: "",
    },
    {
      imageSource: require("../../assets/beranda/Image105.png"),
      text: "Free Extra Time 15 Menit",
      shortText: "",
    },
  ];
  return (
    <>
      <View className="container px-4 flex flex-row w-full justify-between h-[64px]  items-center mt-8">
        <Image source={require("../../assets/beranda/logo.png")} />
        <View>
          <Text className="text-[#F15162] text-[10px]">kontak</Text>
        </View>
      </View>

      <ScrollView overScrollMode="never">
        <View className=" py-2">
          <Slider />
          <MenuList />
          <CardList title="Lapangan Terlaris" images={listLapangan} />
          <CardList title="Promo Terbaru" images={listPromo} />
        </View>
      </ScrollView>
    </>
  );
}

const MenuList = () => {
  const items = [1, 2, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <View className="mb-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={{ paddingEnd: 40 }}
          className="gap-9 px-4"
        >
          {items.map((_, index) => (
            <View className="flex items-center" key={index}>
              <View className="w-14 h-14 bg-red-300 rounded-full  relative overflow-visible">
                <Image
                  source={require("../../assets/beranda/bola.png")}
                  className="w-14 h-14 absolute -bottom-1 -right-2"
                />
              </View>
              <Text className="mt-2 text-xs text-gray-500 mx-auto">
                Minisoccer
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};
