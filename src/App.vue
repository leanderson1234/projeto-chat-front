<script>
  import { useConnectionStore } from "./stores/connection";
  import { socket } from "./socket";
  import Chat from "./components/Chat.vue";
  import ConnectionManagerVue from "./components/ConnectionManager.vue";
  import {auth} from './services/keycloak'
  import { ref, onMounted,nextTick } from 'vue'
export default {
  setup(){
    const connectionStore = useConnectionStore();
    let authenticated = ref(false)
    async function logout(){
      let keycloakInstance = await auth()
      if(keycloakInstance.keycloak?.authenticated){
        authenticated.value = !keycloakInstance.keycloak?.authenticated
        await nextTick()
        keycloakInstance.keycloak.logout()
      }
        }

     async function login(){
      let keycloakInstance = await auth()
      if(!keycloakInstance.keycloak?.authenticated){
         authenticated.value = keycloakInstance.keycloak?.authenticated
         await nextTick()
        keycloakInstance.keycloak.login()
      }
        }
    connectionStore.bindEvents();

  //   onMounted(async () => {
  //  let autenticado = (await auth()?.init())
  //   if(!autenticado){
   
  //   }
  //   })


    return {
      logout,
      login,
      authenticated
    }
  }
}
</script>
<template>
<div>
  <ConnectionManagerVue />
  <Chat/>
  {{authenticated}}
   <button @click.stop.prevent="login" v-show="!authenticated">entrar</button>
  <button @click.stop.prevent="logout" v-show="authenticated">sair</button>
</div>
</template>
