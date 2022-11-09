import { StyleSheet } from "react-native";
import React from "react";
import { Text, View, ViewProps } from "../Themed";
import { currencyFormat } from "../../helpers/string-helper";

interface TransactionRowProps {
  category: string;
  subCategory: string;
  amount: number;
  account: string;
  title: string;
  style?: ViewProps["style"];
}

const TransactionRow = ({
  account,
  amount,
  category,
  subCategory,
  title,
  style,
}: TransactionRowProps) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text>{category}</Text>
        <Text>{subCategory}</Text>
      </View>
      <View style={styles.titleColumn}>
        <Text>{title}</Text>
        <Text>{account}</Text>
      </View>
      <Text>{currencyFormat(amount)}</Text>
    </View>
  );
};

export default TransactionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  titleColumn: {
    flex: 1,
    marginHorizontal: 8,
  },
});
