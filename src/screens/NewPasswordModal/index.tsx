import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';
import styles from './styles.ts';
import {getColors} from '../../theme';

const NewPasswordModal: React.FC = () => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme!);

  const [modalVisible, setModalVisible] = useState(false);

  const websiteRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const noteRef = useRef<TextInput>(null);

  const openModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      websiteRef.current?.focus();
    }, 200);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={modalVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1, backgroundColor: colors.background}}>
          <View style={styles.header}>
            <Pressable onPress={closeModal}>
              <Text style={styles.cancelText}>Скасувати</Text>
            </Pressable>
            <Text style={[styles.title, {color: colors.text}]}>
              Новий пароль
            </Text>
            <Text style={[styles.saveText, {opacity: 0.4}]}>Зберегти</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled">
            <View
              style={[
                styles.card,
                {
                  borderColor: colors.border,
                  backgroundColor: colors.cardBackground,
                },
              ]}>
              <TextInput
                ref={websiteRef}
                style={[
                  styles.input,
                  {backgroundColor: colors.inputBackground},
                ]}
                placeholder="Вебсайт чи мітка"
                returnKeyType="next"
                onSubmitEditing={() => usernameRef.current?.focus()}
              />
              <View
                style={[styles.separator, {backgroundColor: colors.border}]}
              />
              <TextInput
                ref={usernameRef}
                style={[
                  styles.input,
                  {backgroundColor: colors.inputBackground},
                ]}
                placeholder="Ім’я користувача"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <View
                style={[styles.separator, {backgroundColor: colors.border}]}
              />
              <TextInput
                ref={passwordRef}
                style={[
                  styles.input,
                  {backgroundColor: colors.inputBackground},
                ]}
                placeholder="Пароль"
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => noteRef.current?.focus()}
              />
              <View
                style={[styles.separator, {backgroundColor: colors.border}]}
              />
              <TextInput
                ref={noteRef}
                style={[
                  styles.input,
                  {backgroundColor: colors.inputBackground, minHeight: 60},
                ]}
                placeholder="Нотатки"
                multiline
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>

      <Pressable style={styles.button} onPress={openModal}>
        <SFSymbol
          name="plus"
          color={colors.primary}
          size={20}
          resizeMode="center"
          multicolor={false}
        />
      </Pressable>
    </>
  );
};

export default NewPasswordModal;
