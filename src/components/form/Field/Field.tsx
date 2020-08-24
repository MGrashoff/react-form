import * as React from "react";
import './Field.css';

import {IErrors, IValues, IFormContext, FormContext} from "../Form/Form";

/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "checkbox" | "signature" | "radio";

export interface IValidation {
    rule: (values: IValues, fieldName: string, args: any) => string;
    args?: any;
}

export interface IFieldProps {
    /* The unique field id */
    id: string;

    /* The field name */
    name?: string;

    /* The label text for the field */
    label?: string;

    /* The editor for the field */
    editor?: Editor;

    /* The field value */
    value?: any;

    /* The field validator function and argument */
    validation?: IValidation;
}

/**
 * Builds the fields according to the props passed down
 * @param {IFieldProps} props - All the props the field needs
 * @returns {FC} - A functional component which decides its input field based on the editor type
 */
export const Field: React.FC<IFieldProps> = ({id, name, label, editor, value}) => {
    /**
     * Gets the validation error for the field
     * @param {IErrors} errors - All the errors from the form
     * @returns {string[]} - The validation error
     */
    const getError = (errors: IErrors): string => (errors ? errors[id] : "");

    /**
     * Gets the inline styles for editor
     * @param {IErrors} errors - All the errors from the form
     * @returns {any} - The style object
     */
    const getEditorStyle = (errors: IErrors): any =>
        getError(errors) ? {borderColor: "red"} : {};

    return (
        <FormContext.Consumer>
            {(context: IFormContext) => (
                <div className={`${editor!.toLowerCase() !== "checkbox" && editor!.toLowerCase() !== "radio" ? "form-group" : "form-check"}`}>
                    {label && <label htmlFor={id}>{label}</label>}

                    {editor!.toLowerCase() === "textbox" && (
                        <input
                            id={id}
                            type="text"
                            value={value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                context.setValues({[id]: e.currentTarget.value})
                            }
                            onBlur={() => context.validate(id)}
                            className="form-control"
                            style={getEditorStyle(context.errors)}
                        />
                    )}

                    {editor!.toLowerCase() === "multilinetextbox" && (
                        <textarea
                            id={id}
                            value={value}
                            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                                context.setValues({[id]: e.currentTarget.value})
                            }
                            onBlur={() => context.validate(id)}
                            className="form-control"
                            style={getEditorStyle(context.errors)}
                        />
                    )}

                    {editor!.toLowerCase() === "checkbox" && (
                        <input
                            id={id}
                            type="checkbox"
                            value={value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                context.setValues({[id]: e.currentTarget.value})
                            }
                            name={name}
                            className="form-check-input checkbox"
                        />
                    )}

                    {editor!.toLowerCase() === "radio" && (
                        <input
                            id={id}
                            type="radio"
                            value={value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                context.setValues({[name !== undefined ? name : id]: e.currentTarget.value})
                            }
                            name={name}
                            className="form-check-input radio"
                        />
                    )}

                    {editor!.toLowerCase() === "signature" && (
                        <input
                            id={id}
                            type="text"
                            value={value}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                context.setValues({[id]: e.currentTarget.value})
                            }
                            onBlur={() => context.validate(id)}
                            className="form-control signature"
                            style={getEditorStyle(context.errors)}
                        />
                    )}

                    {getError(context.errors) && (
                        <div style={{color: "red", fontSize: "80%"}}>
                            <p>{getError(context.errors)}</p>
                        </div>
                    )}
                </div>
            )}
        </FormContext.Consumer>
    );
};

Field.defaultProps = {
    editor: "textbox"
};
