import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useTodo } from "@/api/hooks/useTodo";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useFocusEffect } from "expo-router";

const ToDoScreen = () => {
  const { data, isPending, refetch } = useTodo();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Pressable
          style={{ backgroundColor: "#57ffbd" }}
          onPress={() => router.navigate("post")}
        >
          <Text>Go to Posts</Text>
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

export default ToDoScreen;

const styles = StyleSheet.create({});
