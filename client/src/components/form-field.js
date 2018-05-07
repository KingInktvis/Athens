import React from 'react';

export default ({input, type, label, meta }) => {
    return (
        <div>
            <label>{label}</label><br/>
            <input {...input} type={type}/><br/>
            {error(meta)}
        </div>
    );
};

function error(meta) {
    if (meta.error && meta.touched) {
        return <b>{meta.error}</b>;
    }
}