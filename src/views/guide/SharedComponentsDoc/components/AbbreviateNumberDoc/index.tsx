import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'

const mdPath = 'AbbreviateNumberDoc'

const demoHeader = {
    title: 'AbbreviateNumber',
    desc: ' AbbreviateNumber designed to abbreviate large numbers for better readability. It converts numbers into a shortened format with a suffix, such as "K" for thousands and "M" for millions.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Basic usage.`,
        component: <Basic />,
    },
]

const demoApi = [
    {
        component: 'ActionLink',
        api: [
            {
                propName: 'value',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'The numeric value to be abbreviated and displayed.',
            },
        ],
    },
]

const ActionLinkDoc = () => {
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

export default ActionLinkDoc
