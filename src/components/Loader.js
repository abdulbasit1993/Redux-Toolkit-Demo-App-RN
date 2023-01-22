import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ActivityIndicator size="large" color={'#000000'} />
      <Text style={{color: '#000000', fontSize: 17, marginTop: 10}}>
        Loading...
      </Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
