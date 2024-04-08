import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Container, Card, CardBody, Stack, Divider, Button, Icon } from "@chakra-ui/react";
import { FaUtensils, FaClock, FaHeart } from "react-icons/fa";

const Index = () => {
  const recipes = [
    {
      title: "Creamy Tomato Pasta",
      description: "A delicious and easy-to-make pasta dish with a creamy tomato sauce.",
      prepTime: "20 min",
      image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVhbXklMjB0b21hdG8lMjBwYXN0YXxlbnwwfHx8fDE3MTI1NzI4NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Grilled Lemon Herb Chicken",
      description: "Juicy and flavorful grilled chicken marinated in lemon and herbs.",
      prepTime: "30 min",
      image: "https://images.unsplash.com/photo-1604908816315-6be59f37a4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwbGVtb24lMjBoZXJiJTIwY2hpY2tlbnxlbnwwfHx8fDE3MTI1NzI4NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies that are crispy on the outside and soft on the inside.",
      prepTime: "25 min",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llc3xlbnwwfHx8fDE3MTI1NzI4NjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box bg="gray.100" minH="100vh">
      <Box bg="teal.500" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            Delicious Recipes
          </Heading>
          <Text fontSize="xl" color="white">
            Discover a collection of mouth-watering recipes for every occasion.
          </Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {recipes.map((recipe, index) => (
            <Card key={index} bg="white" borderRadius="lg" boxShadow="md">
              <Image src={recipe.image} alt={recipe.title} borderTopRadius="lg" />
              <CardBody>
                <Stack spacing={4}>
                  <Heading as="h2" size="lg">
                    {recipe.title}
                  </Heading>
                  <Text>{recipe.description}</Text>
                  <Divider />
                  <Box display="flex" alignItems="center">
                    <Icon as={FaUtensils} color="teal.500" mr={2} />
                    <Text fontWeight="medium">{recipe.prepTime}</Text>
                  </Box>
                  <Button leftIcon={<FaHeart />} colorScheme="teal" variant="outline" size="sm" alignSelf="flex-start">
                    Save
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
