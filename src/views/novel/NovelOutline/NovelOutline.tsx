import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import TableView from './components/TableView';
import StoryboardView from './components/StoryboardView';
import PlotlineView from './components/PlotlineView';
import CharacterSheet from './components/CharacterSheet';
import LocationMap from './components/LocationMap';

const { TabNav, TabList, TabContent } = Tabs;

const NovelOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('table');

  return (
    <div className="novel-outline">
      <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
        <TabList>
          <TabNav value="table">表格视图</TabNav>
          <TabNav value="plotline">情节线</TabNav>
          <TabNav value="storyboard">故事板</TabNav>
          <TabNav value="characters">人物</TabNav>
          <TabNav value="locations">地点</TabNav>
        </TabList>
        <div className="mt-4">
          <TabContent value="table">
            <TableView />
          </TabContent>
          <TabContent value="plotline">
            <PlotlineView />
          </TabContent>
          <TabContent value="storyboard">
            <StoryboardView />
          </TabContent>
          <TabContent value="characters">
            <CharacterSheet />
          </TabContent>
          <TabContent value="locations">
            <LocationMap />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default NovelOutline;
