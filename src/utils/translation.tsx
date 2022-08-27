import { FormattedMessage } from "react-intl";
import lang from "../../public/locales/vi/lang.json";

export const t = (
    key: NestedKeyOf<typeof lang>,
    values?: Record<string, any>
) => {
    return <FormattedMessage id={key} values={values} />;
};
