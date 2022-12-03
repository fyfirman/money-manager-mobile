import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, View, TouchableOpacityProps } from "../Themed";
import React from "react";
import { format } from "date-fns";
import { currencyFormat } from "../../helpers/string-helper";

interface TransactionHeaderRowProps {
  date: string; // Date in ISO format
  expenseAmount: number;
  style?: TouchableOpacityProps["style"];
  onPress?: TouchableOpacityProps["onPress"];
}

const TransactionHeaderRow = ({
  date,
  expenseAmount,
  style,
  onPress,
}: TransactionHeaderRowProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {format(new Date(date), "EEE, dd MMM yy")}
        </Text>
      </View>
      <Text>{currencyFormat(expenseAmount)}</Text>
    </TouchableOpacity>
  );
};

export default TransactionHeaderRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  dateContainer: {
    flex: 1,
  },
  dateText: {
    fontWeight: "bold",
  },
});
