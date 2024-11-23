import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Importar imágenes locales
import badBunnyImage from './assets/BadBunny.jpg'; 
import logoCool from './assets/Cool.jpg';   

export default function BadBunny() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Imagen de Bad Bunny */}
        <Image source={badBunnyImage} style={styles.bannerImage} />

        {/* Información de la marca promotora */}
        <View style={styles.brandInfo}>
          {/* Logo de La Cool */}
          <Image source={logoCool} style={styles.logo} />
          <View style={styles.brandTextContainer}>
            <Text style={styles.brandName}>La Cool 89.3 FM xd</Text>
            <Text style={styles.timePosted}>Hace 3 horas</Text>
          </View>
        </View>

        {/* Título del evento */}
        <Text style={styles.title}>¡Bad Bunny en El Salvador!</Text>

        {/* Descripción */}
        <Text style={styles.description}>
           ¡Es oficial! Bad Bunny llega al Estadio Cuscatlán este sábado 30 de marzo. 
          La Cool 89.3 FM tiene entradas VIP para ti. Participa y gana tu pase al concierto más esperado del año. 🐰🔥
        </Text>

        {/* Información del evento */}
        <View style={styles.eventInfo}>
          <View style={styles.eventRow}>
            <Text style={styles.eventLabel}>📍 Estadio Cuscatlán</Text>
          </View>
          <View style={styles.eventRow}>
            <Text style={styles.eventLabel}>📅 Sábado, 30 de Marzo</Text>
          </View>
          <View style={styles.eventRow}>
            <Text style={styles.eventLabel}>⏰ 7:00 p.m.</Text>
          </View>
        </View>

        {/* Botón de participación */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>¡Participa ahora!</Text>
        </TouchableOpacity>

        {/* Mensaje adicional */}
        <Text style={styles.footerText}>
          Escúchanos en vivo y síguenos en nuestras redes sociales para conocer cómo participar y ser el ganador de una entrada VIP.  🥳
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    maxWidth: 400,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  brandInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  brandTextContainer: {
    marginLeft: 12,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
  },
  timePosted: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 6, 
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10, 
    textAlign: 'justify',
  },
  eventInfo: {
    marginTop: 8, 
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2, 
  },
  eventLabel: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF5733',
    borderRadius: 8,
    marginTop: 16,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 16, 
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
  },
});
