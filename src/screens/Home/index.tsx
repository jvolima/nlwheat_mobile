import React from 'react';
import { View, KeyboardAvoidingView ,Platform } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList'
import { SigninBox } from '../../components/SigninBox'
import { SendMessageForm } from '../../components/SendMessageForm';
import { styles } from './styles'
import { useAuth } from '../../hooks/auth';

export function Home() {
  const { user } = useAuth()
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding': undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessageList />

        {user ? <SendMessageForm /> : <SigninBox />}
      </View> 
    </KeyboardAvoidingView>   
  )
}