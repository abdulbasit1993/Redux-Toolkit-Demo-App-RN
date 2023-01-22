import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {data?.id}) {data?.title}
      </Text>
      <Text style={styles.body}>{data?.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    margin: 15,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
    marginTop: 10,
    color: '#000000',
  },
});

export default Card;
