import { View, Text, TextInput } from "react-native"
import { Input } from "@/components/input"

import styles  from "./styles"
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { AccountProps } from "@/contexts/AccountFormContext";
import { useAccountForm } from "@/hooks/useAccountForm";


export function RegisterScreen2() {
    const { updateFormData } = useAccountForm();
    const { navigate } = useNavigation();
    const { control, handleSubmit, formState: { errors} } = useForm<AccountProps>();


    function handleNextStep(data: AccountProps) {
        updateFormData(data);
        navigate("register3");
    }


    const phoneRef = useRef<TextInput>(null);
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Suas informações</Text>
            <Input
                error={errors.birth?.message}
                icon="calendar"
                formProps={{
                    control,
                    name: 'birth',
                    rules: {
                        required: 'Data de nascimento é obrigatório',
                        pattern: {
                            value: /^\d{2}\/\d{2}\/\d{4}$/,
                            message: 'Data inválida',
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Data de nascimento',
                    placeholderTextColor: '#fff',
                    onSubmitEditing: () => phoneRef.current?.focus(),
                    returnKeyType: 'next',
                }}
                />
                <Input
                error={errors.phone?.message}
                ref={phoneRef}
                icon="phone"
                formProps={{
                    control,
                    name: 'phone',
                    rules: {
                        required: 'Telefone é obrigatório.',
                        pattern: {
                            value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                            message: 'Telefone inválido',
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Telefone',
                    placeholderTextColor: '#fff',
                    onSubmitEditing: handleSubmit(handleNextStep)
                }}
                />

                <Button title="Continuar" onPress={handleSubmit(handleNextStep)}/>
        </View>
    )
}