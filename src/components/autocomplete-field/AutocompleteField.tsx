import { useState } from "react";
import Autocomplete from "../StyledAutocomplete";
import { TextInput, TouchableOpacity, View, Text } from "../Themed";

interface AutocompleteFieldProps {
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string;
  };
  placeholder: string;
  options: string[];
}

const AutocompleteField = ({
  field: { onChange: setValue, onBlur, value },
  placeholder,
  options,
}: AutocompleteFieldProps) => {
  const [open, setOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleOptionPress = (option: string) => {
    setValue(option);
    setOpen(false);
  };

  const handleInputChange = (input: string) => {
    setValue(input);

    if (input.length > 0) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleInputFocus = () => {
    setOpen(true);
    setFilteredOptions(options.slice(0, 3));
  };

  const handleInputBlur = () => {
    setOpen(false);
    onBlur();
  };

  return (
    <Autocomplete
      data={filteredOptions}
      hideResults={!open}
      renderTextInput={() => (
        <TextInput
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={handleInputChange}
          value={value as string}
          placeholder={placeholder}
        />
      )}
      renderResultList={({ data }) => (
        <View>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
};

export default AutocompleteField;
