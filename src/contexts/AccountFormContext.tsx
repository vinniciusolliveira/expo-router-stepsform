import { createContext, useState } from "react";

export type AccountProps = {
    name?: string,
    email?: string,
    password?: string
    passwordConfirm?: string,
    phone?: string,
    birth?: string
}

type AccountFormContextDataProps = {
    accountFormData: AccountProps,
    updateFormData: (value: AccountProps) => void
}

type AccountFormContextProviderProps = {
    children: React.ReactNode
}

const AccountFormContext = createContext<AccountFormContextDataProps>({} as AccountFormContextDataProps);

 function AccountProvider({ children }: AccountFormContextProviderProps) {

    const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps);

    function updateFormData(data: AccountProps) {
        setAccountFormData(prevState => ({ ...prevState, ...data }));
    }
    return (
        <AccountFormContext.Provider value={{ accountFormData, updateFormData }}>
            {children}
        </AccountFormContext.Provider>
    )
}

export { AccountFormContext, AccountProvider }