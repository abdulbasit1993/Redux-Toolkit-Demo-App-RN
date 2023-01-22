import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    headingText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: '700'
    }
})

export default Header;