/** @jsxImportSource theme-ui */
import { Container, Flex, Text } from "theme-ui";

export function Layout({ children }) {
  return (
    <>
      <Container as="main" p={6}>
        <Flex
          sx={{
            bg: 'red',
            alignItems: "center",
          }}
        >
          {children}
        </Flex>
      </Container>
    </>
  );
}
