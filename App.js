//import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';

const Cat = () => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Type your name"
      />
    </View>
  );
}

export default function App() {
  console.log("App executed");
  console.log(require("./assets/favicon.png"));

  const handlePress = () => console.log("Text pressed");
  const getFullName = (fname, sname, tname) => {
    return fname + " " + sname + " " + tname;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>HN của QT xinh đẹp</Text>
      <Text numberOfLines={3} onPress={() => console.log("Text clicked")}>
        This is my first project using {getFullName("React", "Native", "JavaScript")}- Albert.
      </Text>
      <Image source = {require("./assets/favicon.png")}/>
      <Image 
        source = {{
          width: 200, height: 300,
          uri: "https://picsum.photos/200/300"
        }}
      />
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Type here"
      />

      {Cat()}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
