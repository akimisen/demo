import React from 'react';
import Timeline from '@/components/ui/Timeline';
import classNames from 'classnames';

// 自定义水平时间线样式
const horizontalTimelineStyles = `
  .horizontal-timeline {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
  }

  .horizontal-timeline .timeline-item {
    flex-direction: column;
    min-height: auto;
    min-width: 150px;
  }

  .horizontal-timeline .timeline-item-wrapper {
    flex-direction: column;
  }

  .horizontal-timeline .timeline-connect {
    width: 100%;
    height: 2px;
    margin: 0 8px;
  }

  .horizontal-timeline .timeline-item-media {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  .horizontal-timeline .timeline-item-content {
    margin-left: 0;
    margin-top: 8px;
    padding-bottom: 0;
    text-align: center;
  }
`;

// 章节类型定义
type Chapter = {
  id: string;
  title: string;
};

// 角色类型定义
type Character = {
  id: string;
  name: string;
  color?: string;
};

// 情节类型定义
type Plot = {
  id: string;
  title: string;
  chapterId: string;
  characterIds: string[];
};

type LoglineProps = {
  chapters: Chapter[];
  characters: Character[];
  plots: Plot[];
};

const LoglineView = ({ chapters, characters, plots }: LoglineProps) => {
  return (
    <>
      <style>{horizontalTimelineStyles}</style>
      
      <div className="mb-4">
        {/* 章节标题行 */}
        <Timeline className="horizontal-timeline">
          {chapters.map((chapter, index) => (
            <Timeline.Item 
              key={chapter.id}
              className="chapter-item"
            >
              <div className="font-medium text-center">{chapter.title}</div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
      
      {/* 为每个角色创建一行 */}
      {characters.map(character => {
        const characterPlots = plots.filter(plot => 
          plot.characterIds.includes(character.id)
        );
        
        return (
          <div key={character.id} className="mb-6">
            <div className="w-24 font-medium mb-2">{character.name}</div>
            <Timeline className="horizontal-timeline">
              {chapters.map(chapter => {
                const plotsInChapter = characterPlots.filter(
                  plot => plot.chapterId === chapter.id
                );
                
                return (
                  <Timeline.Item 
                    key={`${character.id}-${chapter.id}`}
                    media={
                      plotsInChapter.length > 0 ? (
                        <div 
                          className="h-12 w-12 rounded-md flex items-center justify-center text-white"
                          style={{ backgroundColor: character.color || '#3b82f6' }}
                        >
                          {plotsInChapter[0].title}
                        </div>
                      ) : null
                    }
                  >
                    {plotsInChapter.length > 1 && (
                      <div className="text-xs">+{plotsInChapter.length - 1} 更多</div>
                    )}
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </div>
        );
      })}
    </>
  );
};

export default LoglineView; 