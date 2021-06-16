<template>
    <header class="site-header">
        <nuxt-link to="/">
            <div class="site-header__brand">
                <div class="site-header__logo-block">
                    <BlockLogo class="site-header__logo-image"/>
                </div>
                <div class="site-header__logo-one-line">
                    <OneLineLogo class="site-header__logo-image"/>
                </div>
            </div>
        </nuxt-link>
    </header>
</template>

<script>
import BlockLogo from '../images/BlockLogo.vue';
import OneLineLogo from '../images/OneLineLogo.vue';

export default {
    components: {
        OneLineLogo,
        BlockLogo,
    },
};
</script>

<style lang="scss" scoped>

.site-header {
    background-color: $white;
    padding: $spacer-3 $spacer-5;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
    @include breakpoint(md) {
        height: 100px;
    }
    &__brand {
        position: relative;
        display: flex;
        align-items: center;
    }
    &__logo {
        &-block {
            height: 122px;
            margin-top: 90px;
            margin-right: $spacer-4;
        }
        &-one-line {
            height: 40px;
        }
        &-image {
            height: 100%;
        }
    }
}
</style>