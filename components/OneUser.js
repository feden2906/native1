import React from "react";
import { Alert, Button, Text, View, StyleSheet, Image } from "react-native";

export const OneUser = ({ item: {id, name, age, isMarried, city, street, number} }) => {
  return (
      <View style={styles.userCard}>
        <Image source={}/>
        <Text>{id}--{name}--{age}</Text>
        <Button
            title={'Open all info'}
            onPress={() => Alert.alert(`name: ${name}\n age: ${age}\n isMarried: ${isMarried}\n address:\n city: ${city}\n street: ${street}\n number: ${number}\n`)}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    margin: 8,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#ffdbdb'
  }
})
