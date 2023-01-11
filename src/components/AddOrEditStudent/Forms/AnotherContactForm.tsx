import { useFormContext } from 'react-hook-form';
import { useId, FC } from 'react';
import { Grid } from '@mui/material';
import { anotherContactFormValues } from '../utils/anotherContactFormValues';
import getFormContent from '../../../shared/getFormContent';

const AnotherContactForm: FC = () => {
    const { control, formState: { errors }, } = useFormContext();
    const key = useId();

    return (
        <>
            {
                anotherContactFormValues.map((item, index) => (
                    <Grid key={key + index} item xs={12} sm={3}>
                        {getFormContent(item, control, errors)}
                    </Grid>
                ))
            }
        </>
    )
}

export default AnotherContactForm