import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import Length from './Length'

const mdPath = 'NumericInputDoc'

const demoHeader = {
    title: 'OtpInput',
    desc: 'The OtpInput component provides an easy way to implement input fields for multi-digit one-time passwords (OTP) or verification codes. It is designed to handle the input of sequential digits, enabling seamless user experiences for forms requiring OTP input.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Basic usage of OtpInput`,
        component: <Basic />,
    },
    {
        mdName: 'Length',
        mdPath: mdPath,
        title: 'Length',
        desc: `OtpInput can adapt to different OTP lengths using the <code>length</code> prop`,
        component: <Length />,
    },
]

const demoApi = [
    {
        component: 'FormNumericInput',
        api: [
            {
                propName: 'autoFocus',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether the Input is focused automatically',
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
                propName: 'inputClass',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Class for all input fields',
            },
            {
                propName: 'length',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'Length of input field',
            },
            {
                propName: 'onChange',
                type: `<code>(value: string) => void</code>`,
                default: `-`,
                desc: 'Callback when Input value changed',
            },
            {
                propName: 'placeholder',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Placeholder text for all input fields',
            },
            {
                propName: 'value',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Controlled Input value',
            },
        ],
    },
]

const OtpInputDoc = () => {
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

export default OtpInputDoc
