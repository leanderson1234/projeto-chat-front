import { reactive } from 'vue'
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  testeEvents: []
})

const URL =  "http://localhost:3000"

export const socket = io(URL,{
  autoConnect: true
})

// socket.on('connect',() =>{
//   state.connected = true
  
//   console.log('chamou')
// })
// socket.on('disconnect',() =>{
//   state.connect = false
// })

// socket.on('teste', (...args:any) =>{
//   state.testeEvents.push(args)
// })