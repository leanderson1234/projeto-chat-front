<script>
  import { useConnectionStore } from "./stores/connection";
  import { socket } from "./socket";
  import Chat from "./components/Chat.vue";
  import ConnectionManagerVue from "./components/ConnectionManager.vue";
  import {auth} from './services/keycloak'
  import { ref, onMounted } from 'vue'
export default {
  setup(){
    const connectionStore = useConnectionStore();
    // remove any existing listeners (after a hot module replacement)
    const logout = async () => {
      // if((await auth()).keycloak.authenticated){
      //   (await auth()).keycloak.logout()
      // }
      (await auth()).keycloak.logout()
        }
    connectionStore.bindEvents();

  //   onMounted(async () => {
  //  let autenticado = (await auth()?.init())
  //   if(!autenticado){
   
  //   }
  //   })


    return {
      logout
    }
  }
}
</script>
<template>
<div>
  <ConnectionManagerVue />
  <Chat/>
  <button @click="logout">sair</button>
</div>
</template>
