import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function ProfileForm({
    formLabel = 'Profile Form',
    username = '',
    email,
    onSubmit,
}) {

    const { formState, handleChange } = useForm({ username, email });
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setSaving(true);
            await onSubmit(formState);
        }
        catch(err) {
            setSaving(false);
        }
    };
    
  return (
    <div>ProfileForm</div>
  )
}
