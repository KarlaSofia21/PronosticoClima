import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import WeatherCard from '../Components/WeatherCard';

const API_KEY = "c152b64ccadd4e76a7c184120241110";
const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Mexico&days=5&aqi=no&alerts=no`;

type WeatherData = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
    condition: { text: string; icon: string };
    
  };
};

const Pronostico = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error al conectar con la API: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data.forecast.forecastday);
      } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando Datos...</Text>
          <ActivityIndicator size="large" color="#007BFF" />
        </View>
      ) : (
        <View style={styles.forecastContainer}>
          <Text style={styles.title}>Pronóstico del Clima</Text>
          <FlatList
            data={weatherData}
            renderItem={({ item }) => (
              <WeatherCard
                date={item.date}
                maxTemp={item.day.maxtemp_c}
                minTemp={item.day.mintemp_c}
                rainChance={item.day.daily_chance_of_rain}
                condition={item.day.condition.text}
                iconUrl={item.day.condition.icon} // Enviamos la URL del icono
              />
            )}
            keyExtractor={(item) => item.date}
            showsVerticalScrollIndicator={false}
           
          />
        </View>
      )}
    </View>
  );
};

export default Pronostico;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',

  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 10,
  },
  forecastContainer: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 5,
    textAlign: 'center',
    color: '#191970',
  },

  
});
