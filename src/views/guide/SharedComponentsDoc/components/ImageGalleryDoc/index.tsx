import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Example from './Example'

const mdPath = 'ImageGalleryDoc'

const demoHeader = {
    title: 'ImageGallery',
    desc: '<code>ImageGallery</code> component is a provides a simple and customizable image gallery with lightbox functionality. It is built on top of the <a class="text-primary" href="https://yet-another-react-lightbox.com/" target="_blank">yet-another-react-lightbox</a> library, allowing for easy integration of image galleries with enhanced viewing experiences.',
}

const demos = [
    {
        mdName: 'Example',
        mdPath: mdPath,
        title: 'Example',
        desc: `Example usage`,
        component: <Example />,
    },
]

const demoApi = [
    {
        component: 'ImageGallery',
        api: [
            {
                propName: 'open',
                type: 'boolean',
                default: '',
                desc: 'If <code>true</code>, the lightbox is open.',
            },
            {
                propName: 'close',
                type: '() => void',
                default: '',
                desc: 'A callback to close the lightbox.',
            },
            {
                propName: 'index',
                type: 'number',
                default: '0',
                desc: `Slide index.<br />
                The lightbox reads this property when it opens (in this case the <code>index</code> prop determines the starting slide
                index) and when either <code>slides</code> or <code>index</code> props change (in this case the <code>index</code> prop determines the
                current slide index). In most cases, you do not need to provide this prop at all, as the lightbox maintains
                its state internally. However, you may need to provide the <code>index</code> prop when you modify or completely
                replace the <code>slides</code> array. To keep track of the current slide index, you can use the <code>on.view</code> callback.`,
            },
            {
                propName: 'slides',
                type: 'Slide[]',
                default: '[]',
                desc: `Slides to display in the lightbox. See <a href="#Slide">Slide</a> for details.<br />
                Please note that updating the <code>slides</code> array (or just changing the array reference) forces the lightbox
                to update its state based on the current <code>slides</code> and <code>index</code> values. You can safely use a non-stable array
                reference (i.e., <code>slides={[{ ... }]}</code> or <code>slides={items.map((item) => ({ ... }))}</code>) as long as the component
                holding the lightbox does not re-render while the lightbox is open. However, if your component may
                re-render, be sure to either provide the <code>slides</code> prop as a stable array reference (i.e., <code>const</code> in static
                scope, or wrapped with <code>React.useState</code> or <code>React.useMemo</code>), or specify the current slide index in the
                <code>index</code> prop.`,
            },
            {
                propName: 'render',
                type: 'Render',
                default: '',
                desc: 'Custom render functions. See <a href="#Render">Render</a> for details.',
            },
            {
                propName: 'plugins',
                type: 'Plugin[]',
                default: '',
                desc: 'Enabled plugins.<br />Example: <span class="font-mono">plugins={[Fullscreen, Video]}</span>',
            },
            {
                propName: 'labels',
                type: 'object',
                default: '',
                desc: `Custom UI labels / translations.<br />
                Example: <span class="font-mono">labels={{ Next: "Next slide" }}</span>`,
            },
            {
                propName: 'toolbar',
                type: `{<br />
                &nbsp;&nbsp;buttons: (React.ReactNode | "close")[];<br />
                }`,
                default: `{ buttons: ["close"] }`,
                desc: 'Toolbar settings.<br /><code>buttons</code> - buttons to render in the toolbar',
            },
            {
                propName: 'carousel',
                type: `{
  finite?: boolean;
  preload?: number;
  padding?: string | number;
  spacing?: string | number;
  imageFit?: "contain" | "cover"
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>
}`,
                default: `{ finite: false, preload: 2, padding: "16px", spacing: "30%", imageFit: "contain" }`,
                desc: "Carousel settings.<br /><code>finite</code> - if <code>true</code>, the lightbox carousel doesn't wrap around<br /><code>preload</code> - the lightbox preloads (2 * preload + 1) slides<br /><code>padding</code> - padding around each slide<br /><code>spacing</code> - spacing between slides<br /><code>imageFit</code> - <code>object-fit</code> setting for image slides<br /><code>imageProps</code> - custom image attributes",
            },
            {
                propName: 'animation',
                type: `{<br />
                &nbsp;&nbsp;fade?: number;<br />
                &nbsp;&nbsp;swipe?: number;<br />
                &nbsp;&nbsp;navigation?: number;<br />
                &nbsp;&nbsp;easing?: {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;fade?: string;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;swipe?: string;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;navigation?: string;<br />
                &nbsp;&nbsp;}<br />
                }`,
                default: `{ fade: 250, swipe: 500, easing: { fade: "ease", swipe: "ease-out", navigation: "ease-in-out" } }`,
                desc: `Animation settings.<br /><code>fade</code> - fade-in / fade-out animation duration<br /><code>swipe</code> - swipe animation duration<br /><code>navigation</code> - override for <code>swipe</code> animation duration when using keyboard navigation or navigation buttons<br /><code>easing</code> - animation timing function settings<br /><code>fade</code> - fade-in / fade-out animation timing function<br /><code>swipe</code> - slide swipe animation timing function<br /><code>navigation</code> - slide navigation animation timing function (when using keyboard navigation or navigation buttons)`,
            },
            {
                propName: 'controller',
                type: `{<br />
                &nbsp;&nbsp;ref?: React.ForwardedRef&lt;ControllerRef&gt;;<br />
                &nbsp;&nbsp;focus?: boolean;<br />
                &nbsp;&nbsp;aria?: boolean;<br />
                &nbsp;&nbsp;touchAction?: "none" | "pan-y";<br />
                &nbsp;&nbsp;closeOnPullUp?: boolean;<br />
                &nbsp;&nbsp;closeOnPullDown?: boolean;<br />
                &nbsp;&nbsp;closeOnBackdropClick?: boolean;<br />
                }`,
                default: `{ ref: null, focus: true, aria: false, touchAction: "none" }`,
                desc: `Controller settings.<br /><code>ref</code> - lightbox controller ref<br /><code>focus</code> - deprecated, for internal use only<br /><code>aria</code> - if <code>true</code>, set ARIA attributes on the controller div<br /><code>touchAction</code> - deprecated, for internal use only<br /><code>closeOnPullUp</code> - if <code>true</code>, close the lightbox on pull-up gesture<br /><code>closeOnPullDown</code> - if <code>true</code>, close the lightbox on pull-down gesture<br /><code>closeOnBackdropClick</code> - if <code>true</code>, close the lightbox when the backdrop is clicked`,
            },
            {
                propName: 'portal',
                type: `{<br />
                &nbsp;&nbsp;root?: DocumentFragment | Element | null;<br />
                }`,
                default: '',
                desc: `Portal settings.<br /><code>root</code> - custom portal mount point. By default, the portal is mounted as a child of the document body.`,
            },
            {
                propName: 'noScroll',
                type: `{<br />
                &nbsp;&nbsp;disabled?: boolean;<br />
                }`,
                default: '',
                desc: `NoScroll module settings.<br />The NoScroll module is responsible for hiding the vertical scrollbar and preventing document <code>&lt;body/&gt;</code> from scrolling underneath the lightbox.<br /><code>disabled</code> - if <code>true</code>, the NoScroll module functionality is disabled`,
            },
            {
                propName: 'on',
                type: `{<br />
                &nbsp;&nbsp;view?: ({ index }: { index: number }) => void;<br />
                &nbsp;&nbsp;click?: ({ index }: { index: number }) => void;<br />
                &nbsp;&nbsp;entering?: () => void;<br />
                &nbsp;&nbsp;entered?: () => void;<br />
                &nbsp;&nbsp;exiting?: () => void;<br />
                &nbsp;&nbsp;exited?: () => void;<br />
                }`,
                default: '',
                desc: `Lifecycle callbacks.<br /><code>view</code> - a callback called when a slide becomes active<br /><code>click</code> - a callback called when a slide is clicked<br /><code>entering</code> - a callback called when the portal starts opening<br /><code>entered</code> - a callback called when the portal opens<br /><code>exiting</code> - a callback called when the portal starts closing<br /><code>exited</code> - a callback called when the portal closes`,
            },
        ],
    },
]

const ImageGalleryDoc = () => {
    return (
        <DemoLayout
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            api={demoApi}
            mdPrefixPath="shared"
        />
    )
}

export default ImageGalleryDoc
