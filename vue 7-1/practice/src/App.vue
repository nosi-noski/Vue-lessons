<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col col-sm-9">
                        <h1>Site</h1>

                    </div>
                    <div class="col col-sm-3">
                        <div class="alert alert-default">
                            <div>In Cart: {{lengthInCart}}</div>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </header>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col col-sm-3 menu">
                    
                        <ul class="list-roup">
                            
                            <router-link v-for="(item, index) in menuList"
                                        :key="index" 
                                        :to="item.url"
                                        tag="li"
                                        class="list-group-item"
                                        active-class="active"
                            >
                                <a>{{item.text}}</a>
                            </router-link>
                        </ul>
                    </div>
                    <div class="col col-sm-9">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import  {mapGetters} from 'vuex';
export default {
   
    computed: {
        ...mapGetters( 'menu', {
            menuList: 'items'
        }),
        
        ...mapGetters( 'cart', { 
            lengthInCart: 'cnt'
        })
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .menu{
        border-right: 1px solid #ddd;
    }
    
    .list-group-item{
        transition: background 0.3s, color 0.3s;
    }

    .list-group-item a{
        text-decoration: none;
    }

    .list-group-item.active a{
        color: inherit;
    }

</style>
