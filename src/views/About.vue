<template>
    <div class="curvy-bg">
        <div class="about col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>About Me</h1>
            <p>
                Hey there! I'm a Computer Science graduate with a knack for turning complex problems into elegant
                solutions, currently working my magic as a Software Developer at <a href="https://www.shl.com/">SHL</a>.
                My love affair with technology kicked off in my first year of college, where I quickly became obsessed
                with machine learning. Before I knew it, I was deep into <a href="https://www.python.org/">Python</a>,
                working on Machine Learning and Deep Learning projects. I also became proficient in writing APIs using
                <a href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>, and there was no turning back.
            </p>
            <p>
                But hey, why stop at one obsession? I didn't. <a href="https://cplusplus.com/">C++</a> was my first
                programming love—it was like solving puzzles every day, and I couldn’t get enough. As I moved through
                college, my curiosity led me to the world of full-stack development. I dived into
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>,
                <a href="https://react.dev/">ReactJS</a>, and <a href="https://nodejs.org/en">Node.js</a>. By the time I
                hit my final year, I had added <a href="https://www.java.com/">Java</a>,
                <a href="https://spring.io/">the Spring framework</a>, and <a href="https://www.php.net/">PHP</a> under
                my belt too—because who doesn’t love a good challenge?
            </p>
            <p>
                My college years weren't just about burying my head in code, though. I gained hands-on experience during
                internships and projects. As a Machine Learning Developer Intern at
                <a href="https://grroom.in/">Grroom</a>, I helped craft an AI-powered styling app. At
                <a href="https://pay.amazon.com/">Amazon</a>, I optimized merchant onboarding workflows using the Spring
                framework—because making things faster and smoother is always the goal.
            </p>
            <p>
                But my journey didn't stop with internships; hackathons, competitions, and a leap into the startup world
                were where I truly thrived. I co-founded a startup called LoPG, which not only won the Startup Conclave
                but also secured seed funding—turning a big idea into a thriving business was an absolute thrill.
                Winning the world's biggest hackathon, Smart India Hackathon 2022, and other competitions like Anveshna
                2021 and the CDAC Grand Challenge, were defining moments for me. My role as Head Coordinator at
                <a href="https://teamconatus.com">Conatus</a>
                was just the cherry on top—I got to lead a team of 50 tech enthusiasts, organize workshops, and work on
                cool machine learning projects.
            </p>
            <p>
                As for projects, one of my favorites is <strong>SAPTO</strong>, an AI-driven web app built using React
                and TensorFlow, which blends advanced tech with health management to offer personalized wellness plans.
                Then there’s <strong>ADHIKAAR</strong>, a mobile app that simplifies the IPR filing process for small
                innovators—because everyone deserves a shot at protecting their big ideas. Oh, and did I mention my
                final year project? It was a full-stack application with a twist of machine learning to build a crime
                management system—definitely one of my proudest achievements.
            </p>
            <p>
                My love for learning didn’t stop there. I got some solid training in Machine Learning from Froyo
                Technologies and was even selected for Amazon's ML Summer School to dive deeper into AI. Since I was
                super curious about cloud technologies, I completed multiple quests on GCP and contributed to open
                source by participating in Hacktoberfest—because why not, right?
            </p>
            <p>
                In short, I’m all about blending creativity with technology to make the world a bit smarter, one project
                at a time. Whether it’s diving into the latest tech trends, solving tricky problems, launching startups,
                or leading a team to victory, I’m here for the fun, the challenges, and the endless possibilities that
                the future holds.
            </p>
            <p class="footer">
                When I'm not busy whispering sweet nothings to my code, I'm serenading my soul with songs, cheering on
                my favorite sports teams, and scrolling through memes like they're the oxygen I breathe.
            </p>
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';

export default {
    mixins: [loader]
};
</script>

<style lang="scss">
.about {
    background: #fff; /* White background for the content */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 20px; /* Padding around the content */
    margin: 20px auto; /* Centering and spacing */
    max-width: 800px; /* Max width for readability */
}

h1 {
    font-weight: bold;
    color: #333; /* Dark color for the heading */
    margin-bottom: 20px; /* Space below heading */
}

p {
    line-height: 1.6; /* Improved readability */
    color: #555; /* Dark gray for text */
    margin-bottom: 20px; /* Space between paragraphs */
}

strong {
    color: #333; /* Highlighted project names */
}

.footer {
    margin: 0;
    font-style: italic;
    color: #666; /* Subtle color for footer */
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .about {
        padding: 15px; /* Less padding on smaller screens */
    }
}
</style>
