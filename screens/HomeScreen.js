import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon as SearchIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import { REACT_NATIVE_COLOR } from "../constants/colors";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
            ...,
            restaurants[] -> {
              ...,
              dishes[] ->
            }
        }     
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
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
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        {featuredCategories.map((category, index) => (
          <FeaturedRow
            key={`${category.id}-${index}`}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
