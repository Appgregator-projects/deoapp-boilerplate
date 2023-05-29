import React from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

const steps = [
  { title: 'CUSTOMER PAID', description: 'Customer has paid' },
  { title: 'SUPPLIER PAID', description: 'Supplier has paid' },
  { title: 'IN WAREHOUSE', description: 'In warehouse' },
  { title: 'IN SHIPPING', description: 'In shipping' },
  { title: 'IN WAREHOUSE COUNTRY', description: 'In warehouse country' },
  { title: 'DONE', description: 'Order completed' },
];

const Step = ({ title, description, isActive, isCompleted }) => {
  return (
    <Flex align="center">
      <Box
        w="24px"
        h="24px"
        borderRadius="full"
        bg={isActive || isCompleted ? 'red.500' : 'gray.300'}
        mr={4}
        transition="background-color 0.3s"
      >
        {isCompleted && (
          <Text color="white" fontSize="sm" textAlign="center" mt="2px">
            ✓
          </Text>
        )}
      </Box>
      <Box>
        <Text fontWeight={isActive ? 'bold' : 'normal'}>{title}</Text>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </Flex>
  );
};

const CustomStepper = ({ currentStep }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const getStepIndex = () => {
    return steps.findIndex((step) => step.title === currentStep);
  };

  return (
    <Flex direction={isMobile ? 'column' : 'row'}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index !== 0 && !isMobile && (
            <Box
              flex="1"
              h="2px"
              bg={index <= getStepIndex() ? 'red.500' : 'gray.300'}
              alignSelf="center"
              transition="background-color 0.3s"
            />
          )}
          <Step
            title={step.title}
            description={step.description}
            isActive={step.title === currentStep}
            isCompleted={index < getStepIndex()}
          />
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default CustomStepper;

// you can call custom stepper value with title step, example : IN WAREHOUSE