import { Button, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import demoMachine from "../machines/demoMachine";
import { increase } from "../redux/slices/demoSlice";
import { RootState } from "../redux/store";
import { t } from "../utils/translation";

const Index = () => {
    const { count } = useSelector((state: RootState) => state.demo);
    const { colorMode, toggleColorMode } = useColorMode();
    const dispatch = useDispatch();
    const [current, send] = useMachine(demoMachine);
    const { locale } = useRouter();

    const toggleLangue = () => {
        // const currentLang = i18n.language;
        // if (currentLang === "vi") i18n.changeLanguage("en");
        // else i18n.changeLanguage("vi");
    };

    console.log("colorMode: " + colorMode);

    return (
        <HStack>
            <Heading>{t("hello", { name: "Demo" })}</Heading>

            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
                {colorMode} - Toggle Mode
            </Button>

            <Button
                size="sm"
                colorScheme="green"
                onClick={() => {
                    toggleLangue();
                }}
            >
                Language: {locale}
            </Button>

            <Button
                size="sm"
                colorScheme="orange"
                onClick={() => {
                    dispatch(increase({}));
                }}
            >
                Redux: Increase count: {count}
            </Button>

            <Button
                onClick={() => send("TOGGLE")}
                size="sm"
                colorScheme="purple"
            >
                Xstate:{" "}
                {current.value === "inactive"
                    ? "Click to activate"
                    : "Active! Click to deactivate"}
            </Button>
        </HStack>
    );
};

export default Index;
