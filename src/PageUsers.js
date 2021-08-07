
import * as React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { List, Datagrid, Create, Edit, TabbedForm,
    SimpleForm, ReferenceField, ReferenceInput, ReferenceManyField, SelectField,
    TextInput, DateInput, SelectInput, PasswordInput,
    TextField, DateField, EditButton, DeleteButton,     
    SearchInput, Filter, required } from 'react-admin';
import { useDataProvider, Loading, Error } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PageTitle = "User Management";
var user_types = [
    { user_type: 'admin', user_type_name: 'Administrator' },
    { user_type: 'user', user_type_name: 'User' },
];

const useStyles = makeStyles({
    inputBox: { backgroundColor: 'transparent' },
    inlineBlock: { display: 'block', marginRight: '1rem' },
});



export const DataFilter = (props) => (
    <Filter {...props}>
        <TextInput source="username" label="Search:" alwaysOn />
    </Filter>
);
    
export const DataList = (props) => (
    <List {...props} filters={<DataFilter />} title={PageTitle}>
        <Datagrid rowClick="edit">
            <TextField source="user_id" />
            <ReferenceField label="User" source="user_type" reference="user_types" link={false}>
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Username" source="user_id" reference="users" link="show">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="user_title"  />
            <TextField source="user_number" />
            <TextField source="user_email" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);


export const DataCreate = (props) => {
    const classes = useStyles();
            /* <SelectInput source="user_type" style={{ minWidth: 480 }} classes={ classes.inputBox } optionText="user_type_name" optionValue="user_type" choices={user_types} validate={required()}  /> */    
    return (
    <Create {...props} title={PageTitle}>
        <SimpleForm>
            <ReferenceInput source="user_type" reference="user_types">
                <SelectInput optionValue="id" optionText="name" style={{ minWidth: 480 }} classes={ classes.inputBox } validate={required()}  />
            </ReferenceInput>

            <TextInput source="user_title" style={{ minWidth: 640 }} classes={ classes.inputBox } validate={required()} />
            <TextInput source="username" style={{ minWidth: 480 }} classes={ classes.inputBox } validate={required()} alwaysOn />
            <TextInput source="user_email" style={{ minWidth: 640 }} classes={ classes.inputBox } validate={required()} alwaysOn />
            <TextInput source="user_about" style={{ minWidth: '100%' }} classes={ classes.inputBox } options={{ multiLine : true }} fullwidth={true} multiline />
            <PasswordInput source="password" classes={ classes.inputBox } />
            <PasswordInput source="password2" classes={ classes.inputBox } />
        </SimpleForm>
    </Create>
    );
};






export const DataEdit = (props) => {     
    const classes = useStyles();

    return (
    <Edit {...props} title={PageTitle}>
        <SimpleForm>
            <TextInput disabled label="Id" source="user_id" className={ classes.inputBox }  />
            <ReferenceInput source="user_type" reference="user_types">
                <SelectInput optionValue="id" optionText="name" style={{ minWidth: 480 }} classes={ classes.inputBox } validate={required()}  />
            </ReferenceInput>
            <TextInput source="user_title" style={{ minWidth: 480 }} classes={ classes.inputBox } validate={required()} />
            <TextInput source="username" style={{ minWidth: 480 }} classes={ classes.inputBox } validate={required()} alwaysOn />
            <TextInput source="user_email" style={{ minWidth: 480 }} classes={ classes.inputBox } validate={required()} alwaysOn />
            <TextInput source="user_about" style={{ minWidth: '100%' }} classes={ classes.inputBox } options={{ multiLine : true }} fullwidth={true} multiline />
            <PasswordInput source="password" classes={ classes.inputBox } />
            <PasswordInput source="password2" classes={ classes.inputBox } />
        </SimpleForm>
    </Edit>
    );
};
