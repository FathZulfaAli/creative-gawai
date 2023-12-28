/** @format */

import { Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";

export default function HomeTab() {
  return (
    <Tabs isManual variant="enclosed">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
