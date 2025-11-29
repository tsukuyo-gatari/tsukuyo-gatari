import { TextField, type TextFieldProps } from "@mui/material";
import { useStartTransition } from "../../hooks/useStartTransition";
import "../../styles.css";

export type InputTextProps = TextFieldProps & {
    maxLength?: number;
};

export const InputText = (props: InputTextProps) => {
    const { ref, visible } = useStartTransition()

    return <TextField fullWidth variant="outlined" slotProps={{
        input: {
            inputProps: { maxLength: props.maxLength },
        },
    }}
        className="input-text"
        ref={ref}
        sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }
        }
        {...props}
    />
}