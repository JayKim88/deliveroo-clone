import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "react-native-format-currency";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { REACT_NATIVE_COLOR } from "../constants/colors";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className={`mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center gap-x-1`}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {formatCurrency({ amount: basketTotal?.toFixed(1), code: "GBP" })[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
