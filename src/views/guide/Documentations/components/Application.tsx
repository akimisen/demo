import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import ReactHtmlParser from 'html-react-parser'
import Table from '@/components/ui/Table'

const { Tr, Th, Td, THead, TBody } = Table

const metadata = {
    api: [
        {
            propName: 'apiPrefix',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/api'</code>`,
            defaultStarter: `<code>'/api'</code>`,
            desc: 'The base path for all API requests.',
        },
        {
            propName: 'authenticatedEntryPath',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/app/sales/dashboard'</code>`,
            defaultStarter: `<code>'/home'</code>`,
            desc: 'The path users are redirected to after successful authentication.',
        },
        {
            propName: 'unAuthenticatedEntryPath',
            type: `<code>string</code>`,
            defaultDemo: `<code>'/sign-in'</code>`,
            defaultStarter: `<code>'/sign-in'</code>`,
            desc: 'The path users are redirected to if they are not authenticated.',
        },
        {
            propName: 'locale',
            type: `<code>string</code>`,
            defaultDemo: `<code>'en'</code>`,
            defaultStarter: `<code>'en'</code>`,
            desc: 'The default language/locale for the app.',
        },
        {
            propName: 'enableMock',
            type: `<code>boolean</code>`,
            defaultDemo: '<code>true</code>',
            defaultStarter: '<code>true</code>',
            desc: 'Enables or disables API requests being routed to a mock server.',
        },
        {
            propName: 'accessTokenPersistStrategy',
            type: `<code>'localStorage' | 'sessionStorage' | 'cookies' </code>`,
            defaultDemo: `<code>'cookies'</code>`,
            defaultStarter: `<code>'cookies'</code>`,
            desc: 'The choice of storage where auth token store.',
        },
        {
            propName: 'activeNavTranslation',
            type: `<code>boolean</code>`,
            defaultDemo: '<code>true</code>',
            defaultStarter: '<code>false</code>',
            desc: 'Enables or disables the tranlation fucntionality that implmented in navigation.',
        },
    ],
}

const Application = () => {
    return (
        <>
            <p>
                You can configure various static app settings in{' '}
                <code>src/configs/app.config.ts</code>. Below are the default
                configurations for both the demo and starter versions.
            </p>
            <span>
                <i>Demo Configuration</i>
            </span>
            <SyntaxHighlighter language="ts">{`const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/dashboards/ecommerce',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'localStorage',
    enableMock: true,
    activeNavTranslation: true
}`}</SyntaxHighlighter>
            <span>
                <i>Starter Configuration</i>
            </span>
            <SyntaxHighlighter language="ts">{`const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'cookies',
    enableMock: true,
    activeNavTranslation: false
}`}</SyntaxHighlighter>
            <h5 className="-mb-2 mt-6">Configuration Metadata</h5>
            <Table className="demo-api-table">
                <THead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Description</Th>
                        <Th>Type</Th>
                        <Th>Default (Demo)</Th>
                        <Th>Default (Starter)</Th>
                    </Tr>
                </THead>
                <TBody>
                    {metadata.api.map((item) => (
                        <Tr key={`row-${item.propName}`}>
                            <Td className="font-semibold">{item.propName}</Td>
                            <Td>{ReactHtmlParser(item.desc)}</Td>
                            <Td>{ReactHtmlParser(item.type)}</Td>
                            <Td>{ReactHtmlParser(item.defaultDemo)}</Td>
                            <Td>{ReactHtmlParser(item.defaultStarter)}</Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </>
    )
}

export default Application
