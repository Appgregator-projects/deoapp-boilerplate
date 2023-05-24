import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { NavButton } from "./NavButton";
import { UserProfile } from "./UserProfile";

// ** Theme Configuration
import themeConfig from "../../../Config/themeConfig";

function Sidebar({ layout }) {
  if (layout.type === "vertical" || layout.type === "vertical-horizontal")
    return (
      <Box
        height="full"
        width={{
          md: "14rem",
          xl: "18rem",
        }}
        display={{
          base: "none",
          lg: "initial",
        }}
        overflowY="auto"
        //   borderRightWidth="1px"
        shadow={"base"}
        roundedBottomRight={"lg"}
        roundedTopRight={"lg"}
      >
        <Box position="sticky" overflowY="auto">
          <Flex as="section" minH="100vh" bg="white">
            <Flex
              flex="1"
              bg="bg-surface"
              boxShadow="sm"
              maxW={{
                base: "full",
                sm: "xs",
              }}
              py={{
                base: "6",
                sm: "8",
              }}
              px={{
                base: "4",
                sm: "6",
              }}
            >
              <Stack justify="space-between" spacing="1">
                <Stack
                  spacing={{
                    base: "5",
                    sm: "6",
                  }}
                  shouldWrapChildren
                >
                  {/* <Logo /> */}
                  <Center>
                    <Image src={themeConfig.logo} maxH={100} />
                  </Center>

                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FiSearch} color="muted" boxSize="5" />
                    </InputLeftElement>
                    <Input placeholder="Search" />
                  </InputGroup>
                  <Stack spacing="1">
                    <NavButton label="Home" icon={FiHome} />
                    <NavButton
                      label="Dashboard"
                      icon={FiBarChart2}
                      aria-current="page"
                    />
                    <NavButton label="Tasks" icon={FiCheckSquare} />
                    <NavButton label="Bookmarks" icon={FiBookmark} />
                    <NavButton label="Users" icon={FiUsers} />
                  </Stack>
                </Stack>
                <Stack
                  spacing={{
                    base: "5",
                    sm: "6",
                  }}
                >
                  <Stack spacing="1">
                    <NavButton label="Help" icon={FiHelpCircle} />
                    <NavButton label="Settings" icon={FiSettings} />
                  </Stack>

                  {/* <Box bg="bg-subtle" px="4" py="5" borderRadius="lg">
                <Stack spacing="4">
                  <Stack spacing="1">
                    <Text fontSize="sm" fontWeight="medium">
                      Almost there
                    </Text>
                    <Text fontSize="sm" color="muted">
                      Fill in some more information about you and your person.
                    </Text>
                  </Stack>
                  <Progress
                    value={80}
                    size="sm"
                    aria-label="Profile Update Progress"
                  />
                  <HStack spacing="3">
                    <Button variant="link" size="sm">
                      Dismiss
                    </Button>
                    <Button variant="link" size="sm" colorScheme="blue">
                      Update profile
                    </Button>
                  </HStack>
                </Stack>
              </Box> */}
                  {layout.type === "vertical-horizontal" &&
                  layout.userProfile === "sidebar" ? (
                    <>
                      <Divider />

                      <UserProfile
                        name="Christoph Winston"
                        image="https://tinyurl.com/yhkm2ek8"
                        email="chris@chakra-ui.com"
                      />
                    </>
                  ) : layout.type === "vertical" ? (
                    <>
                      <Divider />

                      <UserProfile
                        name="Christoph Winston"
                        image="https://tinyurl.com/yhkm2ek8"
                        email="chris@chakra-ui.com"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </Stack>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    );

  return <></>;
}

export default Sidebar;
