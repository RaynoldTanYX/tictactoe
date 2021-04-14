import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Registration from './components/Registration';
import Menu from './components/Menu';
import Game from './components/Game';

const App = () => {

  const [username, setUsername] = React.useState("");
  const [gameData, setGameData] = React.useState(null);

  const onGameOver = () => {
    console.log("User has left the game");
    setGameId("");
    setGamePassword("");
  }

  return (
    <View style={styles.container}>
      <Header title='Tic-Tac-Toe' />
      {username === "" ? <Registration onUsernameSet={setUsername} />
        : gameData === null ? <Menu username={username} onGameDataSet={setGameData} />
          : <Game gameData={gameData} onGameOver={onGameOver} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;