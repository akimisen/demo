import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Example from './Example'

const mdPath = 'GanttChartDoc'

const demoHeader = {
    title: 'GanttChart',
    desc: 'This component is an extended version of the  <a class="text-primary" href="https://github.com/MaTeMaTuK/gantt-task-react" target="_blank">gantt-task-react</a> library. It is ideal for visualizing project timelines, tasks, and milestones with enhanced customization options.',
}

const demos = [
    {
        mdName: 'Example',
        mdPath: mdPath,
        title: 'Example',
        desc: `Example usage`,
        component: <Example />,
    },
]

const demoApi = [
    {
        component: 'GanttChart',
        api: [
            {
                propName: 'tasks',
                type: 'ExtendedTask<T>[]',
                default: '[]',
                desc: 'An array of tasks to be displayed in the Gantt chart. Each task includes properties like id, name, start, end, and progress.',
            },
            {
                propName: 'viewMode',
                type: '<code>ViewMode</code>',
                default: '<code>ViewMode.Day</code>',
                desc: 'The view mode of the Gantt chart. Can be set to Hour, Quarter Day, Half Day, Day, Week, Month, or Year.',
            },
            {
                propName: 'extraColumns',
                type: '{ header: ExtraHeader; cell: ExtraCell }[]',
                default: '[]',
                desc: 'An array of objects defining additional columns to be displayed in the task list. Each object contains a header and a cell renderer.',
            },
            {
                propName: 'colorsMap',
                type: '<code>Object{string, string}</code>',
                default: '{}',
                desc: 'A mapping of custom colors to task types or specific tasks. This allows for dynamic styling based on the task or project type.',
            },
            {
                propName: 'showArrow',
                type: 'boolean',
                default: 'true',
                desc: 'A flag to determine whether to display dependency arrows between tasks. When set to false, arrows are hidden.',
            },
            {
                propName: 'headerHeight',
                type: '<code>number</code>',
                default: '50',
                desc: 'The height of the header in the Gantt chart, in pixels.',
            },
            {
                propName: 'columnWidth',
                type: '<code>number</code>',
                default: '65',
                desc: 'The width of each column in the Gantt chart, in pixels.',
            },
            {
                propName: 'rowHeight',
                type: '<code>number</code>',
                default: '50',
                desc: 'The height of each row in the Gantt chart, in pixels.',
            },
            {
                propName: 'barCornerRadius',
                type: '<code>number</code>',
                default: '6',
                desc: 'The corner radius of the task bars in the Gantt chart.',
            },
            {
                propName: 'TaskListHeader',
                type: '{ headerHeight: number; rowWidth: string; fontFamily: string; fontSize: string; }',
                default: '<code>TaskListHeader</code>',
                desc: 'A custom header component for the task list. Allows for the inclusion of additional headers defined in extraColumns.',
            },
            {
                propName: 'TaskListTable',
                type: '{ rowHeight: number; rowWidth: string; fontFamily: string; fontSize: string; locale: string; tasks: Task[]; selectedTaskId: string; setSelectedTask: (taskId: string) => void; onExpanderClick: (task: Task) => void; }',
                default: '<code>TaskListTable</code>',
                desc: 'A custom table component for the task list, allowing the inclusion of additional cells defined in extraColumns.',
            },
            {
                propName: 'TooltipContent',
                type: '{ task: Task; fontSize: string; fontFamily: string; }',
                default: '<code>TooltipContent</code>',
                desc: 'A custom tooltip component for displaying task details.',
            },
            {
                propName: 'todayColor',
                type: '<code>string</code>',
                default: '<code>url(#horzLines)</code>',
                desc: 'The color used to highlight the current day in the Gantt chart.',
            },
            {
                propName: 'arrowColor',
                type: '<code>string</code>',
                default: '<code>#3380fa</code>',
                desc: 'The color of the dependency arrows between tasks.',
            },
            {
                propName: 'onSelect',
                type: '(task: Task, isSelected: boolean) => void',
                default: 'undefined',
                desc: 'Callback invoked when a task is selected or unselected.',
            },
            {
                propName: 'onDoubleClick',
                type: '(task: Task) => void',
                default: 'undefined',
                desc: 'Callback invoked when a task is double-clicked.',
            },
            {
                propName: 'onClick',
                type: '(task: Task) => void',
                default: 'undefined',
                desc: 'Callback invoked when a task is clicked.',
            },
            {
                propName: 'onDateChange',
                type: '(task: Task, children: Task[]) => void | boolean | Promise<void> | Promise<boolean>',
                default: 'undefined',
                desc: 'Callback invoked when the start or end date of a task changes. Returning false or throwing an error will undo the operation.',
            },
            {
                propName: 'onProgressChange',
                type: '(task: Task, children: Task[]) => void | boolean | Promise<void> | Promise<boolean>',
                default: 'undefined',
                desc: 'Callback invoked when the progress of a task changes. Returning false or throwing an error will undo the operation.',
            },
            {
                propName: 'onDelete',
                type: '(task: Task) => void | boolean | Promise<void> | Promise<boolean>',
                default: 'undefined',
                desc: 'Callback invoked when a task is deleted. Returning false or throwing an error will undo the operation.',
            },
            {
                propName: 'onExpanderClick',
                type: '(task: Task) => void',
                default: 'undefined',
                desc: 'Callback invoked when the expander icon is clicked in the task list.',
            },
        ],
    },
]

const ganttTaskReactFormatApi = (
    <div className="demo-api-table mb-12">
        <h4 className="mb-5">Dependencies</h4>
        <h6 id="react-number-format-api" className="mb-3">
            gantt-task-react
        </h6>
        <p>
            You can found all the available props here{' '}
            <a
                className="underline text-primary"
                href="https://github.com/MaTeMaTuK/gantt-task-react"
                target="_blank"
                rel="noreferrer"
            >
                gantt-task-react
            </a>{' '}
        </p>
    </div>
)

const GanttChartDoc = () => {
    return (
        <DemoLayout
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            api={demoApi}
            mdPrefixPath="shared"
            extra={ganttTaskReactFormatApi}
        />
    )
}

export default GanttChartDoc
