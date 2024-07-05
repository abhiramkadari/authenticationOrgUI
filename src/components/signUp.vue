<template>
  <div class="h-full w-full rounded flex flex-col items-center justify-center">
      <div class="flex justify-center mb-3">
          <img src="@/assets/signuppp.gif" class="h-20 w-40 rounded" />
      </div>
      <div class="h-auto w-2/3 p-3 rounded border border-lightgrey">
        <div class="py-2 px-4">
          <label>User Name :</label>
          <input class="inputboxstyling mt-2" v-model="addUser.name"/>
        </div>
        <div class="py-2 px-4">
          <label>Email :</label>
          <input class="inputboxstyling mt-2" v-model="addUser.email"/>
        </div>
        <div class="py-2 px-4">
          <label>Password :</label>
          <input class="inputboxstyling mt-2" type="password" v-model="addUser.password"/>
        </div>
        <div class="flex justify-center mt-2">
          <button @click="saveUser()" class="btnprimary">Save</button>
        </div>
      </div>
    </div>
    

</template>
<style scoped>
.contain{
  height: 300px;
  width: 300px;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
   export default defineComponent({
    data() {
		return {
      main:false,
      addUser:{
        name:'',
        email:'',
        password:''
      }
		};
	},
    methods:{
        saveUser(){
          console.log(';awjkbdjsvdsjma',this.addUser)
        }
    }
   })
</script>