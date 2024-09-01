<template>
    <div class="curvy-bg">
        <div class="works col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Works</h1>
            <div class="d-flex flex-column">
                <work
                    image="/img/projects/sapto.png"
                    title="Sapto - Well Being , Well Begin"
                    :tech="['JavaScript', 'nodejs', 'express.js', 'Python', 'Flask']"
                    source="https://github.com/hrs8shukla/Sapto/"
                >
                    <template #description>
                        SAPTO is an AI-driven web application designed to predict the likelihood of diseases based on a
                        patient's symptoms. In addition to disease prediction, it offers tools to monitor diet, predict
                        the risk of diabetes, and assess mental health status. By analyzing user input, SAPTO provides
                        personalized health insights and recommendations, empowering users to take proactive steps
                        toward better health management.
                    </template>
                </work>
                <work
                    image="/img/projects/crms.png"
                    title="CRMS"
                    :tech="['ReactJS', 'nodejs', 'Python', 'Flask', 'Aws Lamda']"
                    source="https://github.com/hrs8shukla/crms"
                >
                    <template #description>
                        CRMS (Crime Reporting and Management System) is a web application built with React and Node.js
                        that simplifies the FIR (First Information Report) filing process and tracking for users. The
                        app streamlines the submission of crime reports and provides a user-friendly interface for
                        tracking the status of reports. It incorporates machine learning to enhance crime management by
                        analyzing patterns and trends, offering predictive insights, and improving overall crime
                        response. Additionally, CRMS features real-time location prediction on maps, identifying
                        hotspots where crime activity is high, and includes Aadhaar-based verification to ensure user
                        authenticity and security.
                    </template>
                </work>
                <work
                    image="/img/projects/easymeet.png"
                    title="EasyMeet"
                    :tech="['Python', 'Tkinter']"
                    source="https://github.com/hrs8shukla/easymeet"
                >
                    <template #description>
                        EasymeeT is a desktop software developed to automate the process of marking attendance in Excel
                        sheets using Google Meets chat transcripts during online classes. The tool allows educators to
                        easily upload a chat transcript file and an Excel sheet containing student names. It then
                        cross-references the names in the transcript with the names in the Excel sheet, marking students
                        as present or absent based on their participation in the chat. This streamlines the attendance
                        process, saving time and reducing manual effort, making it particularly useful for virtual
                        classrooms.
                    </template>
                </work>
            </div>
        </div>
    </div>
</template>

<script>
import loader from '@/mixins/loader';
import Work from '@/components/Work';

export default {
    mixins: [loader],
    components: {
        Work
    }
};
</script>

<style lang="scss">
.works {
    h1 {
        font-weight: bold;
        color: white;
    }
}
</style>
