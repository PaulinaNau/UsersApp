import React, { useState } from "react";
import { toHaveValue } from '@testing-library/jest-dom';
// import "@testing-library/jest-dom/extend-expect";
import { screen, fireEvent } from "@testing-library/react";
import FormField from "./FormField";
import { renderWithProviders } from 'helpers/renderWithProvider';


describe('Form Field', () => {
    it('Renders the component', () => {
        renderWithProviders(<FormField label="name" name="name" id="name"/>);
        
    });
})
