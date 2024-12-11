import { View, Text, TextInput } from "react-native"
import { Input } from "@/components/input"

import styles  from "./styles"
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { AccountProps } from "@/contexts/AccountFormContext";
import { useAccountForm } from "@/hooks/useAccountForm";
import { useNavigation } from "@react-navigation/native";


export function RegisterScreen3() {
    const { navigate } = useNavigation();
    const { updateFormData } = useAccountForm();
    const { control, handleSubmit, formState: { errors}, getValues } = useForm<AccountProps>();


    function handleNextStep(data: AccountProps) {
        updateFormData(data);
        navigate("finish");
    }

    function validatePasswordConfirm(passwordConfirm: string) {
        const { password } = getValues();
        return password === passwordConfirm || 'As senhas não são iguais.'
    }


    const passwordConfirmRef = useRef<TextInput>(null);
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha sua senha</Text>
            <Input
                error={errors.password?.message}
                icon="key"
                formProps={{
                    control,
                    name: 'password',
                    rules: {
                        required: 'Senha é obrigatória.',
                        minLength: {
                            value: 6,
                            message: 'A senha deve ter no mínimo 6 dígitos.'
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Senha',
                    placeholderTextColor: '#fff',
                    onSubmitEditing: () => passwordConfirmRef.current?.focus(),
                    returnKeyType: 'next',
                    secureTextEntry: true
                }}
                />
                <Input
                error={errors.passwordConfirm?.message}
                ref={passwordConfirmRef}
                icon="key"
                formProps={{
                    control,
                    name: 'passwordConfirm',
                    rules: {
                        required: 'Confirme sua senha.',
                        validate: validatePasswordConfirm
                    }
                }}
                inputProps={{
                    placeholder: 'Confirmar senha',
                    placeholderTextColor: '#fff',
                    onSubmitEditing: handleSubmit(handleNextStep),
                    secureTextEntry: true
                }}
                />

                <Button title="Continuar" onPress={handleSubmit(handleNextStep)}/>
        </View>
    )
}