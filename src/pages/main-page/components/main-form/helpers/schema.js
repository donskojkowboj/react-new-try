import * as yup from 'yup';

export const feedbackSchema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа')
    .matches(/^[а-яА-Я]+$/, 'Только русские буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверный формат телефона'),
  email: yup.string().required('Email обязателен').email('Неверный формат email'),
});
