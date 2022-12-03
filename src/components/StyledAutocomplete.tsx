import DefaultAutocomplete, {
  AutocompleteProps as DefaultAutocompleteProps,
} from "react-native-autocomplete-input";

interface AutocompleteProps<T> extends DefaultAutocompleteProps<T> {}

const Autocomplete = (props: AutocompleteProps<any>) => {
  return <DefaultAutocomplete {...props} />;
};

export default Autocomplete;
