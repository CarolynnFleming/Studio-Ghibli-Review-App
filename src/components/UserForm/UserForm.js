import { useState } from 'react';
import { useForm } from '../../hooks/useForm';


export default function UserForm({ label, onSubmit }) {
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
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>{label}</legend>

            <section>
                <label htmlFor='email'>Email</label>
                <input
                id="email"
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="email"
                />
            </section>
            <section>
                <label htmlFor='password'>Password</label>
                <input
                id="password"
                type="password"
                name="password"
                required
                value={formState.password}
                onChange={handleChange}
                placeholder="password"
                />
            </section>
            <button type="submit" disabled={loading}>{loading ? 'Loading...' : label}
            </button>
        </fieldset>
    </form>
  )
}
