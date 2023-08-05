import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const newmessages = () => {
  const [messages, setMessages] = useEffect([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = (messages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

export default newmessages
