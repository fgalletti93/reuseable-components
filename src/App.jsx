import React from "react";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <div>
      <div>
        <Button>Primary</Button>
      </div>
      <div>
        <Button>Secondary</Button>
      </div>
      <div>
        <Button>Warning</Button>
      </div>
      <div>
        <Button>Danger</Button>
      </div>
      <div>
        <Button>Success</Button>
      </div>
      <div>
        <Button>Plain</Button>
      </div>
    </div>
  )
}