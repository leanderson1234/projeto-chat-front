
import Keycloak from 'keycloak-js';
import { usuarioAuth } from '../stores/usuarioAuth';
let keycloak:Keycloak
export const auth = async () => {
  keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'sistema',
        clientId: 'Sistema_chat'
      });
     const authenticado = await keycloak.init({
      onLoad:'login-required'
    })
    if(authenticado){
      usuarioAuth().setUsuarioAuth(keycloak.tokenParsed)
    }
      return {
        keycloak,
        
        // init: async () => {
        //   const authenticado = await keycloak.init({
        //     onLoad:'login-required'
        //   })
        //   if(authenticado){
        //     usuarioAuth().setUsuarioAuth(keycloak.tokenParsed)
        //   }
        // }
     }

}