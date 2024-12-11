import { AccountProvider } from "@/contexts/AccountFormContext";
import { Routes } from "@/routes";

export default function App() {
    return (
        <AccountProvider>
            <Routes />
        </AccountProvider>
    );
}