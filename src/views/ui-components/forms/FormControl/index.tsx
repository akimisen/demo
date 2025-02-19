/* eslint-disable react/no-unescaped-entities */
import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import Layout from './Layout'
import Sizes from './Sizes'
import LabelExtra from './LabelExtra'
import FieldValidation from './FieldValidation'
import SchemaValidation from './SchemaValidation'
import DependentValidation from './DependentValidation'
import AsyncValidation from './AsyncValidation'
import DynamicForm from './DynamicForm'
import MixedFormControl from './MixedFormControl'

const mdPath = 'FormControl'

const demoHeader = {
    title: 'Form Control',
    desc: 'Form is used to collect & verify user input data. We use <a class="underline text-primary" href="https://react-hook-form.com/" target="_blank">react-hook-form</a> as our form control library, most of our form components were compatible with react-hook-form or others form libraries.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Sample usage of a simple form with validation.`,
        component: <Basic />,
    },
    {
        mdName: 'Layout',
        mdPath: mdPath,
        title: 'Form Layout',
        desc: `<code>Form</code> or<code>FormContainer</code> allow us to control all the <code>FormItem</code> <code>layout</code> via a single props.`,
        component: <Layout />,
    },
    {
        mdName: 'Sizes',
        mdPath: mdPath,
        title: 'Form Size',
        desc: `<code>Form</code> or<code>FormContainer</code> allow us to control <code>FormItem</code> <code>size</code> as well.`,
        component: <Sizes />,
    },
    {
        mdName: 'LabelExtra',
        mdPath: mdPath,
        title: 'Label Extra',
        desc: `We can add additional content to the form label with <code>FormItem</code> <code>extra</code> props.`,
        component: <LabelExtra />,
    },
    {
        mdName: 'FieldValidation',
        mdPath: mdPath,
        title: 'Field-level Validation',
        desc: `React-hook-form supports field-level validation. `,
        component: <FieldValidation />,
    },
    {
        mdName: 'SchemaValidation',
        mdPath: mdPath,
        title: 'Schema Validation',
        desc: `We can use <a class="underline target='_blank' href='https://zod.dev/'>Zod</a> for object schema validation.`,
        component: <SchemaValidation />,
    },
    {
        mdName: 'DependentValidation',
        mdPath: mdPath,
        title: 'Dependent Validation',
        desc: `You can use <a class="underline target='_blank' href='https://zod.dev/'>Zod</a> condition to perform field validation based on other form values. `,
        component: <DependentValidation />,
    },
    {
        mdName: 'AsyncValidation',
        mdPath: mdPath,
        title: 'Async Validation',
        desc: `You can also asynchronous validating a fields.`,
        component: <AsyncValidation />,
    },
    {
        mdName: 'DynamicForm',
        mdPath: mdPath,
        title: 'Dynamic Form',
        desc: `Example usage of dynamic form with <code>FieldArray</code>.`,
        component: <DynamicForm />,
    },
    {
        mdName: 'MixedFormControl',
        mdPath: mdPath,
        title: 'Mixed Form Control',
        desc: `Demostrate different kind of form related component witin a form.`,
        component: <MixedFormControl />,
    },
]

const demoApi = [
    {
        component: 'FormContainer',
        api: [
            {
                propName: 'layout',
                type: `<code>'horizontal'</code> | <code>'vertical'</code> | <code>'inline'</code>`,
                default: `<code>'vertical'</code>`,
                desc: 'Form layout',
            },
            {
                propName: 'size',
                type: `<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>`,
                default: `<code>'md'</code>`,
                desc: 'Form item size',
            },
            {
                propName: 'labelWidth',
                type: `<code>stirng</code>  | <code>number</code> `,
                default: `<code>100</code>`,
                desc: 'Form label width',
            },
        ],
    },
    {
        component: 'FormItem',
        api: [
            {
                propName: 'layout',
                type: `<code>'horizontal'</code> | <code>'vertical'</code> | <code>'inline'</code>`,
                default: `-`,
                desc: 'Form layout',
            },
            {
                propName: 'size',
                type: `<code>'lg'</code>  | <code>'md'</code> | <code>'sm'</code>`,
                default: `-`,
                desc: 'Form item size',
            },
            {
                propName: 'labelWidth',
                type: `<code>stirng</code>  | <code>number</code> `,
                default: `-`,
                desc: 'Form label width',
            },
            {
                propName: 'errorMessage',
                type: `<code>stirng</code>`,
                default: `-`,
                desc: 'Error Message that will display when <code>invalid</code> was triggered',
            },
            {
                propName: 'invalid',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Validate status of FormItem',
            },
            {
                propName: 'asterisk',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether to display asterisk beside label text',
            },
            {
                propName: 'extra',
                type: `<code>string</code> | <code>ReactNode</code>`,
                default: `-`,
                desc: 'Extra custom content beside label text',
            },
            {
                propName: 'htmlFor',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Set sub label htmlFor',
            },
        ],
    },
]

const formikNote = (
    <div>
        <h4>React Hook Form</h4>
        <p className="mt-2">
            <code>React Hook Form</code> library is a powerful and flexible
            solution for managing forms in React applications. It simplifies
            form handling by providing a set of hooks and utilities that
            streamline the process of capturing, validating, and submitting form
            data. With <code>useForm</code>, you can easily manage form state,
            handle input changes, perform validation, and submit forms with
            minimal boilerplate code, visit
            <a
                className="underline text-primary"
                href="https://react-hook-form.com/docs/useform"
                target="_blank"
                rel="noreferrer"
            >
                {' '}
                documentation{' '}
            </a>
            for more detail usage & examples.
        </p>
        <h4 className="mt-10">Zod</h4>
        <p className="mt-2">
            Zod is a TypeScript-first schema declaration and validation library.
            I'm using the term "schema" to broadly refer to any data type, from
            a simple string to a complex nested object. Zod is designed to be as
            developer-friendly as possible. The goal is to eliminate duplicative
            type declarations. With Zod, you declare a validator once and Zod
            will automatically infer the static TypeScript type. It's easy to
            compose simpler types into complex data structures. Visit the
            official
            <a
                className="underline text-primary"
                href="https://zod.dev/"
                target="_blank"
                rel="noreferrer"
            >
                {' '}
                documentation{' '}
            </a>
            for more detail usage & examples.
        </p>
    </div>
)

const FormControl = () => {
    return (
        <DemoLayout
            header={demoHeader}
            demos={demos}
            api={demoApi}
            note={formikNote}
        />
    )
}

export default FormControl
