import {render} from "@testing-library/react";
import Login from "./Login";

describe("Login", ()=>{
    test("Debe renderizar el componente", () => {
     render(<Login>
        <h4>Content</h4>
     </Login>)
     expect(screen.getByText(/Testing/i)).toBeDefined()
    });

});