import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import Login from './app/Screens/Login';
import Header from './app/Components/Header';
import Foother from './app/Components/Foother';
import Calculadora from './app/Screens/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo='Calculadora' 
      nombre='Sofi Morales Hernandez.' 
      imagen={require('./assets/snopy.jpg')}/>

      <Calculadora/>
      
      <Foother fecha='2025-02-07' telefono='614-123-4567'/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'#4B2E1E'
  }
});