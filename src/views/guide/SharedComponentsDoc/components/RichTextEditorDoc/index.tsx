import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import CustomToolbar from './CustomToolbar'
import CustomConfig from './CustomConfig'
import WithForm from './WithForm'

const mdPath = 'RichTextEditorDoc'

const demoHeader = {
    title: 'RichTextEditor',
    desc: ' <code>RichTextEditor</code> component is a customizable rich text editor utilized with Tiptap editor framework. It comes with a predefined toolbar that includes common formatting options like bold, italic, lists, and more.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Basic usage.`,
        component: <Basic />,
    },
    {
        mdName: 'CustomToolbar',
        mdPath: mdPath,
        title: 'Custom toolbar',
        desc: `You can customize the editor toolbar with <code>customToolBar</code> prop`,
        component: <CustomToolbar />,
    },
    {
        mdName: 'CustomConfig',
        mdPath: mdPath,
        title: 'Custom config',
        desc: `You can customize the entire configuration with <code>customToolBar</code> prop. Note: Documentation & Text extension is required if not using StarterKit as extension.`,
        component: <CustomConfig />,
    },
    {
        mdName: 'WithForm',
        mdPath: mdPath,
        title: 'With form',
        desc: `Example with form`,
        component: <WithForm />,
    },
]

const tiptapUsage = (
    <div className="demo-api-table mb-12">
        <h4 className="mb-5">Dependencies</h4>
        <h6 id="react-syntax-highlighter-api" className="mb-3">
            tiptap
        </h6>
        <p>
            For futher usage of tiptap, you could refer the
            <a
                className="underline text-primary"
                href="https://tiptap.dev/docss"
                target="_blank"
                rel="noreferrer"
            >
                official docs
            </a>{' '}
            for the complete api list.{' '}
        </p>
    </div>
)

const demoApi = [
    {
        component: 'RichTextEditor',
        api: [
            {
                propName: 'content',
                type: '<code>string</code>',
                default: '-',
                desc: 'The initial content of the editor. This can be an HTML string or plain text.',
            },
            {
                propName: 'invalid',
                type: '<code>boolean</code>',
                default: '-',
                desc: 'Applies styles to indicate the editor content is invalid, typically used for form validation.',
            },
            {
                propName: 'customToolBar',
                type: `<code>(editor: Editor, components: {
                    ToolButtonBold: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonItalic: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonStrike: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonCode: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonBlockquote:  ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonHeading: ({ editor }: BaseToolButtonProps & { headingLevel?: HeadingLevel[] }) => JSX.Element,
                    ToolButtonBulletList: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonOrderedList: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonCodeBlock:  ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonHorizontalRule: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonParagraph: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonUndo: ({ editor }: BaseToolButtonProps) => JSX.Element,
                    ToolButtonRedo: ({ editor }: BaseToolButtonProps) => JSX.Element,
                }) => ReactNode</code>`,
                default: '-',
                desc: 'A function to customize the toolbar by providing your own buttons. It receives the current `editor` instance and an object containing the default toolbar components.',
            },
            {
                propName: 'onChange',
                type: '<code>(content: {text: string, html: string, json: JSONContent}) => void</code>',
                default: '-',
                desc: 'Callback function that is triggered whenever the content of the editor changes. It provides the updated content in three formats: plain text, HTML, and JSON.',
            },
            {
                propName: 'editorContentClass',
                type: '<code>string</code>',
                default: '-',
                desc: "Additional CSS classes to apply to the editor's content area.",
            },
            {
                propName: 'customEditor',
                type: '<code>Editor | null</code>',
                default: '-',
                desc: 'A custom Tiptap `Editor` instance. If provided, this instance will be used instead of creating a new one.',
            },
        ],
    },
]

const RichTextEditorDoc = () => {
    return (
        <DemoLayout
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            mdPrefixPath="shared"
            api={demoApi}
            extra={tiptapUsage}
        />
    )
}

export default RichTextEditorDoc
