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

    
  return (
    <div>ReviewForm</div>
  )
}
