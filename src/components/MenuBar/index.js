import * as React from 'react';
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

export default function MenuBar() {
  return (
    <Tabs color="orange" variant="pills" tabPadding="xl"
    styles={{
      root: { color: 'red' },
      tabsListWrapper: { color: 'red' },
      tabsList: { color: 'red' },
      body: { color: 'white' },
      tabControl: { color: 'red' },
      tabActive: { color: 'red' },
      tabInner: { color: 'red' },
      tabLabel: { color: 'red' },
      tabIcon: { color: 'red' },
    }}
    >
      <Tabs.Tab label="Gallery" icon={<Photo size={14} />}>Gallery tab content</Tabs.Tab>
      <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>Messages tab content</Tabs.Tab>
      <Tabs.Tab label="Settings" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab>
    </Tabs>
  );
}
