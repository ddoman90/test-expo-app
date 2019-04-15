import React from "react";
import { Provider } from "react-redux";
import { reducer as formReducer, reduxForm } from "redux-form";
import { createStore } from "redux";
import { StyleSheet, Text, View, TextInput } from "react-native";

const store = createStore(formReducer);

export default reduxForm({ form: "Login" })(
  class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <Field name="username" component={TextInputx} />
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </Provider>
      );
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
