import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hoşgeldiniz! Ana Sayfa</Text>
      <Button title="Sipariş Sayfasına Git" onPress={() => navigation.navigate("Order")} />
    </View>
  );
};

export default HomeScreen;
