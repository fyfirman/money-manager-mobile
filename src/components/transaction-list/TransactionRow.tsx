import { StyleSheet } from "react-native";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "../Themed";
import { currencyFormat } from "../../helpers/string-helper";

interface TransactionRowProps {
  category: string;
  subCategory: string;
  amount: number;
  account: string;
  title: string;
  style?: TouchableOpacityProps["style"];
  onPress?: TouchableOpacityProps["onPress"];
}

const TransactionRow = ({
  account,
  amount,
  category,
  subCategory,
  title,
  style,
  onPress,
}: TransactionRowProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.categoryColumn}>
        <Text>{category}</Text>
        <Text>{subCategory}</Text>
      </View>
      <View style={styles.titleColumn}>
        <Text>{title}</Text>
        <Text>{account}</Text>
      </View>
      <Text>{currencyFormat(amount)}</Text>
    </TouchableOpacity>
  );
};

export default TransactionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  categoryColumn: {
    width: "25%",
  },
  titleColumn: {
    flex: 1,
    marginHorizontal: 8,
  },
});
