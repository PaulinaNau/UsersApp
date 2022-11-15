import React, { useState } from "react";
import { toHaveValue } from '@testing-library/jest-dom';
import { screen, fireEvent } from "@testing-library/react";
import AddUser from './AddUser'
import { renderWithProviders } from 'helpers/renderWithProvider';
import Dashboard from "./Dashboard";


describe('Add User', () => {
    it('Adds new user', () => {
        renderWithProviders(
        <>
        <AddUser/>
        <Dashboard/>
        </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Grażyna'}});
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '55%'}});
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '4,5'}});
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Grażyna');
    });
})
