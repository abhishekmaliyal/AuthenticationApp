import {View, Text} from 'react-native';
import React from 'react';

const Header = props => {
  return (
      <View
        style={{
          justifyContent: 'center',
          padding:20,
          height: 100,
          width: '100%',
          marginRight:32,
          backgroundColor: '#D9ACF5',
          shadowColor:'#000000',
          shadowOffset:50,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 28}}>{props.name}</Text>
      </View>
  );
};

export default Header;
