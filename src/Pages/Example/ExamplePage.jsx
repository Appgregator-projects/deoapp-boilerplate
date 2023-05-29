import { Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { BannerWithButtonComponent } from '../../Components/Banners/BannerWithButtonComponent'
import BreadCrumbComponent from '../../Components/BreadCrumbs/BreadCrumbComponent'
import CalendarComponents from '../../Components/Calendar/CalendarComponents'
import BasicCardComponent from '../../Components/Cards/BasicCardComponent'
import FeedCardComponent from '../../Components/Cards/FeedCardComponent'
import IconCardComponent from '../../Components/Cards/IconCardComponent'
import { FooterTwoColumnsComponent } from '../../Components/Footers/FooterTwoColumnsComponent'
import { DropZoneComponent } from '../../Components/Forms/DropZoneComponent'
import { CarouselComponent } from '../../Components/Galleries/Carousel/CarouselComponent'
import { HorizontalCarouselComponent } from '../../Components/Galleries/HorizontalCarousel/HorizontalCarouselComponent'
import { HeroCropedImageComponent } from '../../Components/Heroes/HeroCropedImageComponent'
import { HeroeWithImageBackground } from '../../Components/Heroes/HeroWithImageBackgroundComponent'
import { HeroWithScreenshotComponet } from '../../Components/Heroes/HeroWithScreenShotComponent'
import { ListDragableComponent } from '../../Components/Lists/ListDragableComponent'
import { ListWithAvatarComponent } from '../../Components/Lists/ListWithAvatarComponent'
import { MenuFullComponent } from '../../Components/Menus/MenuFullComponent'
import { MenuSingleComponent } from '../../Components/Menus/MenuSingleComponent'
import { NavBarWithAvatarComponent } from '../../Components/Navbar/NavbarWithAvatarComponent'
import { NavBarWithTowRows } from '../../Components/Navbar/NavbarWithTwoRows'
import { PricingTableComponent } from '../../Components/Pricing/PricingTableComponent'
import { PricingCornerPage } from '../../Components/Pricing/PricngCornerBadge'
import { SidebarComponent } from '../../Components/Sidebar/SidebarComponent'
import SlackTestingComponents from '../../Components/Slack/SlackTestingComponents'
import { StatsWithIconComponent } from '../../Components/Stats/StatsWithIconComponent'
import { TableComponent } from '../../Components/Tables/TableComponent'
import VideoComponent from '../../Components/Video/VideoComponent'
import ArrayUtil from '../../Utils/arrayUtil'

function ExamplePage() {
	return (<>
		<Tabs
		// orientation='vertical'
		>
			<TabList>
				<Tab>Hero</Tab>
				<Tab>Lists</Tab>
				<Tab>Stats</Tab>
				<Tab>Table</Tab>
				<Tab>Carousel</Tab>
				<Tab>Pricing</Tab>
				<Tab>Menu</Tab>
				<Tab>Navbar</Tab>
				<Tab>Sidebar</Tab>
				<Tab>Card</Tab>
				<Tab>Stats</Tab>
				<Tab>BreadCrumbs</Tab>
				<Tab>Banners</Tab>
				<Tab>Forms</Tab>
				<Tab>Footer</Tab>
				<Tab>Video</Tab>
				<Tab>Array</Tab>
				<Tab>Calendar</Tab>
				<Tab>Slack</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<SimpleGrid gap='2' border='1px'>
						<HeroeWithImageBackground />
						<HeroCropedImageComponent />
						<HeroWithScreenshotComponet />
					</SimpleGrid>
				</TabPanel>
				<TabPanel>
					<SimpleGrid columns={2} gap='2' border='1px'>
						<ListDragableComponent />
						<ListWithAvatarComponent />
					</SimpleGrid>
				</TabPanel>
				<TabPanel>
					<StatsWithIconComponent />
				</TabPanel>
				<TabPanel>
					<TableComponent />
				</TabPanel>
				<TabPanel>
					<CarouselComponent />
					<HorizontalCarouselComponent />
				</TabPanel>
				<TabPanel>
					<SimpleGrid columns={2} gap='2' border='1px'>
						<PricingCornerPage />
						<PricingTableComponent />
					</SimpleGrid>
				</TabPanel>
				<TabPanel>
					<SimpleGrid columns={2} gap='2' border='1px'>
						<MenuFullComponent />
						<MenuSingleComponent />
					</SimpleGrid>
				</TabPanel>
				<TabPanel>
					<NavBarWithAvatarComponent />
					<NavBarWithTowRows />
				</TabPanel>
				<TabPanel>
					<SidebarComponent />
				</TabPanel>
				<TabPanel>
					<SimpleGrid columns={2} gap='2' border='1px'>
						<BasicCardComponent />
						<IconCardComponent />
						<FeedCardComponent />

					</SimpleGrid>
				</TabPanel>
				<TabPanel>
					<StatsWithIconComponent />
				</TabPanel>
				<TabPanel>
					<BreadCrumbComponent />
				</TabPanel>
				<TabPanel>
					<BannerWithButtonComponent />
				</TabPanel>
				<TabPanel>
					<SimpleGrid columns={2} gap='2' border='1px'>
						<DropZoneComponent />
					</SimpleGrid>
				</TabPanel>
				<TabPanel>
					<FooterTwoColumnsComponent />
				</TabPanel>
				<TabPanel>
					<VideoComponent videoUrl={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} poster={"https://media.licdn.com/dms/image/D5603AQH5Kajx1ocJDA/profile-displayphoto-shrink_800_800/0/1669221757358?e=2147483647&v=beta&t=Xua3Hjm66G-K1HlnK65kZkdOepuxDdGuWeJsuB0l8wo"} />
				</TabPanel>
				<TabPanel>
					<ArrayUtil/>
				</TabPanel>

				<TabPanel>
					<CalendarComponents />
				</TabPanel>

				<TabPanel>
					<SlackTestingComponents />
				</TabPanel>



			</TabPanels>
		</Tabs>












	</>
	)
}

export default ExamplePage