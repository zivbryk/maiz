import { utilService } from '../../../services/util.service.js'

export const notes = [
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: true,
        info: { title: "Japan!!", url: "assets/img/ziv-may1.JPG" },
        noteColor: '#F28B82'
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: true,
        info: {
            label: "Trekking equipment",
            todos: [{
                txt: "thermal pans",
                doneAt: null
            },
            {
                txt: "trekking shows",
                doneAt: 187111111
            },
            {
                txt: "fix backpack",
                doneAt: 187111111
            },
            {
                txt: "change money",
                doneAt: 187111111
            },
            {
                txt: "buy train tickets",
                doneAt: 187111111
            },
            {
                txt: "Peanut butter",
                doneAt: 187111111
            }]
        },
        noteColor: '#436C9E'
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            header: "Maize Wiki",
            body: "Maize (/meɪz/ MAYZ; Zea mays subsp. mays, from Spanish: maíz after Taino: mahiz), also known as corn (North American and Australian English), is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.[1][2] The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits.[3] Maize has become a staple food in many parts of the world, with the total production of maize surpassing that of wheat or rice. In addition to being consumed directly by humans (often in the form of masa), maize is also used for corn ethanol, animal feed and other maize products, such as corn starch and corn syrup.[4] The six major types of maize are dent corn, flint corn, pod corn, popcorn, flour corn, and sweet corn.[5] Sugar-rich varieties called sweet corn are usually grown for human consumption as kernels, while field corn varieties are used for animal feed, various corn-based human food uses (including grinding into cornmeal or masa, pressing into corn oil, and fermentation and distillation into alcoholic beverages like bourbon whiskey), and as chemical feedstocks. Maize is also used in making ethanol and other biofuels."
        },
        noteColor: '#CBF0F8'
    }, {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: true,
        info: {
            url: "assets/vid/snowcar.mp4",
            title: "Lapland Trip 2021!"
        },
        noteColor: '#CBFF90'
    }, {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: { header: "Buy Doron a Bday present" },
        noteColor: '#FFF476'
    }, {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: {
            header: "Buy ETFs",
            body: "reduce subscription fees"
        },
        noteColor: '#E6C9A8'
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: true,
        info: {
            url: "assets/img/garden.JPG",
            title: "December Garden"
        },
        style: { backgroundColor: "#00d" },
        noteColor: '#E7EAED'
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
            label: "Grocery List",
            todos: [{
                txt: "Bananas",
                doneAt: null
            },
            {
                txt: "Papayas",
                doneAt: 187111111
            },
            {
                txt: "Mango",
                doneAt: 187111111
            },
            {
                txt: "Peanut butter",
                doneAt: 187111111
            }]
        },
        noteColor: '#FDCFE8'
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: { title: "the best fruit bowl!!", url: "assets/img/bowl.JPG" },
        noteColor: '#F28B82'
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: { header: "Finish sprint project!!!" },
        noteColor: '#AECBFA'
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: { header: "Green credit card", body: "8790-6574-8793-7634" },
        noteColor: '#C4E46D'
    }

]