import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const  router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/list',
            meta:{
                title:''
            }
        }
    ]
});

router.beforeEach((to,from,next)=>{
    window.document.title= to.meta.title;
    next();
});

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
})

export default router;