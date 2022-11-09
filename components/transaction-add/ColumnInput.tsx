import { StyleSheet } from "react-native";
import React from "react";
import { Text, View, ViewProps } from "../Themed";

interface ColumnInputProps {
  title: string;
  children: ViewProps["children"];
  errorText?: string;
  style?: ViewProps["style"];
}

const ColumnInput = ({
  title,
  children,
  errorText,
  style,
}: ColumnInputProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.titleColumn}>
        <View
          style={{
            flex: 1,
          }}
        >
          {children}
        </View>
        {!!errorText && <Text>This is required.</Text>}
      </View>
    </View>
  );
};

export default ColumnInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  titleContainer: {
    flex: 1,
  },
  titleColumn: {
    flex: 3,
    marginHorizontal: 8,
  },
});
