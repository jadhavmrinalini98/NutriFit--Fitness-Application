import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Products",
        path: '/products'
    },
    {
        name: "Membership Plans",
        path: '/plans'
    },
    {
        name: "Diet Plans",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "Profile",
        path: '/login'
    },
    {
        name: "Cart",
        path: '/Cart'
    }
]



export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Yoga",
        info: "Let's go deeper in your spiritual practice!",
        more: "Every class has an array of breathing techniques, a variety of meditation techniques. Helps in improving confidence while gaining a stronger body along with mindfullness.",
        path: "/newPages"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Kit Boxing",
        info: "Bringout your aggressive instinct, not a killer instinct!",
        more:"A combination of primal movements, zero momentum reps & conditioning routines designed to improve muscle endurance.",
        path: "/kickboxing"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Dance Fitness",
        info: "Work it,Move it,Shake it, Dance!",
        more:"A full body aerobic workout, divided into different genres of music providing peaks and troughs of intensity.Styles include Zumba, LaBlast, Hip Hop Abs, and Bokwa.",
        path: "/dance"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Weight Lifting",
        info: "By lifting weights, get on dates!",
        more:"A training methodology that creates stimulus for improved strength & endurance while helping participants build a great physique and all round functional fitness.",
        path: "/weight"
    }
]





const gymequipimage = require('./images/Dumbells.jpeg')
const nutritionimage = require('./images/ProteinShake.jpeg') 
const gymaccimage = require('./images/gymacc.jpeg')
const apparelimage = require('./images/gym-clothes.webp')



export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        image: apparelimage ,
        title: "Apparels",
        desc: "Shop a wide range of mens and womens workout apparels."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        image: nutritionimage,
        title: "Protein Shakes",
        desc: "In addition to protein our shakes have zinc, potassium and vitamins."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        image: gymaccimage,
        title: "Accessories",
        desc: "Get 20% disccount on all accessories when you buy gold or higher membership."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        image: gymequipimage,
        title: "Equipments",
        desc: "Specialised and certified gym equipments with superior quality."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Each week adults need 150 minutes of moderate-intensity physical activity and 2 days of muscle strengthening activity, according to the current Physical Activity Guidelines for Americans. We know 150 minutes of physical activity each week sounds like a lot, but you don't have to do it all at once."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Morning workouts are ideal for burning fat and losing weight, but afternoon workouts may give your performance a boost, since you'll have eaten a meal or two by the time you get going."
    },
    {
        id: 3,
        question: "How Nutri.Fit different from other gyms?",
        answer: "With our non-conventional training facility, we aim to give you a balanced mix of workouts that will enhance your health while having fun at the same time. Nutri.Fit differentiates itself, from other fitness centers by offering group workouts that focus on overall development. Nutri.Fit has a simple philosophy - make fitness fun and easy with the help of best-in-class trainers and group workouts. Our workouts can be done both at a Nutri.Fit center as group classes and at home with the help of do-it-yourself (DIY) workout videos. Nutri.Fit.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the Nutri.Fit.fit app or website. To know more about Nutri.Fit, check this link."
    },
    {
        id: 4,
        question: "What is Nutri.Sports and what does it offer?",
        answer: "NutriFitsport from the house of cure.fit aims to make health easy by providing smart fitness products for the everyday athlete. Designed to give you the best workout experience, the Nutri.Fitsport product range includes sportswear, at-home workout equipments, bicycles & nutraceutical."
    },
    {
        id: 5,
        question: "What are the different types of fitness centres available on NutriFitPass?",
        answer: "There are 3 types of fitness centers available on NutriFitpass. 1) Nutri.Fit centers. 2) ELITE gyms. 3) PRO gyms. You get unlimited access to all centers in a city with a Nutri.Fitpass ELITE. You get unlimited access to PRO gyms and 4 sessions per month at Nutri.Fit centers or ELITE gyms in a city with Nutri.Fitpass PRO"
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "At Nutri.Fit centers, you’ll find a wide variety of workout formats, such as - Boxing, Dance Fitness, Yoga, S&C, and weight lifting. These workouts focus on strength, muscle endurance, flexibility, stamina & balance. So mix it up, pick formats that help you achieve your personal fitness goals.  You’ll also find unique workout formats designed by Bollywood stars like Hrithik Roshan! We can assure you that your sessions will be more fun, interesting, and less monotonous.  You can find more info about all our workout formats here. If you prefer to workout at home, we've got you covered! You can follow DIY and LIVE videos that are meant for both beginner & advanced levels and focus on building strength, stamina & mobility."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "One of the best gym in bangalore. Very professional coaching and good results with great experience in this gym. Highly recommended this place.",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Very friendly and constructive trainers. They push me and appreciate me when I am on track and dont judge me when I am not.On balance, I would recommend the Nutri.Fit experience.",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Hardin Scott",
        quote: "I've been able to reduce 12 kgs in 4 months so far. Initially I had faced some delays with coach response but after requesting a coach change I have had a very pleasant experience with Rashmita who very clearly explained to me that only consistency can bring change, there is no magic pill or unique workout plan that will do this! I swore by these words and despite any boredom of following the drill of the daily habits of eating and moving often, I managed to stick to this routine almost 80%!.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: " I was a bit fat a few weeks ago but then I came across this app. I started of with the beginners sessions and finished it so that I could go for belly burn. What I found out was I had already burned a lot of calories just with the beginners package. But I did not stop there as I knew that if I had stopped, then my fat would have kept on increasing. So I went for the belly burn. The first package of the belly burn which was the beginners one started out great. The instructor explained all the steps in detail and I got the hang of by the end of the sessions.",
        job: "Professor",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Merry Lancaster",
        quote: " Best workout experience ever.I have worked out is several gyms for the last 10 years and I must say this is the best so far. In terms of everything from start to finish. If you have a busy schedule and don’t know what time you can get to gym this is the best as you can choose the time accordingly. Also, you just have to show up to class and they make sure they understand your intensity and suggest easier or tougher variation based on your endurance. The different variations is what gets you hooked. If your idea is to go regularly then try out all the classes and pick and choose what you like. It’s been 3 months and apart from Sunday’s I go every other day. The app and software part of Nutri.Fit is amazing, as a software engineer I can totally tell they have done an amazing job. They have the outdoors and swimming pools which are a good addition. You won’t feel it’s monotonous at all. Try the yoga classes as well. They are super good and relaxing after a great workout. Kudos to Nutri.Fit",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: '1200+ at-home workouts', available: true},
            {feature: 'dance', available: true},
            {feature: 'yoga', available: true},
            {feature: '30+ goal based fitness programs', available: true},
            {feature: 'Stamina and mobility', available: true},
            {feature: 'health podcasts', available: false},
            {feature: 'Cross fit', available: false},
            {feature: 'All PRO gyms', available: false},
            {feature: 'At centre group classes', available: false},
            {feature: 'Meditation sessions', available: false},
            {feature: 'Free 2 month extension', available: false},
            {feature: '4 Sessions/month at ELITE gyms', available: false},
            {feature: 'one free gym apparel', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: '1200+ at-home workouts', available: true},
            {feature: 'dance', available: true},
            {feature: 'yoga', available: true},
            {feature: '30+ goal based fitness programs', available: true},
            {feature: 'Stamina and mobility', available: true},
            {feature: 'health podcasts', available: true},
            {feature: 'Cross fit', available: true},
            {feature: 'All PRO gyms', available: true},
            {feature: 'At centre group classes', available: true},
            {feature: 'Meditation sessions', available: false},
            {feature: 'Free 2 month extension', available: false},
            {feature: '4 Sessions/month at ELITE gyms', available: false},
            {feature: 'one free gym apparel', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: '1200+ at-home workouts', available: true},
            {feature: 'dance', available: true},
            {feature: 'yoga', available: true},
            {feature: '30+ goal based fitness programs', available: true},
            {feature: 'Stamina and mobility', available: true},
            {feature: 'health podcasts', available: true},
            {feature: 'Cross fit', available: true},
            {feature: 'All PRO gyms', available: true},
            {feature: 'At centre group classes', available: true},
            {feature: 'Meditation sessions', available: true},
            {feature: 'Free 2 month extension', available: true},
            {feature: '4 Sessions/month at ELITE gyms', available: true},
            {feature: 'one free gym apparel', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]