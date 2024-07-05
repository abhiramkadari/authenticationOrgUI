<template>

    <div class="h-full w-full rounded flex flex-col items-center justify-center">
      <div class="flex justify-center mb-3">
          <img src="@/assets/loginnn.png" class="h-20 w-36 rounded" />
      </div>
      <div class="h-auto w-2/3 p-3 rounded border border-lightgrey">
        <div class="py-2 px-4">
          <label>Email :</label>
          <input class="inputboxstyling mt-2" v-model="logindetails.email"/>
        </div>
        <div class="py-2 px-4">
          <label>Password :</label>
          <input class="inputboxstyling mt-2" type="password" v-model="logindetails.password"/>
        </div>
        <div class="flex justify-center mt-2">
          <button @click="loginUser()" class="btnprimary">Login</button>
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
import { toast } from 'vue3-toastify';

  export default defineComponent({
    data() {
    return {
      logindetails:{
        email:'',
        password:''
      }
    };
  },
    methods:{
        loginUser(){
          console.log(';awjkbdjsvdsjma',this.logindetails)
          toast("Updated!", {
            autoClose: 1000,
          })
        }
    }
})
</script>