// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { ChatsObj, ContactType, ProfileUserType } from 'src/types/apps/chatTypes'

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

const data: { chats: ChatsObj[]; contacts: ContactType[]; profileUser: ProfileUserType } = {
  profileUser: {
    id: 11,
    avatar: '/images/valeria.webp',
    fullName: 'Valeria Vidal',
    role: 'Creadora',
    about:
      'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [
    {
      id: 1,
      fullName: 'Carlos Esteban',
      role: '',
      about: '',
      avatar: '/images/avatars/avatar1.png',
      status: 'offline'
    },
    {
      id: 2,
      fullName: 'Adalberto Granzin',
      role: '',
      avatarColor: 'primary',
      about: '',
      status: 'busy'
    },
    {
      id: 3,
      fullName: 'Juan Martínez',
      role: '',
      about: '',
      avatar: '/images/avatars/avatar3.png',
      status: 'busy'
    },
    {
      id: 4,
      fullName: 'Roberto García',
      role: '',
      about: '',
      avatar: '/images/avatars/avatar4.png',
      status: 'online'
    },
    {
      id: 5,
      fullName: 'Luis Hernández',
      role: '',
      avatarColor: 'success',
      about: '',
      status: 'busy'
    },
    {
      id: 6,
      fullName: 'Sal Piggee',
      role: '',
      about: '',
      avatar: '/images/avatars/5.png',
      status: 'online'
    },
    {
      id: 7,
      fullName: 'Miguel Guelff',
      role: '',
      about: '',
      avatar: '/images/avatars/7.png',
      status: 'online'
    },
    {
      id: 8,
      fullName: 'Mauro Elenbaas',
      role: '',
      about: '',
      avatar: '/images/avatars/6.png',
      status: 'away'
    },
    {
      id: 9,
      fullName: 'Alejandro Sánchez',
      role: '',
      avatarColor: 'warning',
      about: '',
      status: 'offline'
    },
    {
      id: 10,
      fullName: 'Diego López',
      role: '',
      avatarColor: 'error',
      about: '',
      status: 'away'
    }
  ],
  chats: [
    {
      id: 1,
      userId: 1,
      unseenMsgs: 1,
      chat: [
        {
          message: '¡Hola! ¿Hay algo en particular que te gustaría ver hoy? 😊',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: '¡Hola Valeria! Me encantó tu último post. ¿Vas a subir algo similar pronto?',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Definitivamente, tengo planeado algo especial para esta semana. ¡Estén atentos! 😉',
          time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Genial, estoy emocionado. ¿Puedo enviarte una solicitud especial?',
          time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Claro, me encanta recibir sugerencias de mis seguidores. Envíame un mensaje privado 😏',
          time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: '¡Perfecto! Te escribo en un momento. Gracias 😊',
          time: 'Mon Dec 10 2018 07:47:10 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        }
      ]
    },
    {
      id: 2,
      userId: 2,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hola, ¿te gustaría un adelanto de mi nuevo contenido exclusivo? 😘',
          time: 'Tue Dec 11 2018 08:00:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: '¡Por supuesto! Siempre espero con ansias tus publicaciones.',
          time: 'Tue Dec 11 2018 08:05:23 GMT+0000 (GMT)',
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Genial, tengo preparado algo muy especial. ¡No te lo pierdas!',
          time: 'Tue Dec 11 2018 08:10:45 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        }
      ]
    }
  ]
}

const reorderChats = (arr: ChatsObj[], from: number, to: number) => {
  const item = arr.splice(from, 1)

  // ** Move the item to its new position
  arr.splice(to, 0, item[0])
}

// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------
mock.onGet('/apps/chat/chats-and-contacts').reply(() => {
  const chatsContacts = data.chats.map((chat: ChatsObj) => {
    const contact = data.contacts.find((c: ContactType) => c.id === chat.userId)

    // @ts-ignore
    contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }

    return contact
  })

  const contactsToShow = data.contacts.filter((co: ContactType) => {
    return !data.chats.some((ch: ChatsObj) => {
      return co.id === ch.id
    })
  })

  const profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status
  }

  return [200, { chatsContacts, contacts: contactsToShow, profileUser: profileUserData }]
})

// ------------------------------------------------
// GET: Return User Profile
// ------------------------------------------------
mock.onGet('/apps/chat/users/profile-user').reply(() => [200, data.profileUser])

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet('/apps/chat/get-chat').reply(config => {
  // Get event id from URL
  let userId = config.params.id

  //  Convert Id to number
  userId = Number(userId)

  const chat = data.chats.find((c: ChatsObj) => c.id === userId)

  if (chat) chat.unseenMsgs = 0
  const contact = data.contacts.find((c: ContactType) => c.id === userId)

  // @ts-ignore
  if (contact.chat) contact.chat.unseenMsgs = 0

  return [200, { chat, contact }]
})

// ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------
mock.onPost('/apps/chat/send-msg').reply(config => {
  // Get event from post data
  const { obj } = JSON.parse(config.data).data

  let activeChat = data.chats.find((chat: ChatsObj) => chat.id === obj.contact.id)

  const newMessageData = {
    senderId: 11,
    time: new Date(),
    message: obj.message,
    feedback: {
      isSent: true,
      isSeen: false,
      isDelivered: false
    }
  }

  // If there's new chat for user create one
  let isNewChat = false

  if (activeChat === undefined) {
    isNewChat = true

    data.chats.push({
      id: obj.contact.id,
      userId: obj.contact.id,
      unseenMsgs: 0,
      chat: [newMessageData]
    })
    activeChat = data.chats[data.chats.length - 1]
  } else {
    activeChat.chat.push(newMessageData)
  }
  const response = { newMessageData, id: obj.contact.id }

  // @ts-ignore
  if (isNewChat) response.chat = activeChat

  reorderChats(
    data.chats,
    data.chats.findIndex(i => i.id === response.id),
    0
  )

  return [201, { response }]
})
