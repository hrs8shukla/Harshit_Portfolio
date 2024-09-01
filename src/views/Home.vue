<template>
    <div class="home d-flex flex-column flex-md-row justify-content-around">
        <div class="text-container col-12 col-md-6">
            <span class="greeting animate-greeting">
                <img src="/img/namaste-icon.png" alt="Namaste Icon" /> Namaste();
            </span>
            <span class="title animate-title"> I'm <span class="highlight">Harshit Shukla</span> </span>
            <span class="sub-title animate-sub-title">Full Stack Developer</span>
        </div>
        <div class="image-container col-12 col-md-6">
            <img src="/img/harshit.png" alt="Harshit Shukla" />
        </div>
    </div>
</template>

<style lang="scss">
@import '~rfs/scss';

/* CSS Reset to ensure consistent rendering */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
}

.home {
    height: var(--desktop-full-height);
    position: relative; /* Added relative positioning */
    .mobile-view > & {
        height: var(--mobile-full-height);
    }
}

.image-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative; /* Ensure proper stacking context */
    z-index: 1; /* Ensure it is behind the navigation */
    img {
        max-width: 100%;
        height: auto;
        display: block; /* Remove extra space below image */
    }
}

.text-container {
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center; /* Center align text for better readability on smaller screens */
    position: relative;
    z-index: 2; /* Ensure text is above the image */

    .title {
        font-size: 4vw; /* Responsive font size */
        opacity: 0;
        transform: translateY(-50px);
        animation: fadeInSlideDown 1.5s forwards;
        transition: color 0.3s ease;
        white-space: nowrap; /* Ensure text stays on one line */
    }

    .highlight {
        color: inherit; /* Make sure it inherits color for hover effect */
        &:hover,
        &:active {
            color: red; /* Change color to red on hover and active */
        }
    }

    .sub-title {
        font-size: 2vw; /* Responsive font size */
        color: #969696;
        opacity: 0;
        transform: translateY(-20px);
        animation: fadeInSlideDown 1.5s 0.5s forwards;
    }

    .greeting {
        font-size: 1.5vw; /* Responsive font size */
        margin-top: 10px;
        display: flex;
        align-items: center;
        img {
            width: 30px; /* Adjust icon size */
            margin-right: 8px; /* Spacing between icon and text */
        }
    }
}

.text-container,
.image-container {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
}

@keyframes fadeInSlideDown {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Media Queries for Responsive Design */
@media (max-width: 1200px) {
    .title {
        font-size: 4rem; /* Adjusted font size for larger screens */
    }

    .sub-title {
        font-size: 2rem;
    }
}

@media (max-width: 992px) {
    .title {
        font-size: 3rem;
    }

    .sub-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 2.8rem;
    }

    .sub-title {
        font-size: 1.8rem;
    }

    .greeting {
        font-size: 1.4rem;
    }
}

@media (max-width: 576px) {
    .title {
        font-size: 2.3rem;
    }

    .sub-title {
        font-size: 1.6rem;
    }

    .greeting {
        font-size: 1.2rem;
    }
}
</style>
