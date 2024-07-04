<template>
    <div class="totalBody">
        <div class="flex items-center justify-center text-white h-12 bg-primary"><p>ASIAN LABS</p></div>
        <div class="downBody">
            <div class="sideNav">
                <!-- <p @click="changeRoute('login')" class="comps h-1">LOGIN</p>
                <p @click="changeRoute('authCheck')" class="comps">AUTH CHECK</p> -->
                <div class="cursor-pointer h-8 pl-2 flex items-center" @click="changeRoute(obj.pageName,index)" :class="selectedPageIndex == index ? 'bg-white text-black':'text-white hover:bg-white hover:text-black'" v-for="(obj,index) in pages" :key="obj">
                    <p class="text-sm font-semibold">{{obj.pageDisplayName}}</p>
                </div>
            </div>
            <div class="component">
                <slot />
            </div>
        </div>
    </div>
</template>
<style scoped>

/* .comps:hover{
    background-color: white;
    color: black;
} */
.totalBody{
    height: 100vh;
    width: 100%;
    /* border: 1px solid black; */
}
.downBody{
    height: 90%;
    display: flex;
}
.sideNav{
    width: 180px;
    background-color: #152a43;
}
.component{
    height: 100%;
    width: 100%;
    background-color: #F9F9FB;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
   export default defineComponent({
    data() {
		return {
			isToggling: true,
			appsVisible:false,
            selectedPageIndex:0,
            pages:[
                {
                    pageName:'login',
                    pageDisplayName:'SIGN UP'
                },
                {
                    pageName:'authCheck',
                    pageDisplayName:'LOGIN'
                }
            ]
		};
	},
    methods:{
        changeRoute(routeName:any,num:any){
            this.selectedPageIndex = num
            this.$router.push({name:routeName});
        }
    }
   })
</script>