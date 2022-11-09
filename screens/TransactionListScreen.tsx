import { Button, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../components/Themed";

import TransactionHeaderRow from "../components/transaction-list/TransactionHeaderRow";
import TransactionRow from "../components/transaction-list/TransactionRow";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const handleAddButtonPress = () => {
    navigation.navigate("TransactionAdd");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <TransactionHeaderRow
          date={new Date(2022, 11, 9)}
          expenseAmount={4000}
        />
        <TransactionRow
          account="E-Money"
          amount={4000}
          category="Transporation"
          subCategory="Parkir"
          title="Parkir Pejaten Village"
        />
        <TransactionRow
          account="E-Money"
          amount={4000}
          category="Transporation"
          subCategory="Parkir"
          title="Parkir Pejaten Village"
        />
        <TransactionRow
          account="E-Money"
          amount={4000}
          category="Transporation"
          subCategory="Parkir"
          title="Parkir Pejaten Village"
        />
        <TransactionHeaderRow
          date={new Date(2022, 11, 8)}
          expenseAmount={4000}
          style={{ marginTop: 8 }}
        />
        <TransactionRow
          account="E-Money"
          amount={4000}
          category="Transporation"
          subCategory="Parkir"
          title="Parkir Pejaten Village"
        />
        <TransactionRow
          account="E-Money"
          amount={4000}
          category="Transporation"
          subCategory="Parkir"
          title="Parkir Pejaten Village"
        />
        <TransactionRow
          account="E-Money"
          amount={4000}
          category="Transporation"
          subCategory="Parkir"
          title="Parkir Pejaten Village"
        />
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
