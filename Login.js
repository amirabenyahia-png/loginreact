import * as React from 'react';
import { Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <View>
      <Text>Welcome to SmartRoster</Text>
      <View>
        <Icon name="email" size={30} />
        <TextInput 
          onChangeText={text => setEmail(text)} 
          value={email} 
          placeholder={'Email Address'}
        />
      </View>
      <View>
        <Icon name="lock" size={30} />
        <TextInput 
          onChangeText={text => setPass(text)} 
          value={pass} 
          placeholder={'Password'}
        />
      </View>
      <View>
        <TouchableNativeFeedback>
          <View>
            <Text>Login</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
