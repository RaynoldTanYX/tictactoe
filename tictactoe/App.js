import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Registration from './components/Registration';
import Menu from './components/Menu';
import Game from './components/Game';

const App = () => {

  const [username, setUsername] = React.useState("");
  const [gameId, setGameId] = React.useState("");

  const gameOver = () => {
    console.log("User has left the game");
    setGameId("");
  }

  return (
    <View style={styles.container}>
      <Header title='Tic-Tac-Toe' />
      {username === "" ? <Registration onUsernameSet={setUsername} />
        : gameId === "" ? <Menu onGameIdSet={setGameId} />
          : <Game gameId={gameId} gameOver={gameOver} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;