import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/RouterConfig";
import BankDetails from "../Bank/BankDetails";
import Document from "../Document/Document";
import StoreDetails from "../Store/StoreDetails";
import StoreOwner from "../StoreOwner/StoreOwner";

export const REGISTER_PAGE = ['store-details', 'store-owner', 'document', 'bank-details'];

export default function RegisterPage() {

    const [activePage, setActivePage] = useState(0);

    const navigate = useNavigate();

    const onClickNext = () => {
        setActivePage(p => p + 1)
    }

    const onClickBack = () => {
        if (activePage === 0) {
            navigate(ROUTES.Home)
            return
        }
        setActivePage(p => p - 1)
    }

    const getPage = () => {
        switch (activePage) {
            case 0:
                return <StoreDetails
                    onClickNext={onClickNext}
                    onClickBack={onClickBack}
                />
            case 1:
                return <StoreOwner
                    onClickNext={onClickNext}
                    onClickBack={onClickBack}
                />
            case 2:
                return <Document
                    onClickNext={onClickNext}
                    onClickBack={onClickBack}
                />
            case 3:
            default:
                return <BankDetails
                    onClickNext={onClickNext}
                    onClickBack={onClickBack}
                />
        }
    }

    return (
        <>
            {getPage()}
        </>
    )

}