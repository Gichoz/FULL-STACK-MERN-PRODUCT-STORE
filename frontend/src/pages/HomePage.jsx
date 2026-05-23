import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard"; // We'll create this next
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  // Run fetchProducts once when page loads
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products); // Check browser console to see data

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign={"center"}>
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
            No products found 😢{" "}
            <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
              <Link to={"/create"}>Create a product</Link>
            </Text>
          </Text>
        )}
      </VStack>
    </Container>
  );
};
export default HomePage;