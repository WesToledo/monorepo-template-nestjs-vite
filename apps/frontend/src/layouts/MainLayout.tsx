import { ReactNode } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header" bg="bg.surface" borderBottomWidth="1px" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Box fontSize="xl" fontWeight="bold" color="text.primary">
              Casa do Malharista
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box as="main" flex="1" bg="bg.canvas">
        <Container maxW="container.xl" py={8}>
          {children}
        </Container>
      </Box>

      <Box as="footer" bg="bg.surface" borderTopWidth="1px" py={4}>
        <Container maxW="container.xl">
          <Box textAlign="center" color="text.secondary" fontSize="sm">
            © {new Date().getFullYear()} Casa do Malharista
          </Box>
        </Container>
      </Box>
    </Flex>
  );
}
