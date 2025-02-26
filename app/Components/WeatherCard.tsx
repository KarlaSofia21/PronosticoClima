import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type WeatherProps = {
  date: string;
  maxTemp: number;
  minTemp: number;
  rainChance: number;
  condition: string;
  iconUrl: string; // Agregamos la URL del icono
};

const getBackgroundColor = (temp: number) => {
  if (temp < 20) return "#ADD8E6"; // Azul
  if (temp <= 30) return "#FFD700"; // Amarillo
  return "#FF8C00"; // Naranja
};

const WeatherCard: React.FC<WeatherProps> = ({ date, maxTemp, minTemp, rainChance, condition, iconUrl }) => {
  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(maxTemp) }]}>
      <Text style={styles.date}>
        {new Date(date).toLocaleDateString("es-ES", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" })}
      </Text>
      <Image source={{ uri: `https:${iconUrl}` }} style={styles.icon} />
      <Text style={styles.temp}>Máx: {maxTemp}°C</Text>
      <Text style={styles.temp}>Mín: {minTemp}°C</Text>
      <Text style={styles.rain}>Lluvia: {rainChance}%</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      padding: 10, 
      marginBottom: 10,
      width: 250, 
      alignItems: 'center',
    },
    date: {
      fontSize: 16, 
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    icon: {
      width: 40, 
      height: 40, 
      marginVertical: 5,
    },
    temp: {
      fontSize: 14, 
      fontWeight: 'bold',
    },
    rain: {
      fontSize: 12, 
      color: '#007BFF',
    },
    condition: {
      fontSize: 14,
      fontStyle: 'italic',
    },
  });
  
