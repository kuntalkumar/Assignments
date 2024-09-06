import React, { useRef } from "react";
import { ChakraProvider, Box, Container, Heading, Text, Avatar, HStack, Tag, Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { jsPDF } from "jspdf";

function Resume() {
  const resumeRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'mm'
        });

    doc.html(resumeRef.current, {
      callback: function (pdf) {
        pdf.save("resume.pdf");
      },
      x: 10,
      y: 10,
      width: 190, // Full width - margin
      windowWidth: 600 // Large enough to capture entire width
    });
  };

  return (
    <ChakraProvider>
      <Box>
        <Flex  color="white" p={4} align="center">
          <Heading as="h1" size="md" color="white" ml={4}></Heading>
          <Spacer />
          <Button colorScheme="red"_hover={{ bg: "green.500" }} onClick={generatePDF}>
            Download PDF
          </Button>
        </Flex>

        <Box ref={resumeRef} p={4} maxW="600px" mx="auto" fontSize="m">
          {/* Header Section */}
          <Flex direction="column"     mb={6} bg="teal.900" color="white" p={4} borderRadius="md">
            <Flex direction="row" justifyContent="space-around">
              <Avatar size="lg" src={require("../asset/profile-pic.png")} alt="Profile Picture" mr={4} />
              <Box textAlign="center" mr={20}>
                <Heading as="h1" size="lg" mb={1}>
                  Kuntal Kumar
                </Heading>
                <Text fontSize="m">Full Stack Web Developer</Text>
              </Box>
            </Flex>
          </Flex>

          <Container>
            {/* Profile Section */}
            <Box mb={4}>
              <Heading as="h2" size="sm" mb={2}>Contact</Heading>
              <Text>Phone: 7908295742</Text>
              <Text>Email: kuntalkumar789@gmail.com</Text>
              <Link href="https://www.linkedin.com/in/kuntal-kumar-621205236/" isExternal>
                <Text color="teal.600">LinkedIn</Text>
              </Link>
            </Box>

            {/* Experience Section */}
            <Box mb={4}>
              <Heading as="h2" size="sm" mb={2}>Experience</Heading>
              <Box>
                <Text fontWeight="bold">Operation Executive | Finnovation Tech Solution Pvt Ltd</Text>
                <Text>June 2022 - May 2025</Text>
                <Text>Worked as an Operation Executive</Text>
              </Box>
            </Box>

            {/* Education Section */}
            <Box mb={4}>
              <Heading as="h2" size="sm" mb={2}>Education</Heading>
              <Box mb={1}>
                <Text fontWeight="bold" >Full Stack Web Development</Text>
                <Text fontWeight="">|| Masai School ||</Text>
                <Text>November 2022 - April 2024</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">B.Tech in Electronics and
                Communication Engineering</Text>
                <Text fontWeight="">|| Bengal Institute Of Technology And
                Management ||</Text>
                <Text>June 2022 - May 2025</Text>
              </Box>
            </Box>

            {/* Skills Section */}
            <Box mb={4}>
              <Heading as="h2" size="sm" mb={2}>Technical Skills</Heading>
              <HStack spacing={2} wrap="wrap">
                <Tag size="sm">JavaScript</Tag>
                <Tag size="sm">React</Tag>
                <Tag size="sm">Node.js</Tag>
                <Tag size="sm">MongoDB</Tag>
                <Tag size="sm">Express</Tag>
                <Tag size="sm">HTML</Tag>
                <Tag size="sm">CSS</Tag>
              </HStack>
              <Heading as="h2" size="sm" mt={4} mb={2}>Soft Skills</Heading>
              <HStack spacing={2} wrap="wrap">
                <Tag size="sm">Problem Solving</Tag>
                <Tag size="sm">Teamwork</Tag>
                <Tag size="sm">Time Management</Tag>
                <Tag size="sm">Adaptability</Tag>
              </HStack>
            </Box>

            {/* Hobbies Section */}
            <Box mb={4}>
              <Heading as="h2" size="sm" mb={2}>Hobbies</Heading>
              <Text>- Travelling</Text>
              <Text>- Reading tech blogs</Text>
              <Text>- Listening to Music</Text>
            </Box>

  <Heading as="h2" size="sm" mb={2}>References</Heading>
  <Text>No references available at this time.</Text>

          </Container>
        </Box>
        
      </Box>
    </ChakraProvider>
  );
}

export default Resume;
