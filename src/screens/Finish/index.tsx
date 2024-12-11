import { View, Text } from "react-native"
import styles from "./styles"
import { useAccountForm } from "@/hooks/useAccountForm"

export function FinishScreen() {

    const { accountFormData } = useAccountForm();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Nome: {accountFormData.name}
            </Text>
            <Text style={styles.title}>
                Email: {accountFormData.email}
            </Text>
            <Text style={styles.title}>
                Data de nascimento: {accountFormData.birth}
            </Text>
            <Text style={styles.title}>
                Telefone: {accountFormData.phone}
            </Text>
            <Text style={styles.title}>
                Senha: {accountFormData.password} | {accountFormData.passwordConfirm}
            </Text>
        </View>
    )
}