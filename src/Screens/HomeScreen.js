import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Snyk from '../../assets/snyk.svg';
import Firefox from '../../assets/firefox.svg';

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
      <View
        style={{
          height: 100,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Firefox height={'80px'} />
        <Snyk height={'80px'} />
      </View>
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
