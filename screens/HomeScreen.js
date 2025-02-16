import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon as SearchIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pb-5">
      <View className="flex-row pb-3 items-center mx-1 gap-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-10 w-10 bg-gray-300 p-1 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl flex items-center justify-center">
              Current Location
            </Text>
            <ChevronDownIcon size={20} color={REACT_NATIVE_COLOR} />
          </View>
        </View>
        <UserIcon size={35} color={REACT_NATIVE_COLOR} />
      </View>
      <View className="flex-row items-center gap-x-2 pb-2 mx-4 px-1">
        <View className="flex-row flex-1 gap-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={REACT_NATIVE_COLOR} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const REACT_NATIVE_COLOR = "#00CCBB";
