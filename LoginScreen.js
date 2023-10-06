import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implementar lógica de inicio de sesión aquí, por ejemplo, con Firebase o una API personalizada
    try {
      // Realizar la autenticación y verificar si el usuario es válido

      // Si la autenticación es exitosa, navegar a la pantalla de contactos
      navigation.navigate('ContactsList');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const navigateToRegister = () => {
    // Navegar a la pantalla de registro
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Correo o Nombre de Usuario"
        onChangeText={text => setEmailOrUsername(text)}
        value={emailOrUsername}
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Button title="Registrarse" onPress={navigateToRegister} />
    </View>
  );
};

export default LoginScreen;
