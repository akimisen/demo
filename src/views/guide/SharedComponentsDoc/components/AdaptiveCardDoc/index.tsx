import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'

const mdPath = 'AdaptiveCardDoc'

const demoHeader = {
    title: 'AdaptableCard',
    desc: 'A card component that can adapt on different layout & background.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: ``,
        component: <Basic />,
    },
]

const demoApi = [
    {
        component: 'AdaptableCard',
        api: [
            {
                propName: 'header',
                type: `<code>{ content?: string | ReactNode, className?: string, bordered?: boolean, extra?: string | ReactNode }</code>`,
                default: `-`,
                desc: 'Card header config',
            },
            {
                propName: 'footer',
                type: `<code>{ content?: string | ReactNode, className?: string, bordered?: boolean }</code>`,
                default: `-`,
                desc: 'Card footer config',
            },
            {
                propName: 'bordered',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Display Card with border (without shadow)',
            },
            {
                propName: 'clickable',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Make cursor become pointer upon hover',
            },
            {
                propName: 'bodyClass',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Apply class to card body',
            },
            {
                propName: 'onClick',
                type: `<code>(e: MouseEvent) => void</code>`,
                default: `<code>-</code>`,
                desc: 'Callback when Card is clicked',
            },
        ],
    },
]

const AdaptableCardDoc = () => {
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

export default AdaptableCardDoc
