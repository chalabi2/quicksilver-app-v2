import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  HStack,
  Text,
  Box,
  Circle,
  Flex,
  Button,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';

const ChakraModalContent = styled(ModalContent)`
  position: relative;
  background: none;
  &::before,
  &::after {
    z-index: -1; // Push the pseudo-elements to the background
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 40%;
    background-color: #201c18;
    border-radius: 5px 0 0 5px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    background-color: #1a1a1a;
    border-radius: 0 5px 5px 0;
  }
`;

interface StakingModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const StakingProcessModal: React.FC<StakingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = React.useState(1);
  const getProgressColor = (circleStep: number) => {
    if (step >= circleStep) return 'complimentary.900';
    return 'rgba(255,255,255,0.2)';
  };

  const labels = ['Aprrove staking', 'Staking Atom on QS', 'Atom -> qAtom'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ChakraModalContent h="38%">
        <ModalBody borderRadius={4} h="38%">
          <ModalCloseButton color="white" />
          <HStack h="100%" spacing="48px" align="stretch">
            {/* Left Section */}
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              width="40%"
              p={4}
              bg="#1E1C19"
              height="100%"
            >
              <Box position="relative">
                <Stat>
                  <StatLabel color="rgba(255,255,255,0.5)">
                    LIQUID STAKING
                  </StatLabel>
                  <StatNumber color="white">1 Atom</StatNumber>
                </Stat>
                {[1, 2, 3].map((circleStep, index) => (
                  <Flex
                    key={circleStep}
                    align="center"
                    mt={10}
                    mb={circleStep !== 3 ? '48px' : '0'}
                  >
                    <Circle
                      size="36px"
                      bg={getProgressColor(circleStep)}
                      color="white"
                      fontWeight="bold"
                      borderWidth={'2px'}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      borderColor="rgba(255,255,255,0.5)"
                    >
                      {circleStep}
                      {circleStep !== 3 && (
                        <>
                          <Box
                            width="2px"
                            height="30px"
                            bgColor="rgba(255,255,255,0.01)"
                            position="absolute"
                            bottom="-42px"
                            left="50%"
                            transform="translateX(-50%)"
                          />
                          <Box
                            width="2px"
                            height="30px"
                            bgColor={getProgressColor(circleStep + 1)}
                            position="absolute"
                            bottom="-42px"
                            left="50%"
                            transform="translateX(-50%)"
                          />
                        </>
                      )}
                    </Circle>
                    <Text
                      fontWeight="hairline"
                      ml={3}
                      color="rgba(255,255,255,0.75)"
                    >
                      {labels[index]}
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Flex>

            {/* Right Section */}
            <Flex
              width="67%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {step === 1 && (
                <Text color="white">This is the information for step 1.</Text>
              )}
              {step === 2 && (
                <Text color="white">This is the information for step 2.</Text>
              )}
              {step === 3 && (
                <Text color="white">This is the information for step 3.</Text>
              )}
              <Button
                mt={4}
                onClick={() =>
                  setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : 3))
                }
              >
                Next Step
              </Button>
            </Flex>
          </HStack>
        </ModalBody>
      </ChakraModalContent>
    </Modal>
  );
};
export default StakingProcessModal;
