<template>
    <footer :class="{ 'mobile-view': !$bp.smAndUp }" class="custom-footer pt-5">
        <div class="top mb-5">
            <div class="logo-container col-12 col-md-9 p-0 mb-5 mb-md-0">
                <div class="d-flex justify-content-center align-items-center mt-3 button-email-container">
                    <a
                        href="https://drive.google.com/file/d/1Ub09OG1AE1JuBcOTMU5ZsPtf9ffykZbZ/view?usp=sharing"
                        title="Download Resume"
                        target="_blank"
                        download
                    >
                        <button class="download-btn">
                            Download Resume
                        </button>
                    </a>
                    <div class="email-section">
                        <span class="email-label">Email:</span>
                        <a href="mailto:harshit12shukla@gmail.com" class="email-link">
                            harshit12shukla@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="social">
            <a href="https://github.com/hrs8shukla" title="GitHub Profile" target="_blank">
                <fa-icon icon="github" type="fab" />
            </a>
            <a href="https://www.linkedin.com/in/hrs8shukla/" title="LinkedIn Profile" target="_blank">
                <fa-icon icon="linkedin" type="fab" />
            </a>
            <a href="https://www.instagram.com/scienceKari/" title="Instagram" target="_blank">
                <fa-icon icon="instagram" type="fab" />
            </a>
            <a href="mailto:harshit12shukla@gmail.com" title="Email" target="_blank">
                <fa-icon icon="envelope" type="fas" />
            </a>
        </div>
        <div class="made-with">
            <span>made with vue.js</span>
            <span>© Harshit</span>
        </div>
        <div class="red-line"></div>
    </footer>
</template>

<style lang="scss">
.custom-footer {
    background: #000000;
    padding: 1rem;

    &.mobile-view {
        padding: 0.5rem; /* Adjusted padding for mobile view */
        .top {
            flex-direction: column;
            align-items: center;
            text-align: center;
            .logo-container {
                margin-bottom: 0.5rem;
            }
        }
        .button-email-container {
            flex-direction: column; /* Stack button and email vertically on mobile */
            align-items: center;
            gap: 10px; /* Added gap between button and email */
        }
        .download-btn {
            font-size: 1rem; /* Decreased button font size on mobile */
            padding: 6px 12px; /* Adjusted padding for smaller button */
        }
        .email-label,
        .email-link {
            font-size: 1rem; /* Decreased email font size on mobile */
        }
    }

    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem; /* Reduced padding */
        .logo-container {
            display: flex;
            justify-content: center;
            width: 100%;
            text-align: center;
        }
        .button-email-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px; /* Added gap between button and email */
        }
    }

    .social {
        display: flex;
        justify-content: center;
        padding: 0.5rem;
        a {
            color: #505050;
            padding: 0.5rem;
            font-size: 24px;
            &:hover {
                color: #ffffff;
            }
        }
    }

    .made-with {
        background: #1a1a1a;
        padding: 0.75rem;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .red-line {
        width: 100%;
        height: 5px;
        background: #bd0000;
    }

    .download-btn {
        background-color: #1be66c;
        color: white;
        border: none;
        padding: 8px 16px;
        font-family: 'Roboto Mono', monospace;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 5px;
        margin-bottom: 1rem;

        &:hover {
            background-color: #17c059;
        }
    }

    .email-label,
    .email-link {
        color: white;
        font-family: 'Roboto Mono', monospace;
        font-size: 1.25rem;
        display: inline-block;
    }
}

@media (max-width: 768px) {
    .custom-footer {
        .top {
            padding: 0.5rem;
        }
    }
}
</style>
