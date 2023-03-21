import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

const data = [
  { id: 1, image: require('./assets/dress1.jpg') },
  { id: 2, image: require('./assets/dress2.jpg') },
  { id: 3, image: require('./assets/dress3.jpg') },
  { id: 4, image: require('./assets/dress4.jpg') },
  { id: 5, image: require('./assets/dress5.jpg') },
];

const App = () => {
  const [cards, setCards] = useState(data);
  const [likedCards, setLikedCards] = useState([]);

  const handleYup = (card) => {
    setLikedCards([...likedCards, card]);
    setCards(cards.filter(c => c.id !== card.id));
  };

  const handleNope = (card) => {
    setCards(cards.filter(c => c.id !== card.id));
  };

  const handleReset = () => {
    setCards(data);
    setLikedCards([]);
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        renderCard={(cardData) => (
          <View style={styles.card}>
            <Image source={cardData.image} style={styles.image} />
          </View>
        )}
        renderNoMoreCards={() => (
          <View style={styles.noMoreCards}>
            <Text>No more cards</Text>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
        handleYup={handleYup}
        handleNope={handleNope}
        yupText={'Like'}
        nopeText={'Dislike'}
        showYup={true}
        showNope={true}
        yupStyle={styles.yupButton}
        nopeStyle={styles.nopeButton}
        yupTextStyle={styles.buttonText}
        nopeTextStyle={styles.buttonText}
      />
      <View style={styles.cart}>
        <Text style={styles.cartTitle}>Shopping Cart</Text>
        {likedCards.map(card => (
          <Image source={card.image} style={styles.cartItem} key={card.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  noMoreCards: {
    width: 300,
    height: 400,
   
