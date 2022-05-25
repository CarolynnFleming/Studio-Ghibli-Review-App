import { useState } from 'react';
import { useForm } from '../../hooks/useForm';


export default function ReviewForm({
    review = {},
    label = 'Review',
    onSubmit,
}) {

    const { movie ='', thoughts = '', } = review;
    const { formState, handleChange } = useForm({ movie, thoughts });
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
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
            <legend>{label}</legend>
            <section>
                <label htmlFor='name'>Movie</label>
                <input
                id="movie"
                name="movie"
                type="text"
                placeholder='Film Title'
                value={formState.movie}
                onChange={handleChange}
                />
            </section>
            <section>
                <label htmlFor='name'>Review</label>
                <textarea
                id="thoughts"
                name="thoughts"
                type="text"
                placeholder='Write Review'
                value={formState.thoughts}
                onChange={handleChange}
                rows={10}
                />
            </section>
            <button type="submit" disabled={saving}>
                {saving ? 'Saving...' : 'Save'}
            </button>
        </fieldset>
    </form>
  );
}
