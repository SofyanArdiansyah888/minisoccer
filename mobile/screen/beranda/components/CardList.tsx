import React from "react";
import {
  ImageSourcePropType,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";

interface IImageCard {
  imageSource: ImageSourcePropType;
  text: string;
  shortText?: string;
}

interface ICardList {
  title: string;
  images: IImageCard[];
}

const CardList = ({ title, images }: ICardList) => {
  return (
    <View className=" ">
      <Text className="font-extrabold text-xl my-4 px-4">{title}</Text>
      <ScrollView
        horizontal
        className="flex gap-4 px-4"
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={{paddingEnd:40}}
      >
        {images.map((item, index) => (
          <View
            className="rounded-3xl w-48 bg-slate-100 overflow-hidden shadow-lg my-4 "
            style={{
              shadowColor: "gray",
            }}
            key={index}
          >
            <Image source={item.imageSource} className="w-full h-24 " />
            <View className="flex flex-row px-3 py-2 items-center">
              <Text className="text-md text-gray-400 w-[130px]">
                {item.text}
              </Text>
              {item.shortText && (
                <View className="bg-[#F15162] rounded-full w-8 h-8 flex justify-center">
                  <Text className="mx-auto text-white">{item.shortText}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardList;
