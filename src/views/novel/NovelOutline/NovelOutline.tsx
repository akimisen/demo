import React, { useState, useEffect } from 'react';
import Tabs from '@/components/ui/Tabs';
import TableView from './components/TableView';
import StoryboardView from './components/StoryboardView';
import PlotlineView from './components/PlotlineView';
import CharacterSheet from './components/CharacterSheet';
import LocationMap from './components/LocationMap';
import { useParams } from 'react-router-dom';
import toast from '@/components/ui/toast';
import Notification from '@/components/ui/Notification'

const { TabNav, TabList, TabContent } = Tabs;

// 临时模拟数据 - 实际应用中应从API获取
const mockChapters = [
  { id: 'ch1', title: '第一章：开始' },
  { id: 'ch2', title: '第二章：冲突' },
  { id: 'ch3', title: '第三章：高潮' },
  { id: 'ch4', title: '第四章：结局' },
];

const mockCharacters = [
  { id: 'char1', name: '主角', color: '#4f46e5' },
  { id: 'char2', name: '配角', color: '#10b981' },
  { id: 'char3', name: '反派', color: '#ef4444' },
];

const mockPlots = [
  { id: 'plot1', title: '初遇', chapterId: 'ch1', characterIds: ['char1', 'char2'] },
  { id: 'plot2', title: '冲突', chapterId: 'ch2', characterIds: ['char1', 'char3'] },
  { id: 'plot3', title: '联手', chapterId: 'ch2', characterIds: ['char1', 'char2'] },
  { id: 'plot4', title: '决战', chapterId: 'ch3', characterIds: ['char1', 'char2', 'char3'] },
  { id: 'plot5', title: '胜利', chapterId: 'ch4', characterIds: ['char1', 'char2'] },
];

const NovelOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('table');
  const [chapters, setChapters] = useState(mockChapters);
  const [characters, setCharacters] = useState(mockCharacters);
  const [plots, setPlots] = useState(mockPlots);
  const [loading, setLoading] = useState(false);
  const { novelId } = useParams<{ novelId: string }>();

  // 获取小说大纲数据
  useEffect(() => {
    const fetchNovelData = async () => {
      if (!novelId) return;
      
      setLoading(true);
      try {
        // 实际应用中应从API获取数据
        // const response = await fetch(`/api/novels/${novelId}/outline`);
        // const data = await response.json();
        // setChapters(data.chapters);
        // setCharacters(data.characters);
        // setPlots(data.plots);
        
        // 使用模拟数据
        setChapters(mockChapters);
        setCharacters(mockCharacters);
        setPlots(mockPlots);
      } catch (error) {
        console.error('获取小说数据失败:', error);
        toast.push(
          <Notification closable title="错误">
            获取小说数据失败，请重试
          </Notification>
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNovelData();
  }, [novelId]);

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
          {loading ? (
            <div className="flex justify-center py-8">加载中...</div>
          ) : (
            <>
              <TabContent value="table">
                <TableView />
              </TabContent>
              <TabContent value="plotline">
                <PlotlineView 
                  chapters={chapters} 
                  characters={characters} 
                  plots={plots} 
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
