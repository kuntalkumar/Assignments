import { useState } from 'react';
import { Box, VStack, Button, List, ListItem } from '@chakra-ui/react';
import Board from './Board';
import calculateWinner from '../utils/calculateWinner';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
    return (
      <ListItem key={move}>
        <Button size="sm" onClick={() => jumpTo(move)}>
          {description}
        </Button>
      </ListItem>
    );
  });

  return (
    <VStack spacing={8} align="center" mt={8}>
      <Box>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </Box>
      <Box>
        <List spacing={3}>{moves}</List>
      </Box>
    </VStack>
  );
}
