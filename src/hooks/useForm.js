import { useState } from 'react';

export function useForm(inputs = {}) {
    const [formState, setFormState] = useState({ ...inputs });

    const handleChange = (e) => {
        const { username, value, type, checked } = e.target;

    setFormState((prevState) => {
        return {
            ...prevState,
            [username]: type === 'checkbox' ? checked : value
        };
    });
    };
    return { formState, handleChange}
}