import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import TableView from './components/TableView';
import StoryboardView from './components/StoryboardView';
import PlotlineView from './components/PlotlineView';
import CharacterSheet from './components/CharacterSheet';
import LocationMap from './components/LocationMap';
// import { useParams } from 'react-router-dom';
import useChapterList from './hooks/useChapterList';
import toast from '@/components/ui/toast';
import Notification from '@/components/ui/Notification';

const { TabNav, TabList, TabContent } = Tabs;

const NovelOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('table');
  // const { novelId } = useParams<{ novelId: string }>();
  
  const {
    chapters,
    isLoading,
    error,
    mutate: refreshData
  } = useChapterList();

  // 处理错误显示
  if (error) {
    toast.push(
      <Notification closable title="错误">
        获取数据失败，请重试
      </Notification>
    );
  }

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
          {isLoading ? (
            <div className="flex justify-center py-8">加载中...</div>
          ) : (
            <>
              <TabContent value="table">
                <TableView />
              </TabContent>
              <TabContent value="plotline">
                <PlotlineView 
                  chapters={chapters} 
                  characters={[]} 
                  plots={[]} 
                />
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
            </>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default NovelOutline;
