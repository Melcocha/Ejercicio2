import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    // Implementar lógica de registro aquí, por ejemplo, con Firebase o una API personalizada
    try {
      // Realizar el registro del nuevo usuario

      // Si el registro es exitoso, navegar a la pantalla de contactos
      navigation.navigate('ContactsListScreen');
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput
        placeholder="Correo"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Nombre de Usuario"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
