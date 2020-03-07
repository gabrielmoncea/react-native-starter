import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const MemoizedComponent = React.memo(() => <View />);
const RerenderedComponent = () => <View />;

MemoizedComponent.whyDidYouRender = true;
RerenderedComponent.whyDidYouRender = true;

export default function HomeScreen({ navigation }) {
  const [state, increment] = React.useState(0);
  const text = useSelector(state => state.post.text);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MemoizedComponent />
      <RerenderedComponent />
      <Text>Increment: {state}</Text>
      <Button title='Increment' onPress={() => increment(state + 1)} />
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
