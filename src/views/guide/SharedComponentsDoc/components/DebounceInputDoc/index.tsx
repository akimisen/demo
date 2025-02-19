import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Example from './Example'

const mdPath = 'DebounceInputDoc'

const demoHeader = {
    title: 'DebounceInput',
    desc: 'DebounceInput is a omponent that wraps an input field with debounce functionality. This means that the input value will only be processed after a specified delay, reducing the frequency of expensive operations like API calls or state updates while typing.',
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
        component: 'Container',
        api: [
            {
                propName: 'wait ',
                type: `<code>number</code>`,
                default: `<code>500</code>`,
                desc: 'Time interval that will wait before invoking the <code>onChange</code> event after the user stops typing.',
            },
            {
                propName: 'disabled',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether the Input is disabled',
            },
            {
                propName: 'invalid',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether the Input is invalid status',
            },
            {
                propName: 'onBlur',
                type: `<code>(e: MouseEvent) => void</code>`,
                default: `-`,
                desc: 'Callback when Input remove focus',
            },
            {
                propName: 'onChange',
                type: `<code>(e: MouseEvent) => void</code>`,
                default: `-`,
                desc: 'Callback when Input value changed',
            },
            {
                propName: 'onFocus',
                type: `<code>(e: MouseEvent) => void</code>`,
                default: `-`,
                desc: 'Callback when Input is focused',
            },
            {
                propName: 'prefix',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Render a prefix content inside Input',
            },
            {
                propName: 'size',
                type: `<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>`,
                default: `<code>'md'</code>`,
                desc: 'Input size',
            },
            {
                propName: 'suffix',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Render a suffix content inside Input',
            },
            {
                propName: 'textArea',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether to turn Input into textarea field',
            },
            {
                propName: 'type',
                type: `<code>string</code>`,
                default: `<code>'text'</code>`,
                desc: 'Input type, refer to <a class="text-primary underline" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types" target="_blank">MDN</a> for available types',
            },
            {
                propName: 'unstyle',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Whether to remove input default style',
            },
        ],
    },
]

const DebounceInputDoc = () => {
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

export default DebounceInputDoc
