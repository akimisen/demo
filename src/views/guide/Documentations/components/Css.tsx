/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const Css = () => {
    return (
        <>
            <p>
                While we primarily use Tailwind CSS, we also have additional
                custom styles written in standard CSS, located in the{' '}
                <code>src/assets/styles/*</code> directory. Because Tailwind
                depends on certain CSS processing features, we're using PostCSS
                as our preprocessor.
            </p>
            <p>Here's an overview of our styles folder structure:</p>
            <SyntaxHighlighter>
                {`├── styles                     
|   ├── components               # styles for base UI components
|   ├── docs                     # styles for documentation components
|   ├── tailwind                 # Tailwind entry & base styles
|   ├── template                 # styles for template components
|   ├── vendors                  # styles for third-party libraries
|   └── index.css                # main entry CSS
`}
            </SyntaxHighlighter>
            <p>
                Each folder inside the <code>styles</code> directory contains an{' '}
                <code>index.css</code> file that imports all other CSS files
                within the same folder. Eventually, all these{' '}
                <code>index.css</code> files are imported into the main entry
                CSS.
            </p>
            <div className="mt-10" id="writingCss">
                <h5>Custom CSS</h5>
                <p className="mt-1">
                    If Tailwind doesn't cover all your styling needs, you can
                    add custom CSS in this folder. We recommend using Tailwind's
                    functions and directives when adding custom styles, such as{' '}
                    <code>@apply</code>, <code>@layer</code>, and{' '}
                    <code>theme()</code>.
                </p>
                <p>
                    For more details on how to use these features, you can check
                    the{' '}
                    <a
                        href="https://tailwindcss.com/docs/functions-and-directives"
                        target="_blank"
                        rel="noreferrer"
                    >
                        official Tailwind documentation
                    </a>
                    .
                </p>
            </div>
        </>
    )
}

export default Css
