import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useAddPost, usePosts } from "@/api/hooks/usePost";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const PostScreen = () => {
  const { data, isPending } = usePosts();
  const { mutate, status } = useAddPost();

  const [input, setInput] = useState("");

  const handleAddPost = useCallback(() => {
    mutate({
      title: input,
      body: "",
      userId: 1,
    });
  }, []);

  useEffect(() => {
    if (status === "error") {
      console.log("error occurs");
    } else if (status === "success") {
      console.log("success!");
    }
  }, [status]);

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Pressable
          style={{ backgroundColor: "#57ffbd" }}
          onPress={() => router.navigate("/")}
        >
          <Text>Go to Todos</Text>
        </Pressable>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.textInput}
        />
        <Pressable style={{ backgroundColor: "red" }} onPress={handleAddPost}>
          <Text>Add Post</Text>
        </Pressable>
        <FlatList
          data={data?.data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Text>{item.title} abc</Text>}
          ListEmptyComponent={
            isPending ? () => <Text>Loading...</Text> : undefined
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
  },
});
