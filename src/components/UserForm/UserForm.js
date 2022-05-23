import { useState } from 'react';
import { useForm } from '../../hooks/useForm';


export default function UserForm({ className = '', label, onSubmit }) {
    const { formState, handleChange } = useForm({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = formState;
        try{
            setLoading(true);
            await onSubmit(email, password);
        } catch(error) {
            setLoading(false);
        }
    };
  return (
    <div>UserForm</div>
  )
}
