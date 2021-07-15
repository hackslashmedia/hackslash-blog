<template>
    <div class="home-nav">
        <ul class="home-nav__list">
            <li class="home-nav__list-item">
                <nuxt-link
                    class="home-nav__link"
                    to="/articles">
                    About
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .home-nav {
        position: relative;
        margin-top: 100px;
        display: flex;
        justify-content: flex-end;
        padding: 0 $spacer-4;
        &__list {
            display: flex;
            &-item {
                list-style-type: none;
            }
        }
        &__link {
            color: $white;
            text-decoration: none;
        }
    }
</style>