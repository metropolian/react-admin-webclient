
import * as React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { List, Datagrid, Create, Edit, TabbedForm,
    SimpleForm, ReferenceField, ReferenceInput, ReferenceManyField, SelectField,
    TextInput, DateInput, SelectInput, PasswordInput,
    TextField, DateField, EditButton, DeleteButton,     
    SearchInput, Filter, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PageTitle = "Settings";
    
const useStyles = makeStyles({
    inputBox: { backgroundColor: 'transparent' },
    inlineBlock: { display: 'block', marginRight: '1rem' },
});


export const DataFilter = (props) => (
    <Filter {...props}>
        <TextInput source="setting_name" label="Search:" alwaysOn />
    </Filter>
);
    
export const DataList = (props) => (
    <List {...props} filters={<DataFilter />} title={PageTitle}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="setting_name" />
            <TextField source="setting_value"  />
            <EditButton />
            <DeleteButton undoable={false} />
        </Datagrid>
    </List>
);


export const DataCreate = (props) => (
    <Create {...props} title={PageTitle}>
        <SimpleForm>
            <TextInput source="setting_name" style={{ minWidth: 480 }} validate={required()} />
            <TextInput source="setting_value" style={{ minWidth: '100%' }} options={{ multiLine : true }} fullwidth={true} multiline />
        </SimpleForm>
    </Create>
);


export const DataEdit = (props) => {     
    const classes = useStyles();

    return <Edit {...props} title={PageTitle}>
        <SimpleForm>
            <TextInput disabled label="Id" source="setting_id" />            
            <TextInput source="setting_name" style={{ minWidth: 480 }} validate={required()} />
            <TextInput source="setting_value" style={{ minWidth: '100%' }} options={{ multiLine : true }} fullwidth={true} multiline />
        </SimpleForm>
    </Edit>
};
