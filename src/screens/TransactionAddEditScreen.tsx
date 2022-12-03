import { ScrollView, StyleSheet } from "react-native";
import { View, TextInput } from "../components/Themed";
import { Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import ColumnInput from "../components/transaction-add/ColumnInput";
import useTransactionStore, { Transaction } from "../store/transaction.store";
import { RootStackScreenProps } from "../../types";
import AutocompleteField from "../components/autocomplete-field/AutocompleteField";

export default function TransactionAddEditScreen({
  navigation,
  route,
}: RootStackScreenProps<"TransactionAddEdit">) {
  const pageType = route.params.type;

  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const listedCategory = useTransactionStore((state) =>
    state.getListedCategory()
  );
  const listedSubCategory = useTransactionStore((state) =>
    state.getListedSubCategory()
  );

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      date: !route.params?.date ? new Date() : new Date(route.params.date),
      account: route.params?.account ?? "",
      category: route.params?.category ?? "",
      subCategory: route.params?.subCategory ?? "",
      amount: route.params?.amount ?? 0,
      title: route.params?.title ?? "",
    },
  });

  const onSubmit = (data: Transaction) => {
    if (pageType === "add") {
      addTransaction(data);
    } else {
      // TODO: edit
    }
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
          render={({ field }) => (
            <AutocompleteField
              field={field}
              placeholder="Category"
              options={listedCategory}
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
          render={({ field }) => (
            <AutocompleteField
              field={field}
              placeholder="Sub Category"
              options={listedSubCategory}
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
              onChangeText={(e) => onChange(parseInt(e, 10))}
              value={String(value)}
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
          onPress={handleSubmit(onSubmit as any)}
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
  resultList: {},
  resultItem: {},
});
