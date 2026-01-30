import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export function Home() {
  return (
    <VStack gap={6} align="start">
      <Box>
        <Heading as="h1" size="2xl" mb={2}>
          Welcome to the Template
        </Heading>
        <Text color="text.secondary" fontSize="lg">
          Your baseline template to short time
        </Text>
      </Box>

     
      <Box bg="bg.surface" p={6} borderRadius="lg" borderWidth="1px" w="full">
        <Heading as="h2" size="lg" mb={3}>
          Architecture Highlights
        </Heading>
        <VStack align="start" gap={2}>
          <Text>✅ TypeScript with strict typing</Text>
          <Text>✅ Chakra UI & Color Mode</Text>
          <Text>✅ TanStack Query (React Query)</Text>
          <Text>✅ Axios Base API</Text>
          <Text>✅ Modular architecture & Path Aliases</Text>
          <Text>✅ PWA Ready</Text>
        </VStack>
      </Box>
    </VStack>
  );
}
