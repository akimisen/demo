import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import Icon from './Icon'
import CustomClass from './CustomClass'

const mdPath = 'GrowShrinkValueDoc'

const demoHeader = {
    title: 'GrowShrinkValue',
    desc: 'GrowShrinkValue designed to display a numeric value that can indicate growth or shrinkage.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: ``,
        component: <Basic />,
    },
    {
        mdName: 'Icon',
        mdPath: mdPath,
        title: 'Icon',
        desc: ``,
        component: <Icon />,
    },
    {
        mdName: 'CustomClass',
        mdPath: mdPath,
        title: 'CustomClass',
        desc: ``,
        component: <CustomClass />,
    },
]

const demoApi = [
    {
        component: 'GrowShrinkValue',
        api: [
            {
                propName: 'showIcon',
                type: `<code>boolean</code>`,
                default: `<code>true</code>`,
                desc: 'Whether to display up or down icon',
            },
            {
                propName: 'prefix',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Render a prefix content before the value',
            },
            {
                propName: 'suffix',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Render a suffix content next to the value',
            },
            {
                propName: 'positiveIcon',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `<code>'^'</code>`,
                desc: 'An icon or content to display when the <code>value</code> is positive',
            },
            {
                propName: 'negativeIcon',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `<code>'v'</code>`,
                desc: 'An icon or content to display when the <code>value</code> is negative',
            },
            {
                propName: 'positiveClass',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Custom CSS class to apply when the <code>value</code> is positive.',
            },
            {
                propName: 'negativeClass',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Custom CSS class to apply when the <code>value</code> is negative.',
            },
            {
                propName: 'value',
                type: `<code>number</code>`,
                default: `<code>0</code>`,
                desc: 'The numeric value to be displayed.',
            },
        ],
    },
]

const GrowShrinkValueDoc = () => {
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

export default GrowShrinkValueDoc
