import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItme = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItme;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6, //<Text> 태그에 적용시 ios에서 지원이 안돼서 <View>로 감싸줘야 됨.
    // 이러한 사항이 아주 많으므로 공식문서 자주 확인 할 것
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
