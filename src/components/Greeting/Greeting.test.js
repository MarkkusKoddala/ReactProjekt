import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello world!" as a text', () => {
        render(<Greeting />);
        const helloWorldElement = screen.getByText('Hello world!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('button not clicked', () => {
        render(<Greeting />);
        const paragraphElement = screen.getByText('Tekst1', { exact: false });
        expect(paragraphElement).toBeInTheDocument();
    });

    test('button was clicked', () => {
        render(<Greeting />);
        const buttonElement = screen.getByText("Change");
        userEvent.click(buttonElement);
        const outputElement = screen.getByText('Tekst2', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });
});
