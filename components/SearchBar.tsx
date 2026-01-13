import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}: {
  onPress?: () => void;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View className="flex-row items-center bg-gray-800 rounded-full px-5 py-2">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
