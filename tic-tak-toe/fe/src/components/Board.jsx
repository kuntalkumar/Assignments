import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner'; 

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }
    
    const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="2xl" mb={4} color="teal.600">{status}</Text>
      <SimpleGrid columns={3} spacing={4}>
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Board;
