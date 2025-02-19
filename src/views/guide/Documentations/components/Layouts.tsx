import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import DemoComponentApi from '@/components/docs/DemoComponentApi'
import type { CSSProperties } from 'react'

const Layouts = () => {
    return (
        <>
            <p>
                Ecme provide 6 types of post login layouts & 3 types of auth
                layouts, all layouts component can be found under directory{' '}
                <code>src/components/layouts/PostLoginLayout/components*</code>
                and all the components used within layouts can be found under{' '}
                <code>src/components/template/*</code>
            </p>
            <p>The following was the post login layouts that we had:</p>
            <ul>
                <li>
                    Collapsible side - <code>&apos;collapsibleSide&apos;</code>
                </li>
                <li>
                    Stacked side - <code>&apos;stackedSide&apos;</code>
                </li>
                <li>
                    Top bar classic - <code>&apos;topBarClassic&apos;</code>
                </li>
                <li>
                    Frameless side - <code>&apos;framelessSide&apos;</code>
                </li>
                <li>
                    Content overlay - <code>&apos;contentOverlay&apos;</code>
                </li>
                <li>
                    Blank - <code>&apos;blank&apos;</code>
                </li>
            </ul>
            <div className="mt-10" id="configuringLayout">
                <div className="mt-10" id="classic">
                    <h5>Configuring Layout</h5>
                    <p className="mt-1">
                        You can config the initial layout in{' '}
                        <code>src/configs/theme.config.ts</code> with the string
                        value above
                    </p>
                    <SyntaxHighlighter language="js">{`export const themeConfig = {
    ...
    layout: {
        type: 'framelessSide',
        ...
    },
}`}</SyntaxHighlighter>
                    <p>
                        Here&apos;s available values & key for configuring the{' '}
                        <code>layout</code> field
                    </p>
                    <DemoComponentApi
                        hideApiTitle
                        keyText="properties"
                        api={[
                            {
                                api: [
                                    {
                                        propName: 'type',
                                        type: `<code>'blank'</code>  | <code>'collapsibleSide'</code> | <code>'stackedSide'</code> | <code>'topBarClassic'</code> | <code>'framelessSide'</code> | <code>'contentOverlay'</code>`,
                                        default: `<code>'modern'</code>`,
                                        desc: 'Type of the application layout',
                                    },
                                    {
                                        propName: 'sideNavCollapse',
                                        type: `<code>boolean</code>`,
                                        default: `<code>false</code>`,
                                        desc: `Whether to collapse the side navigation (only only applicable when <code>type</code> is <code>'classic'</code> or <code>'modern'</code>)`,
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="mt-10" id="overridingLayouts">
                <h5>Overriding layouts</h5>
                <p className="mt-1">
                    In general, all route views will follow the settings of the
                    layout in <code>theme.config.ts</code>. However, if there
                    are some cases where you want to show a different layout in
                    a certiain route view, you can the layout value you wish
                    under the route <code>meta</code> to overide the current
                    layout as we mentioned in <strong>Routing</strong> guide.
                </p>
                <SyntaxHighlighter language="js">{`export const protectedRoutes = [
    {
        key: 'a-unique-id-for-this-view'
        path: 'path',
        component: React.lazy(() => import('views/Component')),
        authority: [],
        meta: {
            ...,
            layout: 'blank'
        }
    },			
]`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="authLayouts">
                <h5>Auth layouts</h5>
                <p>
                    Configuring auth layout is slightly different from the
                    above, just need to visit{' '}
                    <code>src/components/layouts/AuthLayout/AuthLayout.ts</code>{' '}
                    and replace the wrapper component. For example, switching{' '}
                    <code>side</code> to <code>simple</code>
                </p>
                <SyntaxHighlighter
                    language="js"
                    wrapLines={true}
                    showLineNumbers={true}
                    lineProps={(lineNumber) => {
                        const style: CSSProperties = { display: 'block' }
                        if ([9].includes(lineNumber)) {
                            style.backgroundColor = '#00ff002e'
                        } else if ([10].includes(lineNumber)) {
                            style.backgroundColor = '#ff00001f'
                        }
                        return { style }
                    }}
                >{`import { useMemo, lazy } from 'react'
import type { CommonProps } from '@/@types/common'
import type { LazyExoticComponent } from 'react'

type LayoutType = 'simple' | 'split' | 'side'

type Layouts = Record<LayoutType, LazyExoticComponent<<T extends CommonProps>(props: T) => JSX.Element>>

const currentLayoutType: LayoutType = 'side'
const currentLayoutType: LayoutType = 'simple'

const layouts: Layouts = {
    simple: lazy(() => import('./Simple')),
    split: lazy(() => import('./Split')),
    side: lazy(() => import('./Side')),
}

const AuthLayout = ({ children }: CommonProps) => {

    const Layout = useMemo(() => {
        return layouts[currentLayoutType]
    }, [])

    return (
        <Layout>{children}</Layout>
    )
}

export default AuthLayout`}</SyntaxHighlighter>
            </div>
        </>
    )
}

export default Layouts
