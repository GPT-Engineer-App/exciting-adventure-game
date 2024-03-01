import React, { useState } from "react";
import { Box, Button, Flex, Text, useToast, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const toast = useToast();

  const startGame = () => {
    setIsPlaying(true);
    // Initialize game logic
  };

  const pauseGame = () => {
    setIsPlaying(false);
    // Pause game logic
  };

  const resetGame = () => {
    setIsPlaying(false);
    setScore(0);
    // Reset game logic
  };

  const gameOver = () => {
    setIsPlaying(false);
    toast({
      title: "Game Over",
      description: `Your score was ${score}`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    // Handle game over logic
  };

  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl">React Rocket</Text>
      <Box w="full" h="500px" bg="gray.700" position="relative">
        {/* Game area */}
        {isPlaying ? (
          <Text color="white" p={2}>
            Score: {score}
          </Text>
        ) : (
          <Flex align="center" justify="center" h="full">
            <Button leftIcon={<FaPlay />} onClick={startGame} colorScheme="green">
              Play
            </Button>
          </Flex>
        )}
      </Box>
      <Flex justify="space-between" w="full">
        <Button leftIcon={<FaRedo />} onClick={resetGame} colorScheme="yellow">
          Restart
        </Button>
        <Button leftIcon={<FaPause />} onClick={pauseGame} colorScheme="blue">
          Pause
        </Button>
      </Flex>
    </VStack>
  );
};

const Index = () => {
  return <Game />;
};

export default Index;
