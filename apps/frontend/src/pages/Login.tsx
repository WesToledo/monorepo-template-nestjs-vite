import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Link,
  Separator,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      minH="100vh"
      w="full"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      overflow="hidden"
      py={{ base: 6, sm: 12 }}
      bg="bg.canvas"
    >
      {/* Background Pattern/Decoration */}
      <Box position="absolute" inset="0" w="full" h="full" zIndex="0">
        <Box
          position="absolute"
          inset="0"
          bg="bg.canvas"
          opacity="0.9"
          zIndex="10"
        />
        {/* Subtle industrial texture */}
        <Box
          w="full"
          h="full"
          backgroundSize="cover"
          backgroundPosition="center"
          opacity="0.1"
          filter="grayscale(1)"
          backgroundImage="url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFJrDYEOqINmOeEcBdcp7yU_EfQyqjIr6cISSFi6bah-KHQ-m52hF13qBdHaLz7nYuSvwhiBKCwXWc3xNqI2ju9nzypj8OUQFZpUZ0cSYlMJVZnhKDVn2flkqSRLHoh2p-Dhwrh9FNiDerI23_G4n4zgpPZfkHBeEA-CpQNcO_QTSA60YCiSs3pypUmm9B62eTSVWLxAsibUlhuhvPTrDzrH50vlr4lzUAlQBtXul6ed5w2LgO_1bWKOV7vu3n0idG_kBZ5VKO8pyO')"
        />
      </Box>

      {/* Login Card Container */}
      <Container
        maxW="md"
        position="relative"
        zIndex="20"
        px={{ base: 4, sm: 0 }}
      >
        <Card.Root
          bg="bg.surface"
          shadow="2xl"
          borderRadius="xl"
          border="none"
          pt="10"
          pb="8"
          px={{ base: 6, sm: 10 }}
        >
          <Card.Header pb="8">
            <VStack gap="4" align="center">
              <Center
                h="12"
                w="12"
                borderRadius="lg"
                bg="primary.500"
                color="white"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "30px" }}
                >
                  texture
                </span>
              </Center>
              <VStack gap="2" textAlign="center">
                <Heading size="3xl" fontWeight="bold" letterSpacing="tight">
                  Template Login
                </Heading>
                <Text fontSize="sm" color="text.secondary">
                  Monorepo Template NestJS + Vite + Chakra UI
                </Text>
              </VStack>
            </VStack>
          </Card.Header>

          <Card.Body>
            <form action="#" method="POST">
              <Stack gap="6">
                {/* Email Field */}
                <Field.Root>
                  <Field.Label fontWeight="medium" fontSize="sm">
                    Email Address
                  </Field.Label>
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    required
                    size="lg"
                    borderRadius="lg"
                    bg="bg.surface"
                  />
                </Field.Root>

                {/* Password Field */}
                <Field.Root>
                  <Field.Label fontWeight="medium" fontSize="sm">
                    Password
                  </Field.Label>
                  <InputGroup
                    w="full"
                    endElement={
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px", cursor: "pointer" }}
                      >
                        lock
                      </span>
                    }
                  >
                    <Input
                      type="password"
                      placeholder="••••••••"
                      required
                      size="lg"
                      borderRadius="lg"
                      bg="bg.surface"
                    />
                  </InputGroup>
                </Field.Root>

                {/* Remember Me */}
                <Flex align="center" justify="space-between">
                  <Checkbox.Root defaultChecked id="remember-me">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label fontSize="sm" color="text.secondary">
                      Remember me
                    </Checkbox.Label>
                  </Checkbox.Root>
                </Flex>

                {/* Submit Button */}
                <Button
                  type="submit"
                  bg="primary.500"
                  color="white"
                  size="lg"
                  h="14"
                  fontWeight="bold"
                  borderRadius="lg"
                  _hover={{ bg: "primary.600" }}
                  transition="all 0.2s"
                >
                  <HStack gap="2">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      login
                    </span>
                    Sign In
                  </HStack>
                </Button>
              </Stack>
            </form>
          </Card.Body>

          <Card.Footer mt="8" flexDirection="column" p="0">
            <Box position="relative" w="full" mb="6">
              <Separator />
              <Center
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="bg.surface"
                px="6"
              >
                <Text fontSize="sm" fontWeight="medium" color="text.secondary">
                  Need help?
                </Text>
              </Center>
            </Box>

            <Center>
              <Link
                href="#"
                color="primary.500"
                fontWeight="semibold"
                fontSize="sm"
                _hover={{ color: "primary.600", textDecoration: "none" }}
                display="flex"
                alignItems="center"
                gap="1"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  support_agent
                </span>
                Contact Support if access is needed
              </Link>
            </Center>
          </Card.Footer>
        </Card.Root>

        {/* Bottom Legal/Version Info */}
        <Box mt="8" textAlign="center">
          <Text fontSize="xs" color="text.secondary">
            © 2026 Template. No rights reserved. <br />
            Vibe coding broh!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
