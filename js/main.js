    const store = new Vuex.Store({
        state: {
            education:[
                {
                    school: "National Tsing Hua University",
                    department: "Institute of Information System and Applications",
                    degree: "Master",
                    durationFrom: "2014-09",
                    durationTo: "Now"
                },
                {
                    school: "National Chenchi University",
                    department: "Department of Management Information Systems",
                    degree: "Master",
                    durationFrom: "2008-09",
                    durationTo: "2013-01"
                }
            ],
            skills:[
                {
                    category: "Front-End",
                    title: "JavaScript",
                    variant: "primary"
                },
                {
                    category: "Front-End",
                    title: "jQuery",
                    variant: "primary"
                },
                {
                    category: "Front-End",
                    title: "jQuery UI",
                    variant: "primary"
                },
                {
                    category: "Front-End",
                    title: "Vue.js",
                    variant: "primary"
                },
                {
                    category: "Front-End",
                    title: "Vuex",
                    variant: "primary"
                },
                {
                    category: "Front-End",
                    title: "Boorstrap",
                    variant: "info"
                },
                {
                    category: "Front-End",
                    title: "SASS/SCSS",
                    variant: "info"
                },

                {
                    category: "Back-End",
                    title: "PHP",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "CodeIgniter",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "Laravel",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "Slim",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "Python",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "C#",
                    variant: "secondary"
                },
                {
                    category: "database",
                    title: "MySQL",
                    variant: "success"
                },
                {
                    category: "database",
                    title: "MariaDB",
                    variant: "success"
                },
                {
                    category: "database",
                    title: "SQL Server",
                    variant: "success"
                },
                {
                    category: "database",
                    title: "MongoDB",
                    variant: "success"
                },
                {
                    category: "CI/CD",
                    title: "Docker",
                    variant: "dark"
                },
                {
                    category: "CI/CD",
                    title: "Jenkins",
                    variant: "dark"
                },
                {
                    category: "Others",
                    title: "Git",
                    variant: "danger"
                },
                {
                    category: "Others",
                    title: "Gitea",
                    variant: "danger"
                }
            ],
            jobs:[
                {
                    company: "iCryobank",
                    department: "IT Department",
                    position: "Web Developer",
                    durationFrom: "2016-08",
                    durationTo: "Now",
                    works:[
                        {
                            description: "Maintained official website and SEO.",
                            skills: ["PHP", "CodeIgniter", "JavaScript", "jQuery", "MySQL", "Google Analytic", "Google Tag Manager", "Google Optimize", "Google Search Console", "Git", "Gitea"]
                        },
                        {
                            description: "Maintained web-based treatment record system",
                            skills: ["PHP", "CodeIgniter", "JavaScript", "jQuery", "jQuery UI", "MySQL", "Git", "Gitea"]
                        },
                        {
                            description: "Developed new web-based treatment record system",
                            skills: ["PHP", "Laravel", "JavaScript", "BootstrapVue", "SCSS/SASS", "Vue.js", "Docker", "MariaDB", "Git", "Gitea"]
                        },
                        {
                            description: "Developed RESTFul APIs Service",
                            skills: ["PHP", "Slim", "MySQL", "SQL Server", "Docker", "Git", "Gitea"]
                        },
                        {
                            description: "Developed Python Scripts",
                            skills: ["Python"]
                        },
                        {
                            description: "Managed outsourcing projects",
                            skills: ["Aglio API Blueprint"]
                        }
                    ]
                },
                {
                    company: "ITRI",
                    department: "ICR",
                    position: "Programmer",
                    durationFrom: "2015-07",
                    durationTo: "2016-03",
                    works:[
                        {
                            description: "Designed MySQL API using C++.",
                            skills: ["JavaScript", "jQuery", "PHP", 'C++', "MySQL"]
                        },
                        {
                            description: "Designed web site",
                            skills: ["JavaScript", "jQuery", "jQuery UI", "PHP", "MySQL"]
                        }
                    ]
                }
            ],
            siedprojects:[
                {
                    name: "Daipoem",
                    description: "A Line Bot application that user can random pick-up a poem posted on DCard literature sub board.",
                    githubURL: "https://github.com/woeichern/Daipoem",
                    link: "http://nav.cx/ohiZuj9"
                },
                {
                    name: "WLook",
                    description: "A Line Bot application that user can random pick-up a look photos list from Dappei, DropTokyo and WearJP.",
                    githubURL: "https://github.com/woeichern/WLook",
                    link: "http://nav.cx/swqs0KQ"
                },
                {
                    name: "WSecondMovier",
                    description: "A Line Bot application that user can query second-run theaters and movies information.",
                    githubURL: "https://github.com/woeichern/WSecondMovier",
                    link: "http://nav.cx/ohiZuj9"
                },
                {
                    name: "WTyphoon",
                    description: "A Taiwan typhoon school and office closures announcement notifier based on LINE Notify Service and DGPA website.",
                    githubURL: "https://github.com/woeichern/WTyphoon",
                    link: null
                },
                {
                    name: "TWeatherTeller",
                    description: "A Taiwan weather notifier based on LINE Notify Service and CWB API.",
                    githubURL: "https://github.com/woeichern/TWeatherTeller",
                    link: null
                }
            ]
        },
        getters:{

            skillCategory: data =>{

                let categoryList = [];

                for(let i in data.skills){

                    let category = data.skills[i].category;

                    if(categoryList.indexOf(category) < 0) {

                        categoryList.push(category);

                    }

                }

                return categoryList;

            },
            skillList: (data) => (categoryInput) => {

                let skillList = [];

                for(let i in data.skills){

                    let category = data.skills[i].category;

                    if(category === categoryInput) {

                        skillList.push(data.skills[i]);

                    }

                }

                return skillList;

            }
        },
        mutations: {

        }
    })


    var app = new Vue({
        el: '#app',
        store,
        data: {
        },
        methods: {
            scrollIntoView: function(evt) {

                evt.preventDefault();
                const href = evt.target.getAttribute('href');
                const el = href ? document.querySelector(href) : null;

                if (el) {

                    this.$refs.content.scrollTop = el.offsetTop;

                }
            }
        },
        mounted(){

        }
    })