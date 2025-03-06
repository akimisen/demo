import React, { useState } from 'react';
import { Tabs, Tab } from '@/components/ui/Tabs';
import TableView from './components/TableView';
import TimelineView from './components/TimelineView';
import IndexCardView from './components/IndexCardView';
import CharactersView from './components/CharactersView';
import ScenesView from './components/ScenesView';

type TabType = 'table' | 'timeline' | 'indexcard' | 'characters' | 'scenes';

const NovelOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('table');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="novel-outline">
      <Tabs activeTab={activeTab} onChange={handleTabChange}>
        <Tab id="table" label="表格视图">
          <TableView />
        </Tab>
        <Tab id="timeline" label="时间线">
          <TimelineView />
        </Tab>
        <Tab id="indexcard" label="索引卡">
          <IndexCardView />
        </Tab>
        <Tab id="characters" label="人物">
          <CharactersView />
        </Tab>
        <Tab id="scenes" label="场景">
          <ScenesView />
        </Tab>
      </Tabs>
    </div>
  );
};

export default NovelOutline;
