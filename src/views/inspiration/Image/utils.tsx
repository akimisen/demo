import {
    LuSquare,
    LuRectangleHorizontal,
    LuRectangleVertical,
} from 'react-icons/lu'
import { TbRectangle, TbBan } from 'react-icons/tb'

export const aspectRatioOptions = [
    {
        label: 'Lanscape (4:3)',
        value: 'lanscape',
        icon: <TbRectangle />,
        isIcon: true,
    },
    {
        label: 'Portrait (9:16)',
        value: 'portrait',
        icon: <LuRectangleVertical />,
        isIcon: true,
    },
    {
        label: 'Square (1:1)',
        value: 'square',
        icon: <LuSquare />,
        isIcon: true,
    },
    {
        label: 'Widescreen (16:9)',
        value: 'widescreen',
        icon: <LuRectangleHorizontal />,
        isIcon: true,
    },
]

export const styleOptions = [
    { label: 'No style', value: 'noStyle', icon: <TbBan />, isIcon: true },
    { label: '3D', value: 'd3', image: '/img/thumbs/styles/3d.jpg' },
    { label: 'Anime', value: 'anime', image: '/img/thumbs/styles/anime.jpg' },
    {
        label: 'Digital Art',
        value: 'digitalArt',
        image: '/img/thumbs/styles/digital-art.jpg',
    },
    {
        label: 'Fantasy',
        value: 'fantasy',
        image: '/img/thumbs/styles/fantasy.jpg',
    },
    {
        label: 'Futuristic',
        value: 'futuristic',
        image: '/img/thumbs/styles/futuristic.jpg',
    },
    {
        label: 'Geometric',
        value: 'geometric',
        image: '/img/thumbs/styles/geometric.jpg',
    },
    {
        label: 'Minimalist',
        value: 'minimalist',
        image: '/img/thumbs/styles/minimalist.jpg',
    },
    {
        label: 'Painting',
        value: 'painting',
        image: '/img/thumbs/styles/painting.jpg',
    },
    {
        label: 'Pencil Drawing',
        value: 'pencilDrawing',
        image: '/img/thumbs/styles/pencil-drawing.jpg',
    },
    { label: 'Pixel', value: 'pixel', image: '/img/thumbs/styles/pixel.jpg' },
]

export const toneOptions = [
    { label: 'No tone', value: 'noTone', icon: <TbBan />, isIcon: true },
    {
        label: 'Black & White',
        value: 'blackAndWhite',
        image: '/img/thumbs/tone/black-and-white.jpg',
    },
    {
        label: 'Cool Tone',
        value: 'coolTone',
        image: '/img/thumbs/tone/cool-tone.jpg',
    },
    { label: 'Golden', value: 'golden', image: '/img/thumbs/tone/golden.jpg' },
    {
        label: 'Muted Color',
        value: 'mutedColor',
        image: '/img/thumbs/tone/muted-color.jpg',
    },
    { label: 'Pastel', value: 'pastel', image: '/img/thumbs/tone/pastel.jpg' },
    {
        label: 'Warm Tone',
        value: 'warmTone',
        image: '/img/thumbs/tone/warm-tone.jpg',
    },
]

export const lightingOptions = [
    {
        label: 'No lighting',
        value: 'noLighting',
        icon: <TbBan />,
        isIcon: true,
    },
    {
        label: 'Back Lighting',
        value: 'backLighting',
        image: '/img/thumbs/lighting/back-lighting.jpg',
    },
    {
        label: 'dramatic',
        value: 'dramatic',
        image: '/img/thumbs/lighting/dramatic.jpg',
    },
    {
        label: 'Golden Hour',
        value: 'goldenHour',
        image: '/img/thumbs/lighting/golden-hour.jpg',
    },
    { label: 'Harsh', value: 'harsh', image: '/img/thumbs/lighting/harsh.jpg' },
    {
        label: 'Long Expose',
        value: 'longExpose',
        image: '/img/thumbs/lighting/long-expose.jpg',
    },
    {
        label: 'Low Light',
        value: 'lowLight',
        image: '/img/thumbs/lighting/low-light.jpg',
    },
    {
        label: 'Multi Expose',
        value: 'multiExpose',
        image: '/img/thumbs/lighting/multi-expose.jpg',
    },
    {
        label: 'Studio',
        value: 'studio',
        image: '/img/thumbs/lighting/studio.jpg',
    },
    {
        label: 'Sunreal',
        value: 'sunreal',
        image: '/img/thumbs/lighting/sunreal.jpg',
    },
]

export const cameraOptions = [
    { label: 'No camera', value: 'noCamera', icon: <TbBan />, isIcon: true },
    {
        label: 'Close Up',
        value: 'closeUp',
        image: '/img/thumbs/camera/close-up.jpg',
    },
    {
        label: 'Detailed',
        value: 'detailed',
        image: '/img/thumbs/camera/detailed.jpg',
    },
    {
        label: 'Landscape',
        value: 'landscape',
        image: '/img/thumbs/camera/landscape.jpg',
    },
    {
        label: 'Shot From Above',
        value: 'shotFromAbove',
        image: '/img/thumbs/camera/shot-from-above.jpg',
    },
    {
        label: 'Shot From Below',
        value: 'shotFromBelow',
        image: '/img/thumbs/camera/shot-from-below.jpg',
    },
    {
        label: 'Through Window',
        value: 'throughWindow',
        image: '/img/thumbs/camera/through-window.jpg',
    },
    {
        label: 'Wide Angle',
        value: 'wideAngle',
        image: '/img/thumbs/camera/wide-angle.jpg',
    },
]
