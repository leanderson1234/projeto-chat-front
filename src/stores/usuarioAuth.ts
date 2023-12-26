import { defineStore } from "pinia";
import {ref,computed} from 'vue'
export const usuarioAuth = defineStore("usuarioAuth",() =>{
  let usuario = ref({})
  function setUsuarioAuth(auth:any){
    console.log('auth',auth)
    usuario = auth
  }
  const getUsuarioAuth = computed(() => usuario)
  return {
    setUsuarioAuth,
    getUsuarioAuth
  }
})