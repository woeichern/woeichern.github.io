    const store = new Vuex.Store({
        state: {
            education:[
                {
                    school: "National Tsing Hua University",
                    department: "Institute of Information System and Applications",
                    degree: "Master",
                    durationFrom: "2014-09",
                    durationTo: "2020-06"
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
                    title: "Nuxt.js",
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
                    title: "PHPUnit",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "Laravel",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "CodeIgniter",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "Python",
                    variant: "secondary"
                },
                {
                    category: "Back-End",
                    title: "GraphQL",
                    variant: "secondary"
                },
                {
                    category: "Database",
                    title: "MySQL",
                    variant: "success"
                },
                {
                    category: "Database",
                    title: "Redis",
                    variant: "success"
                },
                {
                    category: "DevOps",
                    title: "Docker",
                    variant: "dark"
                },
                {
                    category: "DevOps",
                    title: "Azure",
                    variant: "dark"
                },
                {
                    category: "DevOps",
                    title: "Kubernetes",
                    variant: "dark"
                },
                {
                    category: "SVN",
                    title: "Git",
                    variant: "danger"
                },
                {
                    category: "Agile",
                    title: "Scrum",
                    variant: "warning"
                },
                {
                    category: "Others",
                    title: "Unit Testing",
                    variant: "secondary"
                },
                {
                    category: "Others",
                    title: "ElasticSearch",
                    variant: "secondary"
                },
                {
                    category: "Others",
                    title: "Kibana",
                    variant: "secondary"
                },
            ],
            jobs:[
                {
                    company: "CommonWealth Magazine Group",
                    department: "IT Department",
                    position: "Senior Engineer",
                    durationFrom: "2020-01",
                    durationTo: "Now",
                    works:[
                        {
                            description: "Developed new online learning website.",
                            detail:[
                                "Developed API system for front-end site.",
                                "Developed front-end site.",
                                "Assisted team in introducing separation of front-end and backend.",
                                "Optimized performance of website.",
                                "Set up marketing tracking codes.",
                                "Set up GTM tracking codes.",
                            ],
                            skills: ["Nuxt.js", "Vue.js", "Laravel"]
                        },
                        {
                            description: "Maintained online learning websites.",
                            detail:[
                                "Developed new features according to requirements.",
                                "Concatenated with order middle platform.",
                                "Concatenated with payment middle platform.",
                                "Optimized performance of website.",
                                "Set up marketing tracking codes.",
                                "Set up GTM tracking codes.",
                            ],
                            skills: ["Laravel", "Vue.js"]
                        },
                        {
                            description: "Maintained content websites.",
                            detail:[
                                "Developed new features according to requirements.",
                                "Optimized performance of website.",
                            ],
                            skills: ["Laravel", "Vue.js"]
                        },
                        {
                            description: "Developed and maintained order middle platform.",
                            detail:[
                                "Concatenated with digital products.",
                                "Concatenated with 91 API system.",
                                "Concatenated with ERP system.",
                            ],
                            skills: ["Laravel", "GraphQL"]
                        },
                        {
                            description: "Developed and maintained payment middle platform.",
                            detail:[
                                "Concatenated with digital products.",
                                "Concatenated with banks' payment API.",
                                "Concatenated with outside third-payment providers",
                            ],
                            skills: ["Laravel", ]
                        }
                    ]
                },
                {
                    company: "iCryobank",
                    department: "IT Department",
                    position: "Web Developer",
                    durationFrom: "2016-08",
                    durationTo: "2020-01",
                    works:[
                        {
                            description: "Maintained official website and SEO.",
                            detail:[
                                "Maintained official website",
                                "Monitor Google Analytics data and make suggestions to do SEO.",
                                "Plan A/B test of official website UI to help making decision.",
                                "Designed and set tracking code into web site to track some issues."
                            ],
                            skills: ["CodeIgniter", "jQuery", "MySQL", "Google Analytic", "Google Tag Manager", "Google Optimize", "Google Search Console", "Git", "Gitea"]
                        },
                        {
                            description: "Maintained web-based treatment record system",
                            detail:[
                                "Maintained old treatment record system which is used to record clients' treatment record and handover.",
                                "Developed new features in treatment record system by user interview and discussion."
                            ],
                            skills: ["CodeIgniter", "jQuery", "jQuery UI", "MySQL", "Git", "Gitea"]
                        },
                        {
                            description: "Developed new web-based treatment record system",
                            detail:[
                                "Developed new treatment record system as single page applications web site."
                            ],
                            skills: ["Laravel", "BootstrapVue", "SCSS/SASS", "Vue.js", "Docker", "MariaDB", "Git", "Gitea"]
                        },
                        {
                            description: "Developed RESTFul APIs Service",
                            detail:[
                                "Developed RESTFul APIs service, which is to exchange data among systems.",
                                "Used PHP and Slim 3 as back-end, and deploy on docker.",
                                "Used MongoDB as API service log storage."
                            ],
                            skills: ["Slim", "MongoDB", "MySQL", "SQL Server", "Docker", "Git", "Gitea"]
                        },
                        {
                            description: "Developed Python Scripts",
                            detail:[
                                "Developed Python script to crawl web page from a system, and then save data into a database to be accessed by APIs service.",
                                "Developed Python script to upload file to external API service and save response data at designated times."
                            ],
                            skills: ["Python"]
                        },
                        {
                            description: "Managed outsourcing projects",
                            detail:[
                                "Interviewed staffs and integrated requirements, and writed specifications for outsourcing vendor.",
                                "Coordinated between internal users and outsourcing vendors."
                            ],
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
                            detail:[
                            ],
                            skills: ["JavaScript", "jQuery", "PHP", 'C++', "MySQL"]
                        },
                        {
                            description: "Designed web site",
                            detail:[
                            ],
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
                    name: "WReversi",
                    description: "A reversi game bot.",
                    githubURL: "https://github.com/woeichern/WReversi",
                    link: "https://page.line.me/296lvqak"
                },
                {
                    name: "WLook",
                    description: "A Line Bot application that user can random pick-up a look photos list from Dappei, DropTokyo and WearJP.",
                    githubURL: "https://github.com/woeichern/WLook",
                    link: "http://nav.cx/swqs0KQ"
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

                data.skills.forEach((skill) => {
                    let category = skill.category;

                    if(categoryList.indexOf(category) < 0) {
                        categoryList.push(category);
                    }
                });

                return categoryList;

            },
            skillList: (data) => (categoryInput) => {
                return data.skills.filter((skill) => {
                    return skill.category === categoryInput;
                });
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
