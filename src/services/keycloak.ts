
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
      onLoad:'check-sso'
    })
    if(authenticado){
      usuarioAuth().setUsuarioAuth(keycloak.tokenParsed)
    }
      return {
        keycloak,
        
       
     }

}