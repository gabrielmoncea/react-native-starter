import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function HomeScreen({ navigation }) {
  const text = useSelector(state => state.post.text);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title='Go to Details'
        onPress={() => {
          /* Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title='Create post'
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {text}</Text>
    </View>
  );
}
