import { View, Text, TextInput } from "react-native"
import { Input } from "@/components/input"

import styles  from "./styles"
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { AccountProps } from "@/contexts/AccountFormContext";
import { useAccountForm } from "@/hooks/useAccountForm";


export function RegisterScreen() {
    const { updateFormData } = useAccountForm();
    const { navigate } = useNavigation();
    const { control, handleSubmit, formState: { errors} } = useForm<AccountProps>();


    function handleNextStep(data: AccountProps) {
        updateFormData(data);
        navigate("register2");
    }


    const emailRef = useRef<TextInput>(null);
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrar-se</Text>
            <Input
                error={errors.name?.message}
                icon="user"
                formProps={{
                    control,
                    name: 'name',
                    rules: {
                        required: 'Nome é obrigatório',
                    }
                }}
                inputProps={{
                    placeholder: 'Nome',
                    placeholderTextColor: '#fff',
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: 'next',
                }}
                />
                <Input
                error={errors.email?.message}
                ref={emailRef}
                icon="mail"
                formProps={{
                    control,
                    name: 'email',
                    rules: {
                        required: 'E-mail é obrigatório',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido',
                        },
                    }
                }}
                inputProps={{
                    placeholder: 'E-mail',
                    placeholderTextColor: '#fff',
                    onSubmitEditing: handleSubmit(handleNextStep)
                }}
                />

                <Button title="Continuar" onPress={handleSubmit(handleNextStep)}/>
        </View>
    )
}