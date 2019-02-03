import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks, verifyCurrentStorage, clearStorage } from '../actions';
import DeckCard from '../components/DeckCard';
import ButtonAddDeck from '../components/ButtonAddDeck';
import EmphasizeText from '../components/EmphasizeText';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount = () => {
    // this.props.clearStorage();
    this.props.getDecks();
  }

  renderDecks = () => {
    const { decks, navigation } = this.props;

    if(decks) {
      return Object.keys(decks).map(index => {
        return (
          <DeckCard
            id={index}
            key={index}
            deck={decks[index]}
            navigation={navigation}
          />
        )
      })
    } else {
      return (
        <Text style={styles.text}>No deck was added yet!</Text>
      )
    }
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#393e46"
        />
        <View style={styles.screen}>
          {this.props.loading
            ? <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00adb5" />
              </View>
            : <>
                <ScrollView>
                  <View style={styles.content}>
                    <Text style={styles.introText}>Welcome!</Text>
                    <Text style={styles.text}>Select a deck to <EmphasizeText text={'play'}/> or <EmphasizeText text={'edit'}/> at the list below, or <EmphasizeText text={'create'}/> a new one with the button at the bottom.</Text>
                    {this.renderDecks()}
                  </View>
                </ScrollView>
                <ButtonAddDeck
                  onPress={() => this.props.navigation.navigate('CreateDeck')}
                />
              </>}
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.deck.decks,
    error: state.deck.error,
    loading: state.deck.loading,
  };
};

export default connect(mapStateToProps, {
  getDecks,
  clearStorage,
  verifyCurrentStorage
})(Home);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
  },
  loadingContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  emphasizeText: {
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 15,
  }
})