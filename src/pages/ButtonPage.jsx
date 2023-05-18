import React from "react";
import { Button } from "../components/Button";
import { GoAlert, GoCloudDownload, GoDatabase } from "react-icons/go";

export const ButtonPage = () => {
 
 return (
    <div>
      <div>
        <Button primary outline rounded className="mb-5" onClick={console.log('clicked')}>
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoAlert /> Secondary
        </Button>
      </div>
      <div>
        <Button warning >
          Warning
          <GoCloudDownload />
        </Button>
      </div>
      <div>
        <Button danger>
          Danger
        </Button>
      </div>
      <div>
        <Button success outline><GoDatabase />Success</Button>
      </div>
    </div>
  );
};
