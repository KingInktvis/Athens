import React from 'react';

export default ({input, type, label, meta }) => {
    return (
        <div>
            <label>{label}</label><br/>
            {field(input, type)}<br/>
            {error(meta)}
        </div>
    );
};

function field (input, type) {
    switch (type) {
        case 'text-area':
            return (
                <textarea {...input}/>
            );
        default:
            return <input {...input} type={type}/>
    }
}

function error(meta) {
    if (meta.error && meta.touched) {
        return <b>{meta.error}</b>;
    }
}