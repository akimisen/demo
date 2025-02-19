import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import Alert from '@/components/ui/Alert'

const ApiIntegration = () => {
    return (
        <>
            <p>
                In this guide, you&apos;ll learn how to integrate your backend
                API with the template. We&apos;ll cover everything from
                configuring your environment to setting up a proxy, and creating
                service files for seamless API communication.
            </p>

            <div className="mt-10" id="turningOffMockApi">
                <h5 className="mb-4">Turning off mock api</h5>
                <Alert showIcon type="info" title="Important:">
                    Before you begin, make sure to turn off the mock API by
                    setting <code>enableMock</code> to <code>false</code> in{' '}
                    <code>src/configs/app.config.ts</code>. The template
                    defaults to mock API, so disabling this will allow your app
                    to connect to your actual backend endpoints.
                </Alert>
            </div>
            <div className="mt-10" id="proxying">
                <h5>Setting Up a Proxy</h5>
                <p className="mt-1">
                    If your backend API is hosted on a different server than
                    your frontend, you&apos;ll need to set up a proxy to avoid
                    issues with cross-origin requests. You can configure the
                    proxy either through the <code>package.json</code> file or
                    via <code>vite.config.ts</code> for more flexibility.
                </p>
                <ul>
                    <li>
                        <strong>Option 1: Manual Setup in Vite</strong>
                        <p className="mt-1">
                            For a more customized setup, configure the proxy in{' '}
                            <code>vite.config.ts</code>:
                        </p>
                        <SyntaxHighlighter language="ts">{`export default defineConfig({
    plugins: ...,
    server: {
        proxy: {
            '/api': {
                // Update the target URL with your backend server's URL
                target: 'http://yourDevDomain.com',
                changeOrigin: true,
                secure: false,
            }
        }
    }
})`}</SyntaxHighlighter>
                    </li>
                    <li>
                        <strong>Option 2: Using package.json</strong>
                        <p className="mt-1">
                            Add the following line to your{' '}
                            <code>package.json</code> file to quickly set up a
                            proxy:
                        </p>
                        <SyntaxHighlighter language="json">{`"proxy": "http://yourDevDomain.com"`}</SyntaxHighlighter>
                    </li>
                </ul>
            </div>
            <div className="mt-10" id="configureApiPrefix">
                <h5>Configuring the API Prefix</h5>
                <p>
                    You can define a prefix for your API endpoints in{' '}
                    <code>src/configs/app.config.ts</code> using the{' '}
                    <code>apiPrefix</code> property. This prefix will be
                    prepended to all API requests, allowing for a consistent and
                    manageable API structure.
                </p>
                <SyntaxHighlighter language="ts">{`const appConfig: AppConfig = {
    apiPrefix: '/api',
    // other configurations...
}`}</SyntaxHighlighter>
            </div>

            <div className="mt-10" id="integration">
                <h5>Step-by-Step integration</h5>
            </div>

            <p>Follow the steps below to make backend api linkage working.</p>
            <ol>
                <li>
                    <p>
                        Start by creating a new service file specific to your
                        feature or module. For instance, if you&apos;re working
                        on user management, create a file named{' '}
                        <code>UserManagementService.ts</code> in the{' '}
                        <code>services</code> directory.
                    </p>
                </li>
                <li>
                    <p>
                        Inside the service file, declare an asynchronous
                        function to handle the API request. This function should
                        utilize <code>ApiService.fetchData</code>, accepting two
                        generic types: <strong>Response</strong> and{' '}
                        <strong>Request</strong>, along with the Axios
                        configuration. Here&apos;s an example:
                    </p>
                    <SyntaxHighlighter language="ts">{`type MyApiResponse = {
    someResponseData: string
    someResponseData2: boolean
}

type MyApiRequest = {
    someRequestData: string
}

export async function myApi (data) {
    return ApiService.fetchData<MyApiResponse,MyApiRequest>({
        url: '/my-api-url',
        method: 'post',
        data
    })
}
...`}</SyntaxHighlighter>
                    <p>
                        or forwarding the type to generic from comsumer level:
                    </p>
                    <SyntaxHighlighter language="ts">{`import ApiService from "./ApiService"

export async function myApi<TResponse, TRequest>(data) {
    return ApiService.fetchData<TResponse, TRequest>({
        url: '/my-api-url',
        method: 'post',
        data
    })
}
...`}</SyntaxHighlighter>
                </li>
                <li>
                    <p>And now you can hook up this API in your component</p>
                    <SyntaxHighlighter language="tsx">{`
type MyApiResponse = {
    someResponseData: string
    someResponseData2: boolean
}

type MyApiRequest = {
    someRequestData: string
}

import { myApi } from './MyService.ts'

const MyComponent = props => {

    const fetchData = async () => {
        const reqeustParam = { key: 'value'}
        try {
            const resp = await myApi<MyApiResponse, MyApiRequest>(reqeustParam)
            if (resp.data) {
                ...do something
            }
        } catch (errors) {
            ...handle errors
        }
    }
    
    // You can
    useEffect(() => {
        fetchData()
    }, [])

    return (
    ...
)`}</SyntaxHighlighter>
                    <p>
                        <strong>Note</strong>: You can also use data-fetching
                        libraries like{' '}
                        <a
                            href="https://swr.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            SWR
                        </a>{' '}
                        or{' '}
                        <a
                            href="https://tanstack.com/query/latest"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TanStack Query
                        </a>{' '}
                        for a more declarative approach to data fetching. The
                        choice depends on your specific needs.
                    </p>
                </li>
            </ol>
        </>
    )
}

export default ApiIntegration
