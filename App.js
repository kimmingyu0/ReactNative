import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!"/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

// 웹에서는 flexDirection 기본값이 row이지만
// 앱에서는 column 으로 되어있다.

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textInput: {
    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%',
    marginRight:8,
    padding: 8
  }
});