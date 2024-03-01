import React, { useState } from "react";
import { Box, Button, Flex, Text, useToast, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [rocketPosition, setRocketPosition] = useState(20); // Initial vertical position of the rocket

  const moveRocketUp = () => {
    setRocketPosition((prevPosition) => prevPosition + 30); // Move the rocket up by 30px
  };

  const toast = useToast();

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    // Start game logic: This is mock logic to demonstrate the game starting.
    // Ideally, this would be replaced with the actual game's starting logic.
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + 1);
    }, 1000);
    // Save the interval ID so it can be cleared later
    toast({
      title: "Game Started",
      description: "Good luck!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const pauseGame = () => {
    setIsPlaying(false);
    // Pause game logic: This should pause the gameplay and any game timers.
    // If there were a game interval running, it would be cleared here.
  };

  const resetGame = () => {
    setIsPlaying(false);
    setScore(0);
    // Reset game logic: This resets the game to its initial state.
    // Any ongoing game intervals or states should be cleared and reset here.
  };

  const gameOver = () => {
    setIsPlaying(false);
    // Game over logic: This should handle the end of the game, like saving the score, if necessary.
    toast({
      title: "Game Over",
      description: `Your score was ${score}`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl">React Rocket</Text>
      <Box w="full" h="500px" bg="gray.300" position="relative">
        {/* Game area */}
        <Box w="50px" h="50px" bg="blue.500" position="absolute" left={`${score % 300}px`} bottom={`${rocketPosition}px`} borderRadius="full" />
        {isPlaying ? (
          <Flex direction="column" align="center" justify="center" h="full">
            <Text color="white" p={2}>
              Score: {score}
            </Text>
          </Flex>
        ) : (
          <Flex align="center" justify="center" h="full">
            <Button leftIcon={<FaPlay />} onClick={startGame} colorScheme="green">
              Play
            </Button>
          </Flex>
        )}
      </Box>
      <Flex direction="column" align="center" justify="center" w="full">
        <Button leftIcon={<FaPlay />} onClick={moveRocketUp} colorScheme="green" mb={4}>
          Move Rocket Up
        </Button>
        <Flex justify="space-between" w="full">
          <Button leftIcon={<FaRedo />} onClick={resetGame} colorScheme="yellow">
            Restart
          </Button>
          <Button leftIcon={<FaPause />} onClick={pauseGame} colorScheme="blue">
            Pause
          </Button>
        </Flex>
      </Flex>
    </VStack>
  );
};

const Index = () => {
  return <Game />;
};

export default Index;
