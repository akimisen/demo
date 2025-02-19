import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const MockApi = () => {
    return (
        <>
            <p>
                A mock API is a tool that simulates the behavior of a real API,
                providing data responses as if they were from an actual server.
                This can be extremely useful in situations where the real API is
                not yet fully developed, or when you need to simulate API calls
                for unit testing.
            </p>
            <p>
                Ecme utilizes the{' '}
                <a
                    href="https://github.com/ctimmerm/axios-mock-adapter"
                    target="_blank"
                    rel="noreferrer"
                >
                    axios-mock-adapter
                </a>{' '}
                library to handle API mocking. All API interactions in our demo
                operate through this adapter.
            </p>
            <div className="mt-10" id="disableMockApi">
                <h5>Disabling Mock API</h5>
                <p className="mt-1">
                    By default, the mock API is enabled in the{' '}
                    <strong>starter-kit</strong>. If you want to disable it,
                    simply set the <code>enableMock</code> field to{' '}
                    <code>false</code> in <code>src/configs/app.config.ts</code>
                    .
                </p>
                <SyntaxHighlighter language="ts">{`const appConfig = {
    ...,
    enableMock: false
}`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="usingMockApi">
                <h5>Using the Mock API</h5>
                <p className="mt-1">
                    If you intend to use the mock API, follow these steps to
                    create fake database data and APIs:
                </p>
                <ol>
                    <li>
                        <strong>Setup</strong>
                        <p className="mt-1">
                            Go to <code>src/mock/MockAdapter.ts</code>. This
                            file contains the basic configuration for the mock
                            API.
                        </p>
                        <SyntaxHighlighter language="ts">{`import MockAdapter from 'axios-mock-adapter'
import AxiosBase from '@/services/axios/AxiosBase'

export const mock = new MockAdapter(AxiosBase)`}</SyntaxHighlighter>
                    </li>
                    <li>
                        <strong>Create a Mock API</strong>
                        <p className="mt-1">
                            To create a mock API, add it to{' '}
                            <code>src/mock/MockAdapter.ts</code>. For example,
                            you can create <code>userFakeApi.ts</code>. Remember
                            to import the mock instance from{' '}
                            <code>MockAdapter.ts</code> to create a route.
                        </p>
                        <SyntaxHighlighter language="ts">{`import { mock } from '../MockAdapter'

mock.onGet('/api/users').reply(() => {
	return [200, [
        {
            id: '1',
            name: 'Carolyn Perkins',
        },
        {
            id: '2',
            name: 'Terrance Moreno',
        },
        {
            id: '3',
            name: 'Ron Vargas',
        },
    ]];
})`}</SyntaxHighlighter>
                    </li>
                    <li>
                        <p>
                            Next, import your <code>userFakeApi.ts</code> file
                            into the mock entry file{' '}
                            <code>src/mock/index.ts</code>.
                        </p>
                        <SyntaxHighlighter language="ts">{`import { mock } from './MockAdapter'
import './fakeApi/userFakeApi'
...

mock.onAny().passThrough();`}</SyntaxHighlighter>
                    </li>
                </ol>
            </div>
            <div>
                <p>
                    Now, you can make requests to this mock API and receive the
                    static data you set up as the response.
                </p>
                <SyntaxHighlighter language="ts">{`// service
import ApiService from "./ApiService"

type GetUserResponse = {
    id: string
    name: string
    email: string
}[]

export async function apiGetUsers () {
    return ApiService.fetchData<GetUserResponse>({
        url: '/api/getUsers',
        method: 'get'
    })
}`}</SyntaxHighlighter>
                <SyntaxHighlighter language="ts">{`// component
import { useEffect } from 'react'
import { apiGetUsers } from './YourService.ts'

const YourComponent = () => {

    const fetchData = async () => {
        try {
            const resp = await apiGetUsers()
            console.log(resp.data)
        } catch (errors) {
            // handle errors
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        // your component JSX
    )
}`}</SyntaxHighlighter>
            </div>
            <p>
                For more information on using <code>axios-mock-adapter</code>,
                visit the{' '}
                <a
                    href="https://github.com/ctimmerm/axios-mock-adapter"
                    target="_blank"
                    rel="noreferrer"
                >
                    official GitHub repository
                </a>
                .
            </p>
        </>
    )
}

export default MockApi
