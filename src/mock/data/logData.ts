export const customerActivityLog = [
    {
        id: '1',
        date: 1746554397,
        events: [
            {
                type: 'TICKET-IN-PROGRESS',
                dateTime: 1746356928,
                description:
                    'Customer service team is working on support ticket #123456',
            },
        ],
    },
    {
        id: '2',
        date: 1746450000,
        events: [
            {
                type: 'TICKET-IN-PROGRESS',
                dateTime: 1746459376,
                description:
                    'Customer service team is working on support ticket #123456',
            },
            {
                type: 'SUPPORT-TICKET',
                dateTime: 1746458211,
                description: 'opened a support ticket #113467',
            },
        ],
    },
    {
        id: '3',
        date: 1746350000,
        events: [
            {
                dateTime: 1746580000,
                type: 'PAYMENT',
                description: 'successfully made a payment for the order',
            },
            {
                type: 'PRODUCT-UPDATE',
                dateTime: 1746578417,
                description: 'switch to Acme pro plan to anually',
            },
            {
                dateTime: 1746574027,
                type: 'PRODUCT-VIEW',
                description: 'visit subscription page',
            },
        ],
    },
]

export const logData = [
    {
        id: '1',
        date: 1646554397,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646580000,
                ticket: 'PD-979',
                status: 0,
                userName: 'Angelina Gotelli',
                userImg: '',
            },
            {
                type: 'COMMENT',
                dateTime: 1646578417,
                userName: 'Max Alexander',
                userImg: '/img/avatars/thumb-3.jpg',
                comment: `Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.`,
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646574027,
                userName: 'Eugene Stewart',
                tags: ['Live Issue', 'Backend'],
            },
            {
                type: 'ADD-FILES-TO-TICKET',
                dateTime: 1646569123,
                userName: 'Shannon Baker',
                files: ['document.csv'],
                ticket: 'PD-1092',
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646565473,
                userName: 'Roberta Horton',
                userImg: '/img/avatars/thumb-7.jpg',
                comment: `<strong>@Carolyn</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs. `,
            },
            {
                type: 'ASSIGN-TICKET',
                dateTime: 1646554397,
                userName: 'Lee Wheeler',
                assignee: 'Alvin Moreno',
                ticket: 'PD-1092',
            },
        ],
    },
    {
        id: '2',
        date: 1646450000,
        events: [
            {
                type: 'COMMENT',
                dateTime: 1646459376,
                userName: 'Jessica Wells',
                userImg: '/img/avatars/thumb-8.jpg',
                comment: `The trouble with programmers is that you can never tell what a programmer is doing until it's too late.`,
            },
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646458211,
                ticket: 'PD-977',
                status: 1,
                userName: 'Earl Miles',
                userImg: '/img/avatars/thumb-10.jpg',
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646457743,
                ticket: 'PD-977',
                userName: 'Arlene Pierce',
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646456743,
                userName: 'Terrance Moreno',
                tags: ['Bug'],
            },
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646455743,
                ticket: 'PD-902',
                status: 2,
                userName: 'Jackie Soto',
            },
        ],
    },
    {
        id: '3',
        date: 1646350000,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646356928,
                ticket: 'PD-915',
                status: 0,
                userName: 'Alvin Moreno',
                userImg: '/img/avatars/thumb-14.jpg',
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646356103,
                userName: 'Roberta Horton',
                userImg: '/img/avatars/thumb-7.jpg',
                comment: `<strong>@Carolyn</strong> First, solve the problem. Then, write the code.`,
            },
            {
                type: 'ADD-FILES-TO-TICKET',
                dateTime: 1646354001,
                userName: 'Shannon Baker',
                files: ['issue-1.jpg', 'issue-2.jpg'],
                ticket: 'PD-1011',
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646353299,
                ticket: 'PD-983',
                userName: 'Eugene Stewart',
            },
            {
                type: 'COMMENT',
                dateTime: 1646351233,
                userName: 'Shannon Baker',
                userImg: '/img/avatars/thumb-4.jpg',
                comment: `I've noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.`,
            },
        ],
    },
    {
        id: '4',
        date: 1646250000,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646259999,
                ticket: 'PD-911',
                status: 1,
                userName: 'Terrance Moreno',
                userImg: '/img/avatars/thumb-2.jpg',
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646258110,
                userName: 'Terrance Moreno',
                tags: ['Bug'],
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646258000,
                ticket: 'PD-911',
                userName: 'Terrance Moreno',
            },
            {
                type: 'COMMENT',
                dateTime: 1646253204,
                userName: 'Camila Simmmons',
                userImg: '/img/avatars/thumb-9.jpg',
                comment: `As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.`,
            },
        ],
    },
    {
        id: '5',
        date: 1646150000,
        events: [
            {
                type: 'CREATE-TICKET',
                dateTime: 1646159652,
                ticket: 'PD-908',
                userName: 'Jackie Soto',
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646159134,
                ticket: 'PD-907',
                userName: 'Jackie Soto',
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646253113,
                userName: 'Jackie Soto',
                tags: ['Bug'],
                ticket: 'PD-906',
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646252044,
                userName: 'Miriam Herrera',
                userImg: '/img/avatars/thumb-12.jpg',
                comment: `<strong>@Carolyn</strong> Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning. `,
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 164625157,
                ticket: 'PD-906',
                userName: 'Jackie Soto',
            },
        ],
    },
    {
        id: '6',
        date: 1646050000,
        events: [
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646051653,
                userName: 'Camila Simmmons',
                userImg: '/img/avatars/thumb-9.jpg',
                comment: `<strong>@Carolyn</strong> There are two ways to write error-free programs; only the third one works. `,
            },
            {
                type: 'ADD-FILES-TO-TICKET',
                dateTime: 1646050199,
                username: 'Angelina Gotelli',
                files: ['translation.xls'],
                ticket: 'PD-1092',
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646050001,
                username: 'Angelina Gotelli',
                userImg: '/img/avatars/thumb-1.jpg',
                comment: `<strong>@Carolyn</strong> Don't worry if it doesn't work right. If everything did, you'd be out of a job.`,
            },
        ],
    },
    {
        id: '7',
        date: 1646490000,
        events: [
            {
                type: 'CREATE-TICKET',
                dateTime: 1646499327,
                ticket: 'PD-919',
                userName: 'Jackie Soto',
            },
            {
                type: 'COMMENT',
                dateTime: 1646497323,
                userName: 'Jessica Wells',
                userImg: '/img/avatars/thumb-8.jpg',
                comment: `There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.`,
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646492123,
                userName: 'Roberta Horton',
                userImg: '/img/avatars/thumb-7.jpg',
                comment: `<strong>@Carolyn</strong> That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.`,
            },
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646491065,
                ticket: 'PD-915',
                status: 1,
                userName: 'Earl Miles',
                userImg: '/img/avatars/thumb-10.jpg',
            },
        ],
    },
]
