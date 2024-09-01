<template>
    <div class="curvy-bg">
        <div class="experience col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Experience</h1>
            <section v-for="(experience, index) in experiences" :key="index" class="experience-item">
                <div class="timeline">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>{{ experience.title }}</h4>
                        <div class="d-flex flex-wrap align-items-start">
                            <div class="company">
                                <span>{{ experience.company }} - {{ experience.location }}</span>
                                <p>
                                    <strong>{{ experience.date }}</strong>
                                </p>
                            </div>
                            <ul class="details">
                                <li v-for="(detail, idx) in experience.details" :key="idx">{{ detail }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    title: 'Associate Software Engineer',
                    company: 'SHL India Pvt. Ltd',
                    location: 'Gurugram',
                    date: 'Oct 2023 - Present',
                    details: [
                        'Played a key role in CASPER, a critical backend microservice that supports core APIs essential for frontend functionality.',
                        'Demonstrated expertise in designing and implementing high-performance REST APIs, following best practices.',
                        'Worked in segregation of the microservices communication layer repository, enabling parallel development and enhancing code maintainability for a cross-functional team of 10 engineers, resulting in a 93% reduction in deployment time and a 71% improvement in overall integration performance.',
                        'Streamlined backend data services and developed public-facing APIs, improving communication with external systems and bridging the gap between frontend and client.',
                        'Worked extensively with PHP to ensure efficient and effective backend operations.'
                    ]
                },
                {
                    title: 'Software Support II Intern',
                    company: 'Amazon',
                    location: 'Bangalore',
                    date: 'Jan 2023 - Jun 2023',
                    details: [
                        'Worked on Horizonte and Spring to migrate several microservices, resulting in the creation of a robust and stable new microservice.',
                        'Optimized Amazon Pay New Merchant Registrations, significantly enhancing system efficiency and user experience.',
                        'Managed front-end modifications on the Seller Central tool, ensuring a seamless and user-friendly interface.',
                        'Resolved ad hoc operational issues promptly and effectively.',
                        'Conducted thorough troubleshooting and performance tuning to maintain optimal system performance.'
                    ]
                },
                {
                    title: 'Machine Learning Developer Intern',
                    company: 'Grroom',
                    location: 'Remote',
                    date: 'Dec 2021 - Feb 2022',
                    details: [
                        'Contributed to YOLO model for AI styling app, involving web scraping, model training, and testing.',
                        'Performed accuracy analysis and data verification to ensure model robustness.',
                        'Collaborated on the integration of the machine learning model into the final product, enhancing user experience.'
                    ]
                },
                {
                    title: 'Co-Founder',
                    company: 'LoPG',
                    location: 'Ghaziabad',
                    date: 'Jan 2022 - Jun 2023',
                    details: [
                        'Developed an app that helps users find PG (paying guest) accommodations along with additional services like food, laundry, and books, all in one place.',
                        'Led the development of the app, managing a team of engineers and designers to ensure a smooth and user-friendly experience.',
                        'Secured initial seed funding by winning the Startup Conclave, helping to launch the app successfully in the market.'
                    ]
                },
                {
                    title: 'Head Coordinator & Machine Learning Developer',
                    company: 'Team Conatus',
                    location: 'Ghaziabad',
                    date: 'Sep 2020 - Jun 2023',
                    details: [
                        'Headed a team of 50 tech enthusiasts, organizing workshops and events to foster a culture of innovation.',
                        'Led the development of various college projects, including collaborative coding initiatives and tech-driven community projects.',
                        'Played a key role in securing funding and partnerships for various initiatives, leading to the successful implementation of multiple tech-driven projects.'
                    ]
                },
                {
                    title: 'Machine Learning Trainee',
                    company: 'Amazon ML Summer School',
                    location: 'Remote',
                    date: 'Jul 2022 - Jul 2022',
                    details: [
                        'Acquired in-depth knowledge of machine learning and deep learning concepts through hands-on training.',
                        'Learned about advanced ML algorithms, model evaluation techniques, and deployment strategies.',
                        'Applied concepts to real-world problems and projects, enhancing understanding of machine learning applications.'
                    ]
                },
                {
                    title: 'Machine Learning Trainee',
                    company: 'Froyo Technologies',
                    location: 'Remote',
                    date: 'Sep 2021 - Oct 2021',
                    details: [
                        'Received training in various machine learning techniques and tools, including supervised and unsupervised learning.',
                        'Worked on projects involving data preprocessing, feature selection, and model evaluation.',
                        'Gained practical experience in deploying machine learning models and integrating them into applications.'
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.experience {
    h1 {
        font-weight: bold;
        margin-bottom: 2rem;
        color: white; /* Keep the "Experience" title white */
    }

    .experience-item {
        position: relative;
        margin-bottom: 2rem;
        padding-left: 2.5rem;
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s; /* Smooth animation for hover effects */

        &:hover {
            transform: translateY(-10px); /* Lift the section slightly on hover */
        }

        .timeline {
            position: relative;
            padding-left: 2rem;

            .timeline-marker {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 2px;
                background-color: green; /* Change the color of the line to green */
                z-index: 1;
            }

            .timeline-content {
                background: #fff;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                position: relative;
                z-index: 2;
                color: black;

                h4 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: black;
                }

                .company {
                    margin-bottom: 1rem;

                    span {
                        font-size: 1.1rem;
                        color: black;
                    }

                    p {
                        margin: 0.5rem 0;
                        font-size: 1rem;
                        font-weight: bold;
                        color: black;
                    }
                }

                .details {
                    list-style-type: disc;
                    padding-left: 20px;
                    margin: 0;
                    color: black;

                    li {
                        margin-bottom: 0.5rem;
                        font-size: 1rem;
                        line-height: 1.5;
                        color: black;
                    }
                }
            }
        }
    }

    // Mobile-specific styles
    @media (max-width: 768px) {
        .experience {
            padding-bottom: 60px; /* Adjust padding-bottom for mobile screens */
        }

        .experience-item {
            padding-left: 1rem; /* Adjust padding for smaller screens */
        }

        .timeline-content {
            position: relative;
            margin-bottom: 60px; /* Ensure content does not overlap with bottomNav */
        }
    }
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    background: var(--nav-bg);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000; /* Ensure the bottom-nav is above other content */
    a {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        align-items: center;
        color: white;
        text-decoration: none !important;
        &:hover {
            background: #0f0f0f;
            color: white;
        }
        &.router-link-active {
            color: var(--green);
        }
    }
}
</style>
