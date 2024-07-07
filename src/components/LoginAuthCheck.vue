<template>

    <div class="h-full w-full rounded flex flex-col items-center justify-center">
      <div class="flex justify-center mb-3">
          <img src="@/assets/loginnn.png" class="h-20 w-36 rounded" />
      </div>
      <div class="h-auto w-2/3 p-3 rounded border border-lightgrey">

        <div class="py-2 px-4">
          <label>Email :</label>
          <input class="inputboxstyling mt-2" v-model="logindetails.email" :class="{'is-invalid': v$.logindetails.email.$error }"/>
          <div v-if="v$.logindetails.email.$error" class="text-red-500">
              <div class="error-text" v-if="v$.logindetails.email.required.$invalid">Required</div>
              <div v-else-if="v$.logindetails.email.required && v$.logindetails.email.email.$invalid" class="error-text">Email is Invalid</div>
          </div>
        </div>

        <div class="py-2 px-4">
          <label>Password :</label>
          <input class="inputboxstyling mt-2" type="password" v-model="logindetails.password" :class="{'is-invalid': v$.logindetails.password.$error }"/>
          <div v-if="v$.logindetails.password.$error" class="text-red-500">
              <div class="error-text" v-if="v$.logindetails.password.required.$invalid">Required</div>
          </div>
        </div>

        <div class="flex justify-center mt-2">
          <button :class="isEmpty ? 'btndisabled pointer-events-none':'btnprimary'" @click="onCancelBtn()" class="mr-2">Cancel</button>
          <button :class="isEmpty ? 'btndisabled pointer-events-none':'btnprimary'" @click="loginUser()">Login</button>
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
import { required,email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

  export default defineComponent({
    data():any {
    return {
      v$: useVuelidate(),
      logindetails:{
        email:'',
        password:''
      }
    };
  },
  validations(){
    return {
      logindetails:{
        email:{ required,email },
        password:{ required },
      }
    }
  },
  computed:{
    isEmpty: function (): any {
      let result = true;
      let values = Object.values(this.logindetails);
      values.map((val:any)=>{
        val != '' ? result = false:'';
      })
      return result
    }
  },
  methods:{
      async loginUser(){
        this.v$.$touch()
        if(!this.v$.$invalid){
          await this.$http.post(`${process.env.VUE_APP_LOGIN_API_URL}/api/org/login`, this.logindetails).then((res:any)=>{
              if (res.data.status === 200) {
                  toast.info("Successfully Login", {
                      autoClose: 1000,
                  });
                  localStorage.setItem('AUTH_ID', res.data.token);
                  this.onCancelBtn();
              } else {
                  toast.error(res.data.message, {
                      autoClose: 1000,
                  });
              }
          })
          
        }
      },
      onCancelBtn(){
        this.v$.$reset();
        this.logindetails = {
          email: '',
          password: ''
        }
      }
  }
})
</script>