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
    <div>ReviewForm</div>
  )
}
