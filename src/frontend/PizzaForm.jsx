import React from 'react';
import {
  Form,
  FormHeader,
  FormSection,
  FormFooter,
  Label,
  RequiredAsterisk,
  Textfield,
  Button,
  useForm,
  HelperMessage,
  TextArea
} from "@forge/react";
import { invoke } from '@forge/bridge';

export const PizzaForm = ({ onSubmit }) => {
  const { handleSubmit, register, getFieldId } = useForm();

  const handleRecipe = async (data) => {
    console.log("Handling recipe...");
    invoke('saveRecipe', data).then((returnedData) => {
      console.log(returnedData);
      onSubmit(returnedData);
    });
  };

  return (
    <Form onSubmit={handleSubmit(handleRecipe)}>
      <FormHeader title="Pizza Recipe Form">
        Required fields are marked with an asterisk <RequiredAsterisk />
      </FormHeader>
      <FormSection>
        <Label labelFor={getFieldId("pizzaName")}>
          Pizza Name
          <RequiredAsterisk />
        </Label>
        <Textfield {...register("pizzaName", { required: true })} />
        <HelperMessage>
          Key in your pizza name. For example, "Margherita".
        </HelperMessage>
        <Label labelFor="toppings">Toppings</Label>
        <TextArea
          {...register("toppings", { required: true })}
          placeholder="Tomato, Mozarella, Basil"
        />
        <HelperMessage>
          Key in your pizza toppings. For example, "Tomato, Mozarella, Basil".
        </HelperMessage>
      </FormSection>
      <FormFooter>
        <Button appearance="subtle" type="reset">
          Clear
        </Button>
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </FormFooter>
    </Form>
  );
}
