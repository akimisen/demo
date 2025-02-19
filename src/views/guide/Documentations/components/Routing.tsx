/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import DemoComponentApi from '@/components/docs/DemoComponentApi'

const RouteAndNav = () => {
    return (
        <>
            <p>
                Ecme uses{' '}
                <a
                    href="https://reactrouter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Router
                </a>{' '}
                as its core routing system. In this guide, you'll learn how to
                create new routes and understand how existing routes work.
            </p>
            <div className="mt-6" id="overview">
                <h5>Overview</h5>
                <p className="my-1">
                    The router configuration for the template can be found in{' '}
                    <code>src/configs/routes.config/index.ts</code>. There are
                    two main groups of routes:
                </p>
                <SyntaxHighlighter language="js">{`export const publicRoutes = [
    ...
]

export const protectedRoutes = [
    ...
]`}</SyntaxHighlighter>
                <ul>
                    <li>
                        <strong>publicRoutes:</strong>
                        <p className="mt-1">
                            This group includes all routes that are accessible
                            to all users.
                        </p>
                    </li>
                    <li>
                        <strong>protectedRoutes:</strong>
                        <p className="mt-1">
                            This group contains routes that require
                            authentication to access.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="mt-10" id="addingNewRoute">
                <h5>Adding a New Route</h5>
                <p className="mt-1">
                    To add a new route, simply include the following code in the
                    appropriate route group, depending on the access level you
                    want to assign:
                </p>
                <SyntaxHighlighter language="js">{`export const protectedRoutes = [
    {
        key: 'a-unique-id-for-this-view',
        path: 'my-new-view-path',
        component: lazy(() => import('@/views/MyNewComponent')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless'
        }
    },			
]`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="authority">
                <h5>Authority</h5>
                <p className="mt-1">
                    Ecme routes support simple role-based access control. You
                    can specify the roles that have access to a route by using
                    the <code>authority</code> field. For example, the following
                    route is only accessible to users with the{' '}
                    <code>'admin'</code> or <code>'user'</code> roles. If the{' '}
                    <code>authority</code> field is left as an empty array, the
                    route will be open to all roles.
                </p>
                <SyntaxHighlighter language="js">{`export const protectedRoutes = [
    {
        ...
        authority: ['admin', 'user'],
    },			
]`}</SyntaxHighlighter>
                <p>
                    The default <code>AuthorityGuard</code> checks the current
                    user's role from the Zustand state (
                    <code>auth.user.authority</code>). You can use this as a
                    base to extend or customize your access control.
                </p>
            </div>
            <div className="mt-10" id="meta">
                <h5>Meta</h5>
                <p className="mt-1">
                    The <code>meta</code> field allows you to pass additional
                    information to the <code>PageContainer</code> or the view
                    component associated with the route.
                </p>
                <SyntaxHighlighter language="js">{`export const protectedRoutes = [
    {
        ...
        meta: {
            pageContainerType: 'gutter',
            header: {
                title: 'My tittle',
                description: 'Some description'
                contained: false,
                extraHeader: lazy(() => import('/SomeComponent')),
            },
            footer: false,
            layout: 'blank',
        }
    },			
]`}</SyntaxHighlighter>
                <p>
                    The view component will be able to access all the{' '}
                    <code>meta</code> data specified.
                </p>
                <DemoComponentApi
                    hideApiTitle
                    keyText="properties"
                    api={[
                        {
                            api: [
                                {
                                    propName: 'pageContainerType',
                                    type: `<code>'default'</code>  | <code>'gutterless'</code> | <code>'contained'</code>`,
                                    default: `<code>'default'</code>`,
                                    desc: 'Defines the type of the view container',
                                },
                                {
                                    propName: 'pageBackgroundType',
                                    type: `<code>'default'</code>  | <code>'plain'</code>`,
                                    default: '-',
                                    desc: 'Define the type of the page background',
                                },
                                {
                                    propName: 'header',
                                    type: `<code>{
                                                title?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
                                                description?: string | ReactNode
                                                contained?: boolean
                                                extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
                                            }</code>`,
                                    default: '-',
                                    desc: 'Specifies the page header & further configuration',
                                },
                                {
                                    propName: 'footer',
                                    type: `<code>boolean</code>`,
                                    default: `<code>true</code>`,
                                    desc: 'Determines whether to display the footer',
                                },
                                {
                                    propName: 'layout',
                                    type: `<code>'blank'</code>  | <code>'collapsibleSide'</code> | <code>'stackedSide'</code> | <code>'topBarClassic'</code> | <code>'framelessSide'</code> | <code>'contentOverlay'</code>`,
                                    default: `-`,
                                    desc: 'Overrides the current layout for this page',
                                },
                            ],
                        },
                    ]}
                />
            </div>
        </>
    )
}

export default RouteAndNav
