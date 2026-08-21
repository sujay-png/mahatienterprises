export interface CaseStudyData {
    id: string;
    type: string;
    title: string;
    location: string;
    heroImage: string;
    specs: {
        customer: string;
        location: string;
        systemCapacity: string;
        solarPanels: string;
        product: string;
    };
    about: string[];
    highlights: { icon: string; text: string }[];
    gallery: {
        featured: string;
        small1: string;
        small2: string;
        technical: string;
    };
}

export const caseStudies: Record<string, CaseStudyData> = {
    'vedavyasa': {
        id: 'vedavyasa',
        type: 'Residential Solar Project',
        title: 'Vedavyasa Tantry',
        location: 'Marpalli, Udupi, Karnataka',
        heroImage: "https://lh3.googleusercontent.com/aida/AP1WRLvyfDJDpQ-h24IAgtTirwlh8kmhw-HNNgeyxgyDgrd3K5Rg5d509Uv1DZI-_L7VrRQCAHzMteqC-Uov29YyNnuwQRjRwi226yIZdiUbza3sUw-DB-Y_RSdqUm8_erbSn7QyJkbtaz5jfyNmuk2egTPyBITX33Vlfs77DpSGGbq7TUggkTC9SjBkK37uF7FcgpbnQhcgI8YhWvHFoPTRbU2oDvAvyYm_1HhMJc1uTM67y4ULQSl2lu3ntZCv",
        specs: {
            customer: 'Vedavyasa Tantry',
            location: 'Marpalli, Udupi, Karnataka',
            systemCapacity: '6 kW On-Grid Non-DCR',
            solarPanels: 'Waaree N-Type TOPCon 575W',
            product: 'Inverter Feston 6 kW',
        },
        about: [
            "This 6 kW on-grid solar project at Marpalli, Udupi is a standout example of a high-efficiency rooftop solar installation for a residential property.",
            "The system is built around Waaree's advanced N-Type TOPCon 575W panels — among the most efficient modules available in India today — paired with a reliable Feston 6 kW grid-tied inverter.",
            "The complete solar system installation includes properly mounted AC and DC distribution boxes, a dedicated solar meter, and clean cable management, ensuring both performance and safety for years to come."
        ],
        highlights: [
            { icon: 'solar_power', text: 'High-Efficiency TOPCon Panels' },
            { icon: 'grid_on', text: 'Grid-Tied Solar System' },
            { icon: 'speed', text: 'Net Metering Ready' }
        ],
        gallery: {
            featured: "https://lh3.googleusercontent.com/aida/AP1WRLseUBj5hnia4bTH3D87XBQnvY6sBITTUS2xHl0X7gbPRb5VWGajWv3nPp9mWu_e6f5SZZOm-Mp0iGkVo2WG8mN0ZwnZDY8UQHyd29hk_P8OM56Ix1TKOWTMGw6JV00ygZ3oEtOc0vVJQAifRwKcqBtC-Fs7AElkDR2tTxeG4v_rZBmM4M3yN6XhNYAaNV8WfKv11ZAvaIkD5A9ZuWa-Z5KS-7EJgQgraE4JpwmYxuCQEw3kP3IDLg0LqroD",
            small1: "https://lh3.googleusercontent.com/aida/AP1WRLvd-Cu02efKi5yb8_E_Fed5MotFlBM6AmB0c2rhY3jVEEU4A5VOB2ImyyziT3eAnaf-ZQl4-6vd1niXjlrK_UqpfIWa_cLiKFo0u9SzaEc2pDmhSGkLnNErXy9w_6UVXnkgqeL1vnnBfsMbyA2RuQSjfrRInXa37UwItsljWvmTpFBDhfVE30be3q-3Y36Cx4PUMpMUJSe4VRAU91yJVEQIGjxihFp-ceu1eFp8IZfsNT11l6PqHYnGfvvE",
            small2: "https://lh3.googleusercontent.com/aida/AP1WRLsIUMQm0YEEECLqfFhuU5MIID7ofd-PO5vUilhg-qrBSDnrc68zxJxjXT6jhvmCUOxpdePMqy0RZN0wjwo8ygIJRmqFSeE8_Cjl6Ev47mq8kUD6DETo0OCg0J-IRra9bLIKG6GjJUcQIILLH0YGLMtk0ikUaHlJI6uV7kRX2jwI31KNOKq8LQCwvJ0jKzdD3CKbdwrgb6OskhVjrBeA7Wj4ZSBcl51gIOhMslZVEC2LckEiK2L2fEhsc5JL",
            technical: "https://lh3.googleusercontent.com/aida/AP1WRLtvI9cpCY3fbg3k6kqIsgqdWY2KSKVuI8WzW2AjLXpnlWTjhVqWu2GEEH3rToP4smzuK0qHGPhKMbPJWOthsiozwmE3NZPddSldlicXh7I22aWICiQaMdF9kFYLMnhPTC_1rhkquQHiueQQG27WPBP5AwYnuMAeY86x39OFI-9-w77buFSzS0s0UtjlaYiDBYQpgpDRZo11hqAUsqmwgvOB_fSF9ykSX2YP52_OCuJzAQ4H50xd03ATCMhH"
        }
    },
    'aj-institute': {
        id: 'aj-institute',
        type: 'Commercial Solar Project',
        title: 'AJ institute of technology and Engineering',
        location: 'Kottara, Karnataka',
        heroImage: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.08.59-PM-768x576.jpeg",
        specs: {
            customer: 'AJ institute of technology and Engineering',
            location: 'Kottara',
            systemCapacity: '40 Kw Ongrid Grid NDCR',
            solarPanels: 'Waaree 575Wat N Type Topcon',
            product: 'Inverter 40 Kw Dete',
        },
        about: [
            "This 40 Kw ongrid Grid NDCR solar project at Kottara, Karnataka is a standout example of a high-efficiency rooftop solar installation for a Commercial property.",
            "The system is built around Waaree's advanced N-Type TOPCon 575W panels — among the most efficient modules available in India today — paired with a reliable Dete 40 Kw grid-tied inverter.",
            "The complete solar system installation includes properly mounted AC and DC distribution boxes, a dedicated solar meter, and clean cable management, ensuring both performance and safety for years to come."
        ],
        highlights: [
            { icon: 'solar_power', text: 'High-Efficiency TOPCon Panels' },
            { icon: 'grid_on', text: 'Grid-Tied Commercial System' },
            { icon: 'corporate_fare', text: 'Commercial Scale' }
        ],
        gallery: {
            featured: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.08.59-PM-768x576.jpeg",
            small1: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.08.46-PM-768x576.jpeg",
            small2: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.08.55-PM-1-768x576.jpeg",
            technical: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.08.34-PM-768x576.jpeg"
        }
    },
    'chandrakanth': {
        id: 'chandrakanth',
        type: 'Residential Solar Project',
        title: 'Chandrakanth',
        location: 'Kramballi Udupi, Karnataka',
        heroImage: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.01.06-PM-768x576.jpeg",
        specs: {
            customer: 'Chandrakanth',
            location: 'Kramballi Udupi',
            systemCapacity: '3.24 Kw Ongrid Grid DCR',
            solarPanels: 'Adani 540 Wat Mono Perc DCR',
            product: 'Inverter 3.3 Kw Feston',
        },
        about: [
            "This 3.24 kW on-grid DCR solar project at Kramballi, Udupi is a standout example of a high-efficiency rooftop solar installation for a residential property.",
            "The system is built around Adani's advanced 540 Wat Mono Perc DCR panels paired with a reliable Feston 3.3 Kw grid-tied inverter.",
            "The complete solar system installation includes properly mounted AC and DC distribution boxes, a dedicated solar meter, and clean cable management, ensuring both performance and safety for years to come."
        ],
        highlights: [
            { icon: 'solar_power', text: 'Adani Mono Perc DCR' },
            { icon: 'grid_on', text: 'Grid-Tied Solar System' },
            { icon: 'home', text: 'Residential Setup' }
        ],
        gallery: {
            featured: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.01.06-PM-768x576.jpeg",
            small1: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.01.10-PM-768x576.jpeg",
            small2: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.01.08-PM-2-768x576.jpeg",
            technical: "https://mahatienterprises.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-08-at-1.01.08-PM-768x576.jpeg"
        }
    }
};
