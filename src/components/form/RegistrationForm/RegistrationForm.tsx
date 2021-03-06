import * as React from "react";
import {Form, IFields, isValidPostcode, required} from "../Form/Form";
import {Field} from "../Field/Field";

import './RegistrationForm.css';

export const RegistrationForm: React.FC = () => {

    /* Define all fields of the form */
    const fields: IFields = {
        dateOfMoving: {
            id: "dateOfMoving",
            label: "Date of moving",
            validation: {rule: required}
        },
        apartment: {
            id: "apartment",
            label: "Apartment post code",
            validation: {rule: isValidPostcode}
        },
        address: {
            id: "address",
            label: "Street (or place etc.), house number, add-on (e.g. name of main tenant), floor, apartment number",
            validation: {rule: required}
        },
        landlordDetails: {
            id: "landlordDetails",
            label: "Name and address of the landlord",
            validation: {rule: required}
        },
        surname: {
            id: "surname",
            label: "Surname / Doctoral degree",
            validation: {rule: required}
        },
        birthName: {
            id: "birthName",
            label: "Birth name (if applicable)",
        },
        firstName: {
            id: "firstName",
            label: "First name(s)",
            validation: {rule: required}
        },
        dateOfBirth: {
            id: "dateOfBirth",
            label: "Date of birth",
            validation: {rule: required}
        },
        placeOfBirth: {
            id: "placeOfBirth",
            label: "Place of birth (city and country)",
            validation: {rule: required}
        },
        nationalities: {
            id: "nationalities",
            label: "Current Nationalities",
            validation: {rule: required}
        },
        household: {
            id: "household",
            label: "Please fill in the head of the household's details followed by each family member living in the same domicile",
            editor: "multilinetextbox",
            validation: {rule: required}
        },
        previous: {
            id: "previous",
            label: "Previous accomodation (post code, Municipality / street / house number and add-on)",
        },
        signature: {
            id: "signature",
            editor: "signature",
            label: "Date, city and signature of the person subject to registration",
        },
        cardAuthority: {
            id: "cardAuthority",
            label: "Issuing authority, date of issue, expiry date and serial number",
            validation: {rule: required}
        },
        passAuthority: {
            id: "passAuthority",
            label: "Issuing authority, date of issue, expiry date and serial number",
            validation: {rule: required}
        },

        // ##### Radiobuttons ##### //
        male: {
            id: "male",
            name: "sex",
            editor: "radio",
            label: "Male",
            value: "male"
        },
        female: {
            id: "female",
            name: "sex",
            editor: "radio",
            label: "Female",
            value: "female"
        },
        single: {
            id: "single",
            name: "relationship",
            editor: "radio",
            label: "single",
            value: "single"
        },
        civil: {
            id: "civil",
            name: "relationship",
            editor: "radio",
            label: "civil partnership",
            value: "civil"
        },
        anCivil: {
            id: "anCivil",
            name: "relationship",
            editor: "radio",
            label: "annulled civil partnership",
            value: "anCivil"
        },
        married: {
            id: "married",
            name: "relationship",
            editor: "radio",
            label: "married",
            value: "married"
        },
        divorced: {
            id: "divorced",
            name: "relationship",
            editor: "radio",
            label: "divorced",
            value: "divorced"
        },
        widowed: {
            id: "widowed",
            name: "relationship",
            editor: "radio",
            label: "widowed",
            value: "widowed"
        },
        widowedPartner: {
            id: "widowedPartner",
            name: "relationship",
            editor: "radio",
            label: "widowed civil partner",
            value: "widowedPartner"
        },
        lutheran: {
            id: "lutheran",
            name: "religion",
            editor: "radio",
            label: "Lutheran",
            value: "lutheran"
        },
        jewish: {
            id: "jewish",
            name: "religion",
            editor: "radio",
            label: "Jewish Com. Hamb.",
            value: "jewish"
        },
        other: {
            id: "other",
            name: "religion",
            editor: "radio",
            label: "Other religious communities / no statement / none",
            value: "other"
        },
        reformed: {
            id: "reformed",
            name: "religion",
            editor: "radio",
            label: "Reformed Churches",
            value: "reformed"
        },
        catholic: {
            id: "catholic",
            name: "religion",
            editor: "radio",
            label: "Roman Catholic",
            value: "catholic"
        },
        idCard: {
            id: "idCard",
            editor: "checkbox",
            label: "ID Card",
            value: "idCard"
        },
        passport: {
            id: "passport",
            editor: "checkbox",
            label: "Passport",
            value: "passport"
        },
    };

    /* Return the form with all requested fields and send the results to a dummy API */
    return (
        <Form
            action="http://localhost:4321/api/dummy"
            fields={fields}
            render={() => (
                <React.Fragment>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="alert alert-info" role="alert">
                                <h1>Registration</h1>
                                <p>at the registration office</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-5 col-md-3">
                            <Field {...fields.dateOfMoving} />
                        </div>
                        <div className="col-xs-7 col-md-3">
                            <Field {...fields.apartment} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Field {...fields.address} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Field {...fields.landlordDetails} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Field {...fields.surname} /></div>
                        <div className="col-xs-12 col-md-4">
                            <Field {...fields.birthName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-10">
                            <Field {...fields.firstName} />
                        </div>
                        <div className="col-xs-3 col-md-1">
                            <Field {...fields.male} />
                        </div>
                        <div className="col-xs-3 col-md-1">
                            <Field {...fields.female} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <Field {...fields.dateOfBirth} />
                        </div>
                        <div className="col-xs-8">
                            <Field {...fields.placeOfBirth} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator"/>
                        </div>
                    </div>

                    {/* Relationship Status */}
                    <div className="row col-xs-12">
                        <h2>Relationship Status:</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-3"><Field {...fields.single} /></div>
                        <div className="col-xs-6 col-md-3"><Field {...fields.civil} /></div>
                        <div className="col-xs-12 hidden-md hidden-lg">
                            <div className="seperator-small"/>
                        </div>
                        <div className="col-xs-6 col-md-3"><Field {...fields.anCivil} /></div>
                        <div className="col-xs-6 col-md-3"><Field {...fields.married} /></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator-small"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-3"><Field {...fields.divorced} /></div>
                        <div className="col-xs-6 col-md-3"><Field {...fields.widowed} /></div>
                        <div className="col-xs-12 hidden-md hidden-lg">
                            <div className="seperator-small"/>
                        </div>
                        <div className="col-xs-12 col-md-3"><Field {...fields.widowedPartner} /></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator"/>
                        </div>
                    </div>

                    {/* Religion */}
                    <div className="row col-xs-12">
                        <h2>Religious Affiliation:</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-3"><Field {...fields.lutheran} /></div>
                        <div className="col-xs-6 col-md-3"><Field {...fields.jewish} /></div>
                        <div className="col-xs-12 hidden-md hidden-lg">
                            <div className="seperator-small"/>
                        </div>
                        <div className="col-xs-12 col-md-6"><Field {...fields.other} /></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator-small"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-3"><Field {...fields.catholic} /></div>
                        <div className="col-xs-6 col-md-3"><Field {...fields.reformed} /></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Field {...fields.nationalities} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-md-1">
                            <Field {...fields.idCard} />
                        </div>
                        <div className="col-xs-9 col-md-11">
                            <Field {...fields.cardAuthority} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-md-1">
                            <Field {...fields.passport} />
                        </div>
                        <div className="col-xs-9 col-md-11">
                            <Field {...fields.passAuthority} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Field {...fields.household} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Field {...fields.previous} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="seperator"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <Field {...fields.signature} />
                        </div>
                    </div>
                </React.Fragment>
            )}
        />
    );
};
