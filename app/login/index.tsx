import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.mainView}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
});
