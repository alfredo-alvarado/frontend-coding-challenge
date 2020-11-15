import React, { FormEvent, ChangeEvent } from 'react'
import { Form } from 'react-bootstrap';
import SquaredButton from '../../Custom/SquaredButton';
import classes from './SearchBar.module.css';

interface Props {
    formSubmitted: (event: FormEvent<HTMLFormElement>) => void,
    inputChanged: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

const SearchBar = (props: Props) => {

    const {formSubmitted, inputChanged, inputValue} = props;

    return (
        <Form className={classes.SearchBar} onSubmit={formSubmitted}>
            <Form.Label>
                Filter
            </Form.Label>
            <div className={classes['SearchBar__input-group']}>
                <Form.Control 
                    onChange={inputChanged}
                    value={inputValue}
                />
                <SquaredButton type="submit">
                    Filter
                </SquaredButton>
            </div>
        </Form>
    )
}

export default SearchBar;
