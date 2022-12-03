import { StyleSheet } from "react-native";
import { Text, View, ViewProps } from "../Themed";
import React from "react";
import { format } from "date-fns";
import { currencyFormat } from "../../helpers/string-helper";

interface TransactionHeaderRowProps {
  date: Date;
  expenseAmount: number;
  style?: ViewProps["style"];
}

const TransactionHeaderRow = ({
  date,
  expenseAmount,
  style,
}: TransactionHeaderRowProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{format(date, "EEE, dd MMM yy")}</Text>
      </View>
      <Text>{currencyFormat(expenseAmount)}</Text>
    </View>
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
