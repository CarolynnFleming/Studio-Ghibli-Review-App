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
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>{formLabel}</legend>
            <section>
                <Label htmlFor="username">Username</Label>
                <input
                id="username"
                username="username"
                type="text"
                placeholder='UserName'
                value={formState.username}
                onChange={handleChange}
                />
            </section>
            <section>
                <label htmlFor="email">Email</label>
                <p>{email}</p>
            </section>
            <button type="submit" disabled={saving}>
                {saving ? 'Saving...' : 'Save'}
            </button>
        </fieldset>
    </form>
  );
}
