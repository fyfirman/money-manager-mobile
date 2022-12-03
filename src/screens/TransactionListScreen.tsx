import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../components/Themed";

import TransactionHeaderRow from "../components/transaction-list/TransactionHeaderRow";
import TransactionRow from "../components/transaction-list/TransactionRow";
import useTransactionStore from "../../store/transaction.store";
import { RootTabScreenProps } from "../../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const transactionListGroupByDate = useTransactionStore((state) =>
    state.getTransactionsGroupByDate()
  );

  const handleAddButtonPress = () => {
    navigation.navigate("TransactionAdd");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {Object.keys(transactionListGroupByDate).map((date, index) => (
          <React.Fragment key={date}>
            <TransactionHeaderRow
              date={new Date(date)}
              expenseAmount={0}
              style={{ marginTop: index > 0 ? 8 : 0 }}
            />
            {transactionListGroupByDate[date].map((transaction, index) => (
              <TransactionRow
                key={date + "-" + index}
                account={transaction.account}
                amount={transaction.amount}
                category={transaction.category}
                subCategory={transaction.subCategory}
                title={transaction.title}
              />
            ))}
          </React.Fragment>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.fabButton} onPress={handleAddButtonPress}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabButton: {
    position: "absolute",
    bottom: 8,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  fabText: {
    fontSize: 24,
  },
});