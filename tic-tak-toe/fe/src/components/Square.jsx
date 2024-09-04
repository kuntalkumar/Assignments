import { Button } from '@chakra-ui/react';

function Square({ value, onSquareClick }) {
  return (
    <Button
      size="lg"
      height="80px"
      width="80px"
      fontSize="2xl"
      colorScheme={value === 'X' ? 'teal' : 'orange'}
      onClick={onSquareClick}
    >
      {value}
    </Button>
  );
}

export default Square;
