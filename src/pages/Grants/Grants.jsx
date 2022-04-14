import React, { useEffect, useState } from 'react';
import './Grants.css';
//import { Link } from 'react-router-dom';

function Grants() {
    const [forms, setForms] = useState([{
        email: '',
        message: '',
    }])

    useEffect(() => {
        fetch("/forms").then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonRes => setForms(jsonRes));
    })

    return (
        <div>
            <div className="header">Grants/Scholarships</div>
            {/* <div id='grantBody'>
                <div id='objective'>
                    Objective: To provide assistance for disadvantage children in Desruisseaus Area.<br />
                    The foundation will offer a special grant this year in honor of Mrs. Anne Euriza James. This will be a one-time payment.
                </div>
                <br />
                <div id='grantLinks'>
                    <div id='ricoLink'>
                        <Link to='/RFG.docx' target="_blank" download>Rico Foundation Grant form</Link>
                        <li>
                            The foundation will offer Grants for socio-economic disadvantage children each year. This will be a one-time payment.
                        </li>
                        <li>
                            For Unusual circumstances
                        </li>
                        <li>
                            Exceptional student
                        </li>
                        <li>
                            Duncan Student Athlete
                        </li>
                    </div>
                    <div id='AEJLink'>
                        <Link to='/RFGEJ.docx' target="_blank" download>Mrs. Anne Eurize James Grant Form </Link>
                        <li>The foundation will offer a special grant this yaer in honor of Mrs. Anne Euriza James. This will be a one-time payment.</li>
                    </div>
                </div>
                <div>
                    *Note: Please email all completed applications to Aymar Sinaise at&nbsp;<Link to="" onClick={() => window.location = 'mailto:ricofoundation@hotmail.com'}>ricosfoundation@hotmail.com</Link>
                    <div>Applications will be accepted between May 15th and July 20th, 2021.</div>
                </div>
            </div> */}
            {forms.map(form =>
                <div key={form.id}>
                    <h1>{form.email}</h1>
                    <h1>{form.message}</h1>
                </div>
            )}
        </div>
    )
}

export default Grants
