import Alert from '@/components/ui/Alert'
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const TailwindCss = () => {
    return (
        <>
            <p>
                Tailwind CSS is a utility-first CSS framework that provides
                predefined classes for building and designing UI directly within
                JSX. Ecme utilizes Tailwind as its core CSS framework, with most
                UI elements built entirely using its features. You can easily
                update the theme and base styles by modifying the{' '}
                <code>tailwind.config.cjs</code> file located in the root
                directory.
            </p>
            <div className="mt-10" id="tooling">
                <h5>Tooling</h5>
                <p className="mt-1">
                    If you use VS Code as your IDE, we recommend installing the{' '}
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Tailwind CSS IntelliSense
                    </a>{' '}
                    plugin. This plugin provides autocomplete, syntax
                    highlighting, and linting based on your Tailwind
                    configuration, which can significantly speed up your
                    development process.
                </p>
            </div>
            <div className="mt-10" id="note">
                <Alert showIcon type="info" title="Note">
                    Some of our UI components use semantic classes with the
                    Tailwind <code>@apply</code> directive. In certain cases,
                    applying Tailwind classes directly to these components may
                    not work as expected. You might need to use the{' '}
                    <code>!important</code> modifier to override the default
                    high specificity selectors.
                </Alert>
            </div>
            <p>
                To make any utility class important, simply add an{' '}
                <code>!</code> character at the beginning, e.g.:
            </p>
            <SyntaxHighlighter language="jsx">{`<Dropdown className="bg-red-500!" />`}</SyntaxHighlighter>
            <p>
                For more information on utility classes and Tailwind
                configuration, visit the official documentation:{' '}
                <a
                    href="https://tailwindcss.com/docs/utility-first"
                    rel="noreferrer"
                    target="_blank"
                >
                    https://tailwindcss.com/docs/utility-first
                </a>
            </p>
        </>
    )
}

export default TailwindCss
