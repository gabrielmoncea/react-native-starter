import React from 'react';
import { Button, TextInput } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createPost } from '../Redux/Reducers/PostReducer';

function CreatePostScreen({ navigation }) {
  const text = useSelector(state => state.post.text);
  const dispatch = useDispatch();

  const onChangeText = text => {
    dispatch(createPost(text));
  };

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={text}
        onChangeText={onChangeText}
      />
      <Button
        title='Done'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </>
  );
}

export default connect(state => ({ ...state }))(CreatePostScreen);
