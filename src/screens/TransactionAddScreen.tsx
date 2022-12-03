import { ScrollView, StyleSheet } from "react-native";
import { View, TextInput } from "../components/Themed";
import { Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import ColumnInput from "../components/transaction-add/ColumnInput";
import useTransactionStore, { Transaction } from "../store/transaction.store";
import { RootStackScreenProps } from "../../types";

export default function TransactionAddScreen({
  navigation,
}: RootStackScreenProps<"TransactionAdd">) {
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      date: new Date(),
      account: "",
      category: "",
      subCategory: "",
      amount: 0,
      title: "",
    },
  });

  const onSubmit = (data: Transaction) => {
    addTransaction(data);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <ColumnInput title="Date" errorText={errors.date?.message}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              value={value}
              onChange={(data) => {
                console.log(
                  "🚀 ~ file: TransactionAddScreen.tsx ~ line 54 ~ data",
                  data.nativeEvent.timestamp
                );
                if (data.nativeEvent.timestamp)
                  onChange(new Date(data.nativeEvent.timestamp));
              }}
            />
          )}
          name="date"
        />
      </ColumnInput>
      <ColumnInput title="Account" errorText={errors.account?.message}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string}
              placeholder="Account"
            />
          )}
          name="account"
        />
      </ColumnInput>
      <ColumnInput title="Category" errorText={errors.category?.message}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string}
              placeholder="Category"
            />
          )}
          name="category"
        />
      </ColumnInput>
      <ColumnInput title="Sub Category" errorText={errors.subCategory?.message}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string}
              placeholder="Sub Category"
            />
          )}
          name="subCategory"
        />
      </ColumnInput>
      <ColumnInput title="Amount" errorText={errors.amount?.message}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as unknown as string}
              placeholder="Amount"
              keyboardType="number-pad"
            />
          )}
          name="amount"
        />
      </ColumnInput>
      <ColumnInput title="Title" errorText={errors.title?.message}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string}
              placeholder="Title"
            />
          )}
          name="title"
        />
      </ColumnInput>

      <View>
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 8,
  },
});
