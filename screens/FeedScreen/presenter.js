import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, RefreshControl, StyleSheet } from "react-native";

const FeedScreen = props => (
  // <Text onPress={() => props.navigation.navigate("Likes")}>Feed</Text>
  <ScrollView 
    refreshControl={
      <RefreshControl 
        refreshing= {props.isFetching}
        onRefresh= {props.refresh}
        tintColor={"black"}
      />
    }
    contentContainerStyle={styles.container}
  />

  //scrollView는 refresh control 이라는걸 갖고 있다. 
);








const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})

FeedScreen.propTypes = {
  isFetching:PropTypes.bool.isRequired,
  refresh:PropTypes.func.isRequired,
}


export default FeedScreen;
