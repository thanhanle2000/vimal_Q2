import queryString from "query-string";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setDataLocalStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Lỗi:", error);
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDataLocalStorage = (key: string): any | null => {
    try {
        const serializedValue = localStorage.getItem(key);

        if (serializedValue === null) return null;

        return JSON.parse(serializedValue);
    } catch (error) {
        console.error("Lỗi:", error);
        return null;
    }
};

// CLEAR DATA FROM LOCAL
export const clearDataFromLocal = (key: string) => {
    try {
        localStorage?.removeItem(key);
    } catch (error) {
        console.error(`Lỗi: ${error}`);
    }
}

// USE UPDATE URL PARAMS
export const useUpdateUrlParams = () => {
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateUrlParamsAndNavigate = (path: string, params: Record<string, any>) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        navigate(`${path}?${queryString.stringify(params)}`, { replace: true });
    };

    return updateUrlParamsAndNavigate;
};