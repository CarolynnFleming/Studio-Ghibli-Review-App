import { useState } from 'react';
import { useForm } from '../../hooks/useForm';


export default function UserForm({ className = '', label, onSubmit }) {
    const { formState, handleChange } = useForm({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false);
  return (
    <div>UserForm</div>
  )
}
