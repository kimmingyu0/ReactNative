import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItme = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItme;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6, //<Text> 태그에 적용시 ios에서 지원이 안돼서 <View>로 감싸줘야 됨.
    // 이러한 사항이 아주 많으므로 공식문서 자주 확인 할 것
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
