import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import DemoComponentApi from '@/components/docs/DemoComponentApi'

const OverallThemeConfig = () => {
    return (
        <>
            <p>
                The file <code>src/configs/theme.config.ts</code> contains the
                default theme settings for the template. These configurations
                are predefined but can be customized to suit your needs. Below
                is the default configuration:
            </p>
            <p>
                If you realize that the theme did not change after setting a new
                value to the configuration, you could consider to clear the{' '}
                <code>localStorage</code>, if you If you have no requiremnent to
                memorize users preferred appearance in the app, you can remove
                the persist method from the store. Refer to State Persistence
                section below. If the theme doesn&apos;t update after changing
                its configuration, try clearing the <code>localStorage</code>.
                If you don&apos;t need to remember the user&apos;s preferred
                appearance in the app, you can remove the <code>persist</code>{' '}
                method from the store. For more details, see the{' '}
                <strong>&quot;State Persistence&quot;</strong> section below.
            </p>
            <SyntaxHighlighter language="ts">{`import { THEME_ENUM } from '@/constants/theme.constant'
import {
    Direction,
    Mode,
    ControlSize,
    LayoutType,
} from '@/@types/theme'

export type ThemeConfig = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    controlSize: ControlSize
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

export const themeConfig: ThemeConfig = {
    themeSchema: '',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}`}</SyntaxHighlighter>
            <div className="mt-10" id="properties">
                <h5>Configuration Properties</h5>
                <DemoComponentApi
                    hideApiTitle
                    api={[
                        {
                            api: [
                                {
                                    propName: 'themeSchema',
                                    type: `<code>string</code>`,
                                    default: `<code>''</code>`,
                                    desc: 'Sets the color scheme of the template. you can leave this field empty if you are having dynamic theme in your app',
                                },
                                {
                                    propName: 'direction',
                                    type: `<code>'ltr'</code> | <code>'rtl'</code>`,
                                    default: `<code>'ltr'</code>`,
                                    desc: 'Defines the text direction for the template.',
                                },
                                {
                                    propName: 'mode',
                                    type: `<code>'light'</code> | <code>'dark'</code>`,
                                    default: `<code>'light'</code>`,
                                    desc: 'Toggles between Light and Dark mode.',
                                },
                                {
                                    propName: 'panelExpand',
                                    type: `<code>boolean</code>`,
                                    default: `<code>false</code>`,
                                    desc: 'Determines whether the side panel is expanded by default.',
                                },
                                {
                                    propName: 'controlSize',
                                    type: `<code>'xs'</code> | <code>'sm'</code> | <code>'md'</code> | <code>'lg'</code>`,
                                    default: `<code>'md'</code>`,
                                    desc: 'Sets the initial size of control inputs.',
                                },
                                {
                                    propName: 'layout.type',
                                    type: `<code>'blank'</code>  | <code>'collapsibleSide'</code> | <code>'stackedSide'</code> | <code>'topBarClassic'</code> | <code>'framelessSide'</code> | <code>'contentOverlay'</code>`,
                                    default: `<code>'modern'</code>`,
                                    desc: 'Defines the overall layout style of the application.',
                                },
                                {
                                    propName: 'layout.sideNavCollapse',
                                    type: `<code>boolean</code>`,
                                    default: `<code>false</code>`,
                                    desc: `Specifies whether the side navigation is collapsed. This option is only applicable when <code>type</code> is set to <code>'collapsibleSide'</code> or <code>'framelessSide'</code>.`,
                                },
                            ],
                        },
                    ]}
                />
            </div>
            <div className="mt-10" id="persistence">
                <h5>State Persistence</h5>
                <p>
                    The <code>themeConfig</code> state is persisted by default,
                    meaning your settings will be remembered by the browser all
                    along. If you prefer not to persist the theme state for the
                    users, you can modify <code>src/store/themeStore.ts</code>{' '}
                    by removing the <code>persist</code> method from the Zustand
                    store.
                </p>
                <p>
                    The persisted state is also stored in the browser&apos;s{' '}
                    <code>localStorage</code>. If you encounter issues where
                    theme changes are not reflected, you may want to clear the{' '}
                    <code>localStorage</code> key named{' '}
                    <code>&apos;theme&apos;</code>. You can do this by running{' '}
                    <code>localStorage.removeItem(&apos;theme&apos;)</code> in
                    the browser console.
                </p>
            </div>
        </>
    )
}

export default OverallThemeConfig
