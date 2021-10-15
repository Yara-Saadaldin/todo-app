import {useForm} from 'react-hook-form';
import{Input} from '../input-field';

import {useForm} from 'react-hook-form';
import "./styles.css"

export const NewTodoForm = () => {
    const{register,handleSubmit, formState: {errors} }= useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
}

export const NewTodoForm = () => {
    const{register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log()
    }

    return (
        <form onSubmit={handleSubmit()}>
            {/* Add input fields */}
            <input type="text"
                   name="title"
                   label="Todo (e.g do laundry)"
                   errors={errors}
                   register={register}
                   validationSchema={
                       {
                           required:"Todo text is required",
                           minLength:{
                               value:3,
                               message: "please enter at least 3 characters"
                           }
                       }
                    }
                       required
                />
            
            <input type ="date"
                    name="date"
                    label="Due date"
                    errors={errors}
                    register={register}
                    validationSchema={
                        {
                            required:"Todo date is required",
                            minLength:{
                                value:3,
                                message: "please enter at least 3 characters"
                            }
                        }
                    }
                        required
                />

                <input type="submit"/>

        </form>
    )
}