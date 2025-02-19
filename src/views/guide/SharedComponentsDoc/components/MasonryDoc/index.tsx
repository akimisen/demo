import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import Responsive from './Responsive'

const mdPath = 'MasonryDoc'

const demoHeader = {
    title: 'Masonry',
    desc: 'A component for masonry layout',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Basic usage`,
        component: <Basic />,
    },
    {
        mdName: 'Responsive',
        mdPath: mdPath,
        title: 'Responsive',
        desc: `Responsive example`,
        component: <Responsive />,
    },
]

const demoApi = [
    {
        component: 'Masonry',
        api: [
            {
                propName: 'asElement',
                type: `<code>string</code>`,
                default: `<code>'div'</code>`,
                desc: 'Render element',
            },
            {
                propName: 'columns',
                type: '<code>number | Object{number, number}</code>',
                default: `-`,
                desc: 'Columns of mansory, could be could be type of object for responsive control',
            },
            {
                propName: 'gap',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'Gap between mansory item',
            },
        ],
    },
]

const PresetSegmentItemOptionDoc = () => {
    return (
        <DemoLayout
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            api={demoApi}
            mdPrefixPath="shared"
        />
    )
}

export default PresetSegmentItemOptionDoc
