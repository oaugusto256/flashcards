import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import EmphasizeText from '../components/EmphasizeText';
import { connect } from 'react-redux';

class Deck extends Component {
  static navigationOptions = {
    title: 'Deck',
    headerStyle: {
      backgroundColor: '#393e46',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    loading: true,
    deckTitle: '',
    numberOfCards: 0
  }

  componentDidMount = () => {
    console.log('Id to render', this.props.navigation.getParam('id', 'DEFAULT_VALUE'));

    const deck_id = this.props.navigation.getParam('id', 'DEFAULT_VALUE');
    const deck = this.props.decks.map(deck => {
      if(deck.id = deck_id)
        return deck
    })

    console.log('Deck to render', deck[0]);

    this.setState({
      loading: false,
      deckTitle: deck[0].title,
      numberOfCards: deck[0].questions.length
    })
  }

  onCreate = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#393e46"
        />
        <View style={styles.screen}>
          {this.state.loading
            ? <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00adb5" />
              </View>
            : <>
                <View style={styles.infoContainer}>
                  <Text style={styles.introText}>{this.state.deckTitle}</Text>
                  <Text style={styles.subText}>{`${this.state.numberOfCards} cards`}</Text>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity style={styles.butonStart}>
                    <Text style={styles.buttonLabel}>
                      Start Quiz
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.buttonAddCard}>
                      <Text style={styles.buttonLabel}>
                        Add Card
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDeleteDeck}>
                      <Text style={styles.buttonLabel}>
                        Delete Quiz
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.listCardsContainer}>
                  <Text style={styles.introText}>Card' list</Text>
                  <Text style={styles.subText}>No card was <EmphasizeText text={'added'} /> yet!</Text>
                </View>
              </>
            }
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

})(Deck);

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: height,
  },
  introText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#777'
  },
  loadingContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    padding: 15,
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  listCardsContainer: {
    flex: 4,
    padding: 15,
  },
  flexContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  butonStart: {
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00adb5',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonLabel: {
    color: '#fff'
  },
  buttonAddCard: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#173f5f',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonDeleteDeck: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ed553b',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
})