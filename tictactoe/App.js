import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Registration from './components/Registration';
import Menu from './components/Menu';
import Game from './components/Game';

const App = () => {

  const [username, setUsername] = React.useState("");
  const [gameId, setGameId] = React.useState("");
  const [gamePassword, setGamePassword] = React.useState("");

  const onGameOver = () => {
    console.log("User has left the game");
    setGameId("");
    setGamePassword("");
  }

  return (
    <View style={styles.container}>
      <Header title='Tic-Tac-Toe' />
      {username === "" ? <Registration onUsernameSet={setUsername} />
        : gameId === "" ? <Menu username={username} onGameIdSet={setGameId} onGamePasswordSet={setGamePassword} />
          : <Game gameId={gameId} gamePassword={gamePassword} onGameOver={onGameOver} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;