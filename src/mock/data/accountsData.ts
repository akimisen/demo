export const profileData = {
    id: '1',
    name: 'Angelina Gotelli',
    firstName: 'Angelina',
    lastName: 'Gotelli',
    email: 'carolyn_h@hotmail.com',
    img: '/img/avatars/thumb-1.jpg',
    location: 'New York, US',
    address: '123 Main St',
    postcode: '10001',
    city: 'New York',
    country: 'US',
    dialCode: '+1',
    birthday: '10/10/1992',
    phoneNumber: '+12-123-1234',
}

export const notificationSettingsData = {
    desktop: true,
    unreadMessageBadge: false,
    email: ['newsAndUpdate', 'tipsAndTutorial'],
    notifymeAbout: 'mentionsOnly',
}

export const billingSettingsData = {
    currentPlan: {
        plan: 'Business board basic',
        status: 'active',
        billingCycle: 'monthly',
        nextPaymentDate: 1739132800,
        amount: 59.9,
    },
    paymentMethods: [
        {
            cardId: '1',
            cardHolderName: 'Carolyn Perkins',
            cardType: 'VISA',
            expMonth: '12',
            expYear: '25',
            last4Number: '0392',
            primary: true,
        },
        {
            cardId: '2',
            cardHolderName: 'Carolyn Perkins',
            cardType: 'MASTER',
            expMonth: '06',
            expYear: '25',
            last4Number: '8461',
            primary: false,
        },
    ],
    transactionHistory: [
        {
            id: '#36223',
            item: 'Mock premium pack',
            status: 'pending',
            amount: 39.9,
            date: 1639132800,
        },
        {
            id: '#34283',
            item: 'Business board basic subscription',
            status: 'paid',
            amount: 59.9,
            date: 1636790880,
        },
        {
            id: '#32234',
            item: 'Business board basic subscription',
            status: 'paid',
            amount: 59.9,
            date: 1634090880,
        },
        {
            id: '#31354',
            item: 'Business board basic subscription',
            status: 'paid',
            amount: 59.9,
            date: 1631532800,
        },
    ],
}

export const intergrationSettingData = [
    {
        id: '1',
        name: 'Google Drive',
        desc: 'Upload your files to Google Drive',
        img: '/img/thumbs/google-drive.png',
        type: 'Cloud storage',
        active: true,
    },
    {
        id: '2',
        name: 'Slack',
        desc: 'Post to a Slack channel',
        img: '/img/thumbs/slack.png',
        type: 'Notifications and events',
        active: true,
    },
    {
        id: '3',
        name: 'Notion',
        desc: 'Retrieve notion note to your project',
        img: '/img/thumbs/notion.png',
        type: 'Content management',
        active: false,
    },
    {
        id: '4',
        name: 'Jira',
        desc: 'Create Jira issues',
        img: '/img/thumbs/jira.png',
        type: 'Project management',
        active: false,
    },
    {
        id: '5',
        name: 'Zendesk',
        desc: 'Exchange data with Zendesk',
        img: '/img/thumbs/zendesk.png',
        type: 'Customer service',
        active: false,
    },
    {
        id: '6',
        name: 'Dropbox',
        desc: 'Exchange data with Dropbox',
        img: '/img/thumbs/dropbox.png',
        type: 'Cloud storage',
        active: false,
    },
    {
        id: '7',
        name: 'Github',
        desc: 'Exchange files with a GitHub repository',
        img: '/img/thumbs/github.png',
        type: 'Code repositories',
        active: false,
    },
    {
        id: '8',
        name: 'Gitlab',
        desc: 'Exchange files with a Gitlab repository',
        type: 'Code repositories',
        img: '/img/thumbs/gitlab.png',
        active: false,
    },
    {
        id: '9',
        name: 'Figma',
        desc: 'Exchange screenshots with Figma',
        img: '/img/thumbs/figma.png',
        type: 'Design tools',
        active: false,
    },
    {
        id: '10',
        name: 'Adobe XD',
        desc: 'Exchange screenshots with Adobe XD',
        img: '/img/thumbs/adobe-xd.png',
        type: 'Design tools',
        active: false,
    },
    {
        id: '11',
        name: 'Sketch',
        desc: 'Exchange screenshots with Sketch',
        img: '/img/thumbs/sketch.png',
        type: 'Design tools',
        active: false,
    },
    {
        id: '12',
        name: 'Hubspot',
        desc: 'Exchange data with Hubspot',
        img: '/img/thumbs/hubspot.png',
        type: 'Content management',
        active: false,
    },
    {
        id: '13',
        name: 'Zapier',
        desc: 'Integrate with hundreds of services.',
        img: '/img/thumbs/zapier.png',
        type: 'Notifications and events',
        active: false,
    },
]

export const roleGroupsData = [
    {
        id: 'admin',
        name: 'Admin',
        description:
            'Full access to all functionalities and settings. Can manage users, roles, and configurations.',
        users: [],
        accessRight: {
            users: ['write', 'read', 'delete'],
            products: ['write', 'read', 'delete'],
            configurations: ['write', 'read', 'delete'],
            files: ['write', 'read', 'delete'],
            reports: ['write', 'read', 'delete'],
        },
    },
    {
        id: 'supervisor',
        name: 'Supervisor',
        description:
            'Oversees operations and users. Can view reports and has limited configuration access.',
        users: [],
        accessRight: {
            users: ['write', 'read'],
            products: ['write', 'read'],
            configurations: ['write', 'read'],
            files: ['write', 'read'],
            reports: ['read'],
        },
    },
    {
        id: 'support',
        name: 'Support',
        description:
            'Provides technical assistance. Can access user accounts and system reports for diagnostics.',
        users: [],
        accessRight: {
            users: ['read'],
            products: ['write', 'read'],
            configurations: ['read'],
            files: ['write', 'read'],
            reports: ['read'],
        },
    },
    {
        id: 'user',
        name: 'User',
        description:
            'Access to basic features necessary for tasks. Limited administrative privileges.',
        users: [],
        accessRight: {
            users: [],
            products: ['read'],
            configurations: [],
            files: ['write', 'read'],
            reports: [],
        },
    },
    {
        id: 'auditor',
        name: 'Auditor',
        description:
            'Reviews system activities. Can access reports, but cannot make changes.',
        users: [],
        accessRight: {
            users: ['read'],
            products: ['read'],
            configurations: [],
            files: ['read'],
            reports: ['read'],
        },
    },
    {
        id: 'guest',
        name: 'Guest',
        description:
            'Temporary access to limited features. Ideal for visitors or temporary users.',
        users: [],
        accessRight: {
            users: [],
            products: ['read'],
            configurations: [],
            files: [],
            reports: [],
        },
    },
]

export const pricingPlansData = {
    featuresModel: [
        {
            id: '',
            description: '',
        },
    ],
    plans: [
        {
            id: 'basic',
            name: 'Basic',
            description:
                'Ideal for individuals or small teams. Includes essential task and project management features.',
            price: {
                monthly: 59,
                annually: 500,
            },
            features: [
                'taskManagement',
                'managementTools',
                'reporting',
                'support',
            ],
            recommended: false,
        },
        {
            id: 'standard',
            name: 'Standard',
            description:
                'Perfect for growing teams. Offers advanced features for better productivity and collaboration.',
            price: {
                monthly: 79,
                annually: 700,
            },
            features: [
                'taskManagement',
                'managementTools',
                'reporting',
                'support',
                'fileSharing',
            ],
            recommended: false,
        },
        {
            id: 'pro',
            name: 'Pro',
            description:
                'Best for large teams. Includes premium features and dedicated support for optimal workflow.',
            price: {
                monthly: 129,
                annually: 1000,
            },
            features: [
                'taskManagement',
                'managementTools',
                'reporting',
                'support',
                'fileSharing',
                'advancedSecurity',
                'customIntegrations',
            ],
            recommended: true,
        },
    ],
}
