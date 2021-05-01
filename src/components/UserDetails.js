import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const UserDetails = ({route}) => {
  const {id, name, email, phone, website} = route.params.data;
    return (
        <View>
          <Text>name: {name}</Text>
          <Text>email: {email}</Text>
          <Text>phone: {phone}</Text>
          <Text>website: {website}</Text>
          <Text>id: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  userDetails: {
    padding: '15',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
