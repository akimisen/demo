import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import TableView from './components/TableView';
import StorylineView from './components/StorylineView';
import IndexCardView from './components/IndexCardView';
import CharactersView from './components/CharactersView';
import ScenesView from './components/ScenesView';

const { TabNav, TabList, TabContent } = Tabs;

const NovelOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('table');

  return (
    <div className="novel-outline">
      <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
        <TabList>
          <TabNav value="table">表格视图</TabNav>
          <TabNav value="storyline">时间线</TabNav>
          <TabNav value="indexcard">索引卡</TabNav>
          <TabNav value="characters">人物</TabNav>
          <TabNav value="scenes">场景</TabNav>
        </TabList>
        <div className="mt-4">
          <TabContent value="table">
            <TableView />
          </TabContent>
          <TabContent value="storyline">
            <StorylineView />
          </TabContent>
          <TabContent value="indexcard">
            <IndexCardView />
          </TabContent>
          <TabContent value="characters">
            <CharactersView />
          </TabContent>
          <TabContent value="scenes">
            <ScenesView />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default NovelOutline;
