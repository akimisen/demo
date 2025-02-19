/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const Installation = () => {
    return (
        <>
            <h6>Prerequisites</h6>
            <p>
                Before getting started with Ecme, ensure your development
                environment has the following tools installed:
            </p>
            <div className="mt-6">
                <ul>
                    <li>
                        <a
                            href="https://nodejs.org"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Node.js
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.npmjs.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            npm
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <h6>Installing Ecme</h6>
                <p>
                    After extracting the downloaded .zip file, you'll find three
                    folders:
                </p>
                <ul>
                    <li>
                        <strong>demo</strong>
                        <p className="mt-1">
                            This folder contains the full demo of the project,
                            including everything you see in the live preview.
                            It's meant for reference only and{' '}
                            <strong className="heading-text">
                                <em>NOT</em>
                            </strong>{' '}
                            recommended for development.
                        </p>
                    </li>
                    <li>
                        <strong>starter</strong>
                        <p className="mt-1">
                            The starter pack provides the basic setup for the
                            template. This is where you should begin your
                            development, creating pages and adding your code. We
                            recommend copying this folder into your workspace.
                        </p>
                    </li>
                    <li>
                        <strong>documentation</strong>
                        <p className="mt-1">
                            This folder includes an index.html file that
                            redirects to the online documentation.
                        </p>
                    </li>
                </ul>
                <p>
                    Once you've chosen your desired package, navigate to the
                    project's root directory (where <code>package.json</code> is
                    located) and run the following command in your console:
                </p>
                <SyntaxHighlighter>npm install</SyntaxHighlighter>
                <p>
                    This will install all necessary dependencies in the
                    node_modules directory, allowing you to start development.
                </p>
            </div>
        </>
    )
}

export default Installation
