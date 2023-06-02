import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Image,

	Select,
	Stack,
} from "@chakra-ui/react";
import {
	FiBarChart2,
	FiBookmark,
	FiCheckSquare,
	FiHelpCircle,
	FiHome,
	FiLogOut,
	FiSettings,
	FiUsers,
} from "react-icons/fi";
import { logOutUser } from "../../Apis/firebaseApi";
import themeConfig from "../../Config/themeConfig";
import { useGlobalDispatch, useGlobalState } from "../../Hooks/Contexts";
import { NavButton } from "./NavButton";
import { UserProfile } from "./UserProfile";

// ** Theme Configuration

function SidebarComponentV2({ layout }) {
	const globalState = useGlobalState()
	const globalDispatch = useGlobalDispatch()

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
									<Center>
										<Image src={themeConfig.logo} maxH={100} />
									</Center>


									<Button onClick={() => console.log(globalState)}>Check Console</Button>
									<Select placeholder='Select option'
										onChange={(e) => globalDispatch({
											type: "CURRENT_PROJECTS",
											payload: {
												currentProject: e.target.value
											}
										})}>
										{globalState?.projects?.map((x) => <option value={x.id}>{x.name}</option>)}
									</Select>
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
										<Button icon={FiLogOut} onClick={() => logOutUser()}>Logout</Button>

									</Stack>


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

export default SidebarComponentV2;
