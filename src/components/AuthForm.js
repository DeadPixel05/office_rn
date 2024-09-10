import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput } from 'react-native';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text>{headerText}</Text>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ username, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
