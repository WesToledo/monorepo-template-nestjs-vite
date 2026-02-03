import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

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
      <Card.Root>
        <Card.Body>
          <VStack align="start" gap={2}>
            <Text>✅ TypeScript with strict typing</Text>
            <Text>✅ Chakra UI & Color Mode</Text>
            <Text>✅ TanStack Query (React Query)</Text>
            <Text>✅ Axios Base API</Text>
            <Text>✅ Modular architecture & Path Aliases</Text>
            <Text>✅ PWA Ready</Text>
          </VStack>
        </Card.Body>
      </Card.Root>
    </VStack>
  );
}
