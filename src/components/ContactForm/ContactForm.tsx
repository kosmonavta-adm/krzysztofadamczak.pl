import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '@/components/Button/Button.styles';

import * as sForm from '@/components/ContactForm/ContactForm.styles';
import FormError from '../FormError/FormError';

export const ContactForm = () => {
    const [isSend, setIsSend] = useState(false);

    const requiredError = 'Pole nie może być puste';
    const emailError = 'Adres e-mail jest nieprawidłowy';
    const minimalLengthError = 'Zanim wyślesz, musisz coś napisać :-)';

    const formSchema = yup.object().shape({
        replyTo: yup.string().email(emailError).required(requiredError),
        name: yup.string().required(requiredError),
        message: yup.string().required(requiredError).min(32, minimalLengthError),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });

    const startTime = performance.now();

    const sendForm = (data) => {
        setIsSend(true);
        const endTime = performance.now();
        const timeFromRenderToSend = endTime - startTime;
        const body = JSON.stringify({
            ...data,
            timeFromRenderToSend,
        });
        fetch('/api/form', {
            method: 'POST',
            body,
        });
        console.log(timeFromRenderToSend);
        console.log(data);
        // fetch
    };

    return (
        <sForm.Wrapper
            onSubmit={handleSubmit(sendForm)}
            // action="/api/form"
            // method="post"
        >
            <sForm.InputWrapper>
                <sForm.Label htmlFor="replyTo">Twój adres e-mail</sForm.Label>
                <sForm.Input
                    {...register('replyTo')}
                    id="replyTo"
                    error={Boolean(errors.replyTo?.message)}
                />
                {errors.replyTo?.message && <FormError error={errors.replyTo.message} />}
            </sForm.InputWrapper>
            <sForm.InputWrapper>
                <sForm.Label htmlFor="name">Imię i nazwisko / nazwa firmy</sForm.Label>
                <sForm.Input
                    {...register('name')}
                    id="name"
                    error={Boolean(errors.name?.message)}
                />
                {errors.name?.message && <FormError error={errors.name.message} />}
            </sForm.InputWrapper>
            <sForm.InputWrapper>
                <sForm.Label htmlFor="message">Wiadomość</sForm.Label>
                <sForm.Textarea
                    {...register('message')}
                    id="message"
                    rows={8}
                    error={Boolean(errors.message?.message)}
                />
                {errors.message?.message && <FormError error={errors.message.message} />}
            </sForm.InputWrapper>
            <Button
                type="submit"
                // {...(isSend && { disabled: true })}
            >
                Wyślij
            </Button>
        </sForm.Wrapper>
    );
};

export default ContactForm;
