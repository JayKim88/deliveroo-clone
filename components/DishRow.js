import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { formatCurrency } from "react-native-format-currency";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

import sanityClient, { urlFor } from "../sanity";
import { REACT_NATIVE_COLOR } from "../constants/colors";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`p-4 pb-2 bg-white mb-2 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        key={id}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              {formatCurrency({ amount: price, code: "GBP" })[0]}
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-300"
            />
          </View>
        </View>
        {isPressed && (
          <View className="bg-white mt-4">
            <View className="flex-row items-center gap-x-2">
              <TouchableOpacity>
                <MinusCircleIcon color={REACT_NATIVE_COLOR} size={40} />
              </TouchableOpacity>

              <Text>0</Text>

              <TouchableOpacity>
                <PlusCircleIcon color={REACT_NATIVE_COLOR} size={40} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default DishRow;
