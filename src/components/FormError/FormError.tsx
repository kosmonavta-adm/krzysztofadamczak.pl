import { Text } from '@/components/FormError/FormError.styles';

export const FormError = ({ error }: { error: string }) => {
    return <Text>{error}</Text>;
};

export default FormError;
