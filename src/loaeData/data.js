// Choose From Our Top Courses Create data


const webData = [
    {
        name: 'Ryan Dahl',
        id: 1,
        title: 'web developmer in node.js',
        img:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Ryan_Dahl.jpg',
        Industrysupport: '24',
        degeneration: "JavaScript is the only language that Node.js supports natively."
    },
    {
        name: 'Michael Abrash',
        id: 2,
        title: '	Chief Scientist',
        img:'https://upload.wikimedia.org/wikipedia/commons/b/b0/Michael_Abrash_at_Facebook%27s_F8_2015.jpg',
        Industrysupport: '24',
        degeneration: "JavaScript is the only language that Node.js supports natively."
    },

    {
        name: 'Scott Adams',
        id: 3,
        title: 'Miami, Florida',
        img:'https://upload.wikimedia.org/wikipedia/en/3/32/Scott_Adams_Game_Designer_in_2002.jpg',
        Industrysupport: '24',
        degeneration: "JavaScript is the only language that Node.js supports natively."
    },

    {
        name: 'Tarn Adams',
        id: 4,
        title: 'Dwarf Fortress',
        img:'https://upload.wikimedia.org/wikipedia/commons/0/06/Tarn_Adams.jpg',
        Industrysupport: '24',
        degeneration: "This is a dynamic list and may never be able to satisfy particular standards."
    },

    {
        name: 'Leonard Adleman',
        id: 5,
        title: 'co-created RSA',
        img:'https://upload.wikimedia.org/wikipedia/commons/a/af/Len-mankin-pic.jpg',
        Industrysupport: '24',
        degeneration: "algorithm (being the A in that name), coined the term computer virus"
    },


    {
        name: 'Alfred Aho',
        id: 6,
        title: 'co-created AWK',
        img:'https://images.squarespace-cdn.com/content/v1/5ea853199547820b872b2ab4/1618865900207-AEHZPRR4L81OPUQ4JBUI/aho_landscape_1%402x.png',
        Industrysupport: '24',
        degeneration: "being the A in that name, and main author of famous Compilers."
    },

    {
        name: 'Scott Adams',
        id: 7,
        title: 'Miami, Florida',
        img:'https://upload.wikimedia.org/wikipedia/en/3/32/Scott_Adams_Game_Designer_in_2002.jpg',
        Industrysupport: '24',
        degeneration: "JavaScript is the only language that Node.js supports natively."
    },

    {
        name: 'Tarn Adams',
        id: 8,
        title: 'Dwarf Fortress',
        img:'https://upload.wikimedia.org/wikipedia/commons/0/06/Tarn_Adams.jpg',
        Industrysupport: '24',
        degeneration: "This is a dynamic list and may never be able to satisfy particular standards."
    },

    {
        name: 'Andrei Alexandrescu',
        id: 9,
        title: 'author',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/AndreiAlexandrescu.jpg/330px-AndreiAlexandrescu.jpg',
        Industrysupport: '24',
        degeneration: "author, expert C++, D languages"
    },

    {
        name: 'Paul Allen',
        id: 10,
        title: ' Altair BASIC',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Paul_G._Allen_%28cropped%29.jpg/330px-Paul_G._Allen_%28cropped%29.jpg',
        Industrysupport: '24',
        degeneration: "Applesoft BASIC, co-founded Microsoft"
    },

    {
        name: 'Eric Allman ',
        id: 11,
        title: 'sendmail,',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eric_Allman_2018.jpg/330px-Eric_Allman_2018.jpg',
        Industrysupport: '24',
        degeneration: "Sendmail is a general purpose internetwork email routing facility"
    },

    {
        name: 'Marc Andreessen',
        id: 12,
        title: 'co-created Mosaic',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Marc_Andreessen-9.jpg/360px-Marc_Andreessen-9.jpg',
        Industrysupport: '24',
        degeneration: " co-founded Netscape"
    },
    {
        name: 'Jeremy Ashkenas',
        id: 13,
        title: 'created CoffeeScript ',
        img:'https://alchetron.com/cdn/jeremy-ashkenas-eb3d2231-b267-465e-a881-ed74d10a57f-resize-750.jpg',
        Industrysupport: '24',
        degeneration: "programming language and Backbone.js"
    },
    
    {
        name: 'Bill Atkinson',
        id: 14,
        title: 'HyperCard',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bill_Atkinson_at_25_years_of_HyperCard_event.jpeg/330px-Bill_Atkinson_at_25_years_of_HyperCard_event.jpeg',
        Industrysupport: '24',
        degeneration: "HyperCard is a software application and development kit for Apple Macintosh"
    },
     
    {
        name: 'Kent Beck',
        id: 15,
        title: 'co-created JUnit',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kent_Beck_no_Workshop_Mapping_XP.jpg/330px-Kent_Beck_no_Workshop_Mapping_XP.jpg',
        Industrysupport: '24',
        degeneration: "created Extreme programming,"
    },
    
    {
        name: 'Joshua Bloch',
        id: 16,
        title: 'co-created Zork',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Joshuabloch.jpg/1200px-Joshuabloch.jpg',
        Industrysupport: '24',
        degeneration: "core Java language designer, lead the Java collections framework project"
    },


    {
        name: 'Andries Brouwer',
        id: 17,
        title: ' Hack',
        img:'data:image/jpeg;base64,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',
        Industrysupport: '24',
        degeneration: "former maintainer of man pager, Linux kernel hacker"
    },
];