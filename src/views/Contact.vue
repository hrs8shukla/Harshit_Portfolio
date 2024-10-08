<template>
    <div class="curvy-bg">
        <div class="contact col-12 col-sm-10 col-lg-8 pt-5 mx-auto">
            <h1>Contact</h1>
            <div class="d-flex flex-column flex-md-row">
                <div class="mt-2 col-12 col-md-6 p-0 d-flex flex-column justify-content-between">
                    <div class="contacts mb-5 mb-md-0">
                        <a
                            href="mailto:harshit12shukla@gmail.com"
                            @click="copyToClipboard('harshit12shukla@gmail.com', 'email')"
                        >
                            <fa-icon icon="at" type="fas" />
                            <span class="ml-3">harshit12shukla@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/hrs8shukla/" target="_blank">
                            <fa-icon icon="linkedin" type="fab" />
                            <span class="ml-3">Harshit Shukla</span>
                        </a>
                        <a href="https://www.instagram.com/scienceKari/">
                            <fa-icon icon="instagram" type="fab" />
                            <span class="ml-3">sciencekari</span>
                        </a>
                    </div>
                    <div class="contacts">
                        <h5 class="font-weight-bold">Profiles</h5>
                        <a href="https://github.com/hrs8shukla" target="_blank">
                            <fa-icon icon="github" type="fab" />
                            <span class="ml-3">hrs8shukla</span>
                        </a>
                        <a href="https://leetcode.com/u/hrs8shukla/" target="_blank">
                            <fa-icon icon="code" type="fas" />
                            <span class="ml-3">hrs8shukla</span>
                        </a>
                        <a href="https://stackoverflow.com/users/14517033/harshit-shukla" target="_blank">
                            <fa-icon icon="stack-overflow" type="fab" />
                            <span class="ml-3">user:14517033 (harshit-shukla)</span>
                        </a>
                    </div>
                </div>
                <div
                    :class="[
                        'contact-form-wrapper',
                        'col-12 col-md-6 p-0',
                        'd-flex align-items-center flex-column',
                        'justify-content-center justify-content-md-end'
                    ]"
                >
                    <h6 class="px-3">Leave a message</h6>
                    <div id="contact-form" :class="{ 'w-100': $bp.smAndDown }">
                        <div class="form--group">
                            <input type="text" id="name" class="form--field" v-model="name" />
                            <label for="name" class="form--label">Name</label>
                            <span class="input-error" v-if="errors && errors.name">{{ errors.name }}</span>
                        </div>
                        <div class="form--group">
                            <input type="email" id="email" class="form--field" v-model="email" />
                            <label for="email" class="form--label">Email</label>
                            <span class="input-error" v-if="errors && errors.email">{{ errors.email }}</span>
                        </div>
                        <div class="form--group">
                            <textarea rows="2" id="message" class="form--field" v-model="message"></textarea>
                            <label for="message" class="form--label">Message</label>
                            <span class="input-error" v-if="errors && errors.message">{{ errors.message }}</span>
                        </div>
                        <div class="form--group">
                            <button class="send" @click="submitForm" :disabled="loading">
                                <template v-if="loading">
                                    Sending
                                    <fa-icon icon="spinner" type="fas" size="lg" class="fa-spin" />
                                </template>
                                <template v-else>
                                    Send
                                </template>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { isEmail, isLength, isEmpty, trim } from 'validator';
import emailjs from 'emailjs-com'; // Import EmailJS
import loader from '@/mixins/loader';

export default {
    mixins: [loader],
    setup() {
        function copyToClipboard(text, type) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                let message = type === 'email' ? `Email ID copied to clipboard` : null;
                alert(message); // Replace this with your notification method if you have one
            }
        }

        const name = ref('');
        const email = ref('');
        const message = ref('');
        const errors = ref({});
        const loading = ref(false);

        // Watchers to reset validation on user input
        watch([name, email, message], () => {
            errors.value.name = null;
            errors.value.email = null;
            errors.value.message = null;
        });

        async function submitForm() {
            errors.value.name = isEmpty(name.value) ? 'Name Required' : null;
            errors.value.email = isEmpty(email.value)
                ? 'Email Required'
                : isEmail(email.value)
                ? null
                : 'Invalid Email';
            errors.value.message = isEmpty(message.value)
                ? 'Message Required'
                : isLength(message.value, { min: 10 })
                ? null
                : 'Too short.';

            if (errors.value.name || errors.value.email || errors.value.message) {
                alert('All Fields Required.'); // Replace this with your notification method if you have one
                return;
            }
            // END Validation

            loading.value = true;
            // Send email using EmailJS
            emailjs
                .send(
                    process.env.VUE_APP_PROJECT_ID,
                    process.env.VUE_APP_TEMPLATE_ID,
                    {
                        from_name: trim(name.value),
                        from_email: trim(email.value),
                        message: trim(message.value)
                    },
                    process.env.VUE_APP_USER_ID
                )
                .then(response => {
                    console.log('EmailJS Response:', response);
                    alert('Message sent successfully!');
                    name.value = '';
                    email.value = '';
                    message.value = '';
                })
                .catch(error => {
                    console.error('EmailJS Error:', error);
                    alert('Failed to send message. Please check the console for more details.');
                })
                .finally(() => {
                    loading.value = false;
                });
        }

        return { name, email, message, errors, submitForm, loading, copyToClipboard };
    }
};
</script>

<style lang="scss">
.contact {
    h1 {
        font-weight: bold;
        color: white;
    }
    .contacts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
            color: white;
            padding: 0.35rem;
            padding-left: 0px;
            display: flex;
            align-items: center;
            text-decoration: none;
            cursor: pointer;
            .fa-icon {
                font-size: 20px;
            }

            &:hover {
                color: #cacaca;
            }
        }
    }
}
.contact-form-wrapper {
    #contact-form,
    h6 {
        max-width: 400px;
        width: 100%;
    }
}
#contact-form {
    display: flex;
    flex-direction: column;
    background: #1f1f1f;
    padding: 1.2rem 2rem;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #0b0b0b70;

    .form--group {
        position: relative;
        padding: 15px 0px;
    }
    .form--field,
    .send {
        width: 100%;
        border: 0px;
        font-size: 0.9rem;
        padding: 1rem;
        outline: 0px;
        background: #0f0f0f;
        color: #ffffff;
        border-radius: 10px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    }
    .form--label {
        position: absolute;
        left: 0px;
        top: 0px;
        font-weight: bold;
        margin: 0px;
        font-size: 0.9rem;
        left: 20px;
        top: 0.2rem;
        color: #b5b5b5;
    }
    textarea {
        resize: none;
    }
    .send {
        background: #08a045;
        min-height: 55px;
        &:active {
            box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.5), inset -4px -2px 10px rgba(5, 255, 105, 0.4) !important;
            font-size: 0.87rem;
        }
        &:disabled,
        &[disabled],
        &:disabled:active {
            font-size: 0.9rem;
            box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2) !important;
            opacity: 0.7;
        }
    }
    .input-error {
        position: absolute;
        max-width: 70%;
        right: 5%;
        background: red;
        top: 0px;
        border-radius: 10px;
        font-size: 0.7rem;
        padding: 0.3rem;
        z-index: 5;
    }
}

.contact-form-wrapper {
    margin-top: 5rem !important;
}

@media (min-width: 768px) {
    .contact-form-wrapper {
        margin-top: -3rem !important;
    }
}
</style>
