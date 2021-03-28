import React from 'react';
import './UsersForm.css';
import '../../common-styles/Button.css';
import { Form, Field } from 'react-final-form';

const UsersForm = ({onFormSubmit, onSpaceDown, isDisabled}) => {
    return (
        <Form
          onSubmit={onFormSubmit}
          render={ ({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} className='Form'>
                <label className='Form-label'>Type space-separated GitHub users names</label>
                <div className='Form-inputWrapper'>
                    <Field
                        className='Form-input'
                        name="userName"
                        component="input"
                        type="text"
                        placeholder="Enter GitHub users"
                        onKeyDown={(e) => onSpaceDown(e, values)}
                    />
                    <button className='Form-button Button'
                            disabled={isDisabled}>Get User</button>
                </div>
            </form>
          )}
        />
    );
};

export default UsersForm;