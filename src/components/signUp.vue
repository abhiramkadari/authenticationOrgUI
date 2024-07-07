<template>
  <div class="h-full w-full rounded flex flex-col items-center justify-center overflow-y-auto">
      <div class="flex justify-center mb-3">
          <img src="@/assets/signuppp.gif" class="h-20 w-40 rounded" />
      </div>
      
      <div class="h-auto w-2/3 p-3 rounded border border-lightgrey">

        <div class="py-2 px-4">
          <label>User Name :</label>
          <input class="inputboxstyling mt-2" v-model="addUser.name" :class="{'is-invalid': v$.addUser.name.$error }"/>
          <div v-if="v$.addUser.name.$error" class="text-red-500">
              <div class="error-text" v-if="v$.addUser.name.required.$invalid">Required</div>
          </div>
        </div>

        <div class="py-2 px-4">
          <label>Email :</label>
          <input class="inputboxstyling mt-2" v-model="addUser.email" :class="{'is-invalid': v$.addUser.email.$error }"/>
          <div v-if="v$.addUser.email.$error" class="text-red-500">
              <div class="error-text" v-if="v$.addUser.email.required.$invalid">Required</div>
              <div v-else-if="v$.addUser.email.required && v$.addUser.email.email.$invalid" class="error-text">Email is Invalid</div>
          </div>
        </div>

        <div class="py-2 px-4">
          <label>Password :</label>
          <input class="inputboxstyling mt-2" type="password" v-model="addUser.password" :class="{'is-invalid': v$.addUser.password.$error }"/>
          <div v-if="v$.addUser.password.$error" class="text-red-500">
              <div class="error-text" v-if="v$.addUser.password.required.$invalid">Required</div>
          </div>
        </div>

        <div class="flex justify-center mt-2">
          <button :class="isEmpty ? 'btndisabled pointer-events-none':'btnprimary'" @click="cancelFormInformation()" class="mr-2">Cancel</button>
          <button :class="isEmpty ? 'btndisabled pointer-events-none':'btnprimary'" @click="registerUserInfo()">Save</button>
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
import { required,email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { toast } from 'vue3-toastify';

export default defineComponent({
  data():any {
		return {
      v$: useVuelidate(),
      main:false,
      addUser:{
        name:'',
        email:'',
        password:''
      }
		};
	},
  validations(){
    return {
      addUser:{
        name:{ required },
        email:{ required, email },
        password:{ required }
      }
    }
  },
  computed:{
    isEmpty: function (): any {
      let result = true;
      let values = Object.values(this.addUser);
      values.map((val:any)=>{
        val != '' ? result = false:'';
      })
      return result
    }
  },
  methods:{
      async registerUserInfo(){
        this.v$.$touch()
        if(!this.v$.$invalid){
          // console.log(';awjkbdjsvdsjma',this.addUser)
          await this.$http.post(`${process.env.VUE_APP_LOGIN_API_URL}/api/org/signup`,this.addUser).then((res: any) => {  
              if(res.data.status==200){
                toast.info("Succesfully Registered", {
                  autoClose: 1000,
                })
                // this.$router.push({name:'loginPage'});
                this.cancelFormInformation();

              }else if(res.data.status==400){
                toast.info("User Email Already Exists", {
                  autoClose: 1000,
                })
              }
          });
        }else{
          toast.error("Error!", {
            autoClose: 1000,
          })
        }
      },
      cancelFormInformation(){
        this.v$.$reset();
        this.addUser = {
           name: '',
          email: '',
          password: ''
        }
      }
  }
})
</script>