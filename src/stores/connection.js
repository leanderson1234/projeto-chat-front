import { defineStore } from "pinia";
import { socket } from "../socket";

export const useConnectionStore = defineStore("connection", {
  state: () => ({
    isConnected: false,
  }),

  actions: {
    bindEvents() {
      socket.on("connect", () => {
        this.isConnected = true;
        console.log('chamou connect')
      });

      // socket.on("disconnect", () => {
      //   this.isConnected = false;
      //   console.log('chamou disconnect')
      // });
      // escutar evento back-end
      socket.on("testeBack", (data) => {
        this.isConnected = true;
        console.log('recebendo de volta dados emitidos do evento game que retorna um evento testeBack',data)
      });
    },

    connect() {
      socket.connect();
    }
  },
});