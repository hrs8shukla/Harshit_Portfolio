<template>
    <nav class="top-nav px-3 py-4 d-flex justify-content-between align-items-center">
        <router-link class="nav-logo d-flex align-items-center" to="/">
            <img src="/img/hs.svg" />
        </router-link>
        <div v-if="$bp.smAndUp" class="links">
            <router-link class="px-2" to="/about">About</router-link>
            <router-link class="px-2" to="/skills">Skills</router-link>
            <router-link class="px-2" to="/works">Works</router-link>
            <router-link class="px-2" to="/experience">Experience</router-link>
            <router-link class="px-2" to="/contact">Contact</router-link>
        </div>
    </nav>
</template>

<style lang="scss">
.nav-logo {
    display: flex;
    align-items: center;
    img {
        height: calc(1.5rem + 2vw);
        min-height: 35px;
        margin-right: 10px;
        margin-left: 40px;
    }
}

.top-nav {
    background: var(--nav-bg);
    padding: 0 1rem;

    .links {
        .px-2 {
            text-decoration: none !important;
            color: white;
            font-family: 'Roboto Mono';
            font-size: 1.2rem;
            position: relative;
            padding-bottom: 2px;
            transition: color 0.3s ease;

            &:hover {
                color: #1be66c;
            }

            &:hover::after {
                width: 100%;
            }

            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 2px;
                background-color: #1be66c;
                transition: width 0.3s ease;
            }
        }
    }
}
</style>
