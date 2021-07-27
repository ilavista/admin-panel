<template>
    <div id="admin-panel-left-menu">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
        <div class="menu">
            <div class="d-flex" v-for="link in links">
                <router-link
                    :to="link.link"
                >
                    {{ link.name }}
                </router-link>
            </div>
        </div>
        <div class="exit-link">
            <router-link
                to="/logout"
            >
                Выйти
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['logo', 'links'],
    data () {
        return {

        }
    }
}
</script>