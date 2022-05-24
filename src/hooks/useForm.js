import { useState } from 'react';

export function useForm(inputs = {}) {
    const [formState, setFormState] = useState({ ...inputs });

    
}