const {createApp} = Vue
const contacts = [
  {
      name: 'Michele',
      avatar: './img/avatar_1.png',
      visible: true,
      messages: [
          {
              date: '10/01/2020 15:30:55',
              messageU: 'Hai portato a spasso il cane?',
              status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              messageU: 'Ricordati di stendere i panni',
              status: 'sent'
          },
          {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
          }
      ],
  },
  {
      name: 'Fabio',
      avatar: './img/avatar_2.png',
      visible: true,
      messages: [
          {
              date: '20/03/2020 16:30:00',
              messageU: 'Ciao come stai?',
              status: 'sent'
          },
          {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
          },
          {
              date: '20/03/2020 16:35:00',
              messageU: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
          },
          {
              date: 'date.now',
              messageU:'ciao',
              status :'sent',
          }
      ],
  },
  {
      name: 'Samuele',
      avatar: './img/avatar_3.png',
      visible: true,
      messages: [
          {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
          },
          {
              date: '28/03/2020 10:20:10',
              messageU: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
          },
          {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
          }
      ],
  },
  {
      name: 'Alessandro B.',
      avatar: './img/avatar_4.png',
      visible: true,
      messages: [
          {
              date: '10/01/2020 15:30:55',
              messageU: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
          }
      ],
  },
  {
      name: 'Alessandro L.',
      avatar: './img/avatar_5.png',
      visible: true,
      messages: [
          {
              date: '10/01/2020 15:30:55',
              messageU: 'Ricordati di chiamare la nonna',
              status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
          }
      ],
  },
  {
      name: 'Claudia',
      avatar: './img/avatar_5.png',
      visible: true,
      messages: [
          {
              date: '10/01/2020 15:30:55',
              messageU: 'Ciao Claudia, hai novità?',
              status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
          },
          {
              date: '10/01/2020 15:51:00',
              messageU: 'Nessuna nuova, buona nuova',
              status: 'sent'
          }
      ],
  },
  {
      name: 'Federico',
      avatar: './img/avatar_7.png',
      visible: true,
      messages: [
          {
              date: '10/01/2020 15:30:55',
              messageU: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
          }
      ],
  },
  {
      name: 'Davide',
      avatar: './img/avatar_8.png',
      visible: true,
      messages: [
          {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
          },
          {
              date: '10/01/2020 15:50:00',
              messageU: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
          },
          {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
          }
      ],
  }
]

createApp({
  data() {
    return {
      contacts,
      messages: [],
      testVar:''
    }
  },
  methods: {
    contactClick(contact) {
      this.messages = contact.messages
    },
    submit(text){
      console.log(this.testVar)
    },
    testVar(){
      this.testVar.push(testVar) = messageU
    }
  }
}).mount('#app')

